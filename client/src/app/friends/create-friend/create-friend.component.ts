import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { PROGRAMMING_LANGUAGES } from '../assets/LANGUAGES';
import FriendInterface from '../models/FriendInterface';
@Component({
  selector: 'app-create-friend',
  templateUrl: './create-friend.component.html',
  styleUrls: ['./create-friend.component.scss'],
})
export class CreateFriendComponent implements OnInit {
  enteredName: string = '';
  choosenFavourite: string = '';
  enteredMessage: string = '';
  programmingLanguages: string[] = PROGRAMMING_LANGUAGES;
  @Output() friendCreated = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    const friend: FriendInterface = {
      name: this.enteredName,
      favourite: this.choosenFavourite,
      message: this.enteredMessage,
    };
    this.friendCreated.emit(friend);
  }
}
