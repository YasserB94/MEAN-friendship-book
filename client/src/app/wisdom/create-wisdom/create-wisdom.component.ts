import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import Wisdom from 'src/app/models/wisdom.model';
import { PROGRAMMING_LANGUAGES } from '../assets/programmingLanguages';
import { WisdomService } from '../wisdom.service';
@Component({
  selector: 'app-create-wisdom',
  templateUrl: './create-wisdom.component.html',
  styleUrls: ['./create-wisdom.component.scss'],
})
export class CreateWisdomComponent implements OnInit {
  private programmingLanguages = PROGRAMMING_LANGUAGES;
  constructor(
    private formBuilder: FormBuilder,
    private wisdomService: WisdomService,
    private router: Router
  ) {}
  createWisdomForm!: FormGroup;

  ngOnInit(): void {
    this.createWisdomForm = this.formBuilder.group({
      name: [''],
      programmingLanguage: [''],
      widsom: [''],
    });
  }
  onSubmit() {
    const date = new Date();
    const wisdom: Wisdom = {
      contributor: this.createWisdomForm.get('name')?.value,
      programmingLanguage: this.createWisdomForm.get('programmingLanguage')
        ?.value,
      message: this.createWisdomForm.get('widsom')?.value,
      createdAt: date.toDateString(),
    };
    this.wisdomService.addWisdom(wisdom);
    this.router.navigate(['home']);
  }
  public get programmingLang(): string[] {
    return this.programmingLanguages;
  }
}
