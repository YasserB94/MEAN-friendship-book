import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CreateWisdomComponent } from './create-wisdom/create-wisdom.component';
import { WisdomCardComponent } from './wisdom-card/wisdom-card.component';

@NgModule({
  declarations: [CreateWisdomComponent, WisdomCardComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatExpansionModule,
  ],
  exports: [CreateWisdomComponent, WisdomCardComponent],
})
export class WisdomModule {}
