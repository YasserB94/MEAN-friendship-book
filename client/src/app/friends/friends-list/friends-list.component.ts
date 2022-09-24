import { Component, Input, OnInit } from '@angular/core';
import FriendInterface from '../models/FriendInterface';
@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html',
  styleUrls: ['./friends-list.component.scss'],
})
export class FriendsListComponent implements OnInit {
  @Input() friends: FriendInterface[] = [
    // { name: 'Jef', favourite: 'HTML', message: 'HTML IS AWESOME!' },
    // { name: 'Jef', favourite: 'HTML', message: 'HTML IS AWESOME!' },
    // { name: 'Jef', favourite: 'HTML', message: 'HTML IS AWESOME!' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
