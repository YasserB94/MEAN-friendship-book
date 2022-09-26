import { Component, Input, OnInit } from '@angular/core';
import Wisdom from 'src/app/models/wisdom.model';

@Component({
  selector: 'app-wisdom-card',
  templateUrl: './wisdom-card.component.html',
  styleUrls: ['./wisdom-card.component.scss'],
})
export class WisdomCardComponent implements OnInit {
  @Input() wisdom?: Wisdom;
  constructor() {}

  ngOnInit(): void {}
}
