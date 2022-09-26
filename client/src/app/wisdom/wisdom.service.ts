import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import Wisdom from '../models/wisdom.model';

@Injectable({
  providedIn: 'root',
})
export class WisdomService {
  private wisdoms: Wisdom[] = [
    {
      contributor: 'Hi',
      programmingLanguage: 'html',
      message: 'wise',
      createdAt: '',
    },
  ];
  private wisdomSubject = new Subject<Wisdom[]>();
  constructor() {}
  getWisdoms(): Wisdom[] {
    return [...this.wisdoms];
  }
  getWisdomObservable(): Observable<Wisdom[]> {
    return this.wisdomSubject.asObservable();
  }
  addWisdom(wisdom: Wisdom) {
    this.wisdoms.push(wisdom);
    this.wisdomSubject.next([...this.wisdoms]);
  }
}
