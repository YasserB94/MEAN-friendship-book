import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';

import { FriendsListComponent } from './friends-list/friends-list.component';
import { CreateFriendComponent } from './create-friend/create-friend.component';

@NgModule({
  declarations: [CreateFriendComponent, FriendsListComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatExpansionModule,
  ],
  exports: [CreateFriendComponent, FriendsListComponent],
})
export class FriendsModule {}
