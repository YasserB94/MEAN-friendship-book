import { Component } from '@angular/core';
import FriendInterface from './friends/models/FriendInterface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  storedFriends: FriendInterface[] = [];
  onFriendCreated(friend: FriendInterface) {
    this.storedFriends.push(friend);
  }
}
