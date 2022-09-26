import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import Wisdom from 'src/app/models/wisdom.model';
import { WisdomService } from 'src/app/wisdom/wisdom.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  private wisdoms: Wisdom[] = [];
  private wisdomSubscription?: Subscription;
  constructor(private wisdomService: WisdomService) {}

  ngOnInit(): void {
    this.wisdoms = this.wisdomService.getWisdoms();
    this.wisdomSubscription = this.wisdomService

      .getWisdomObservable()
      .subscribe((wisdoms: Wisdom[]) => {
        this.wisdoms = wisdoms;
      });
  }
  ngOnDestroy(): void {
    this.wisdomSubscription?.unsubscribe();
  }
  get _wisdoms(): Wisdom[] {
    return this.wisdoms;
  }
}
