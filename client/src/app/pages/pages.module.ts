import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContributeComponent } from './contribute/contribute.component';

import { WisdomModule } from '../wisdom/wisdom.module';
import { WisdomService } from '../wisdom/wisdom.service';

@NgModule({
  declarations: [AboutComponent, HomeComponent, ContributeComponent],
  imports: [CommonModule, WisdomModule],
  providers: [WisdomService],
})
export class PagesModule {}
