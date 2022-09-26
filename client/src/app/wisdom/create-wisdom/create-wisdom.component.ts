import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { PROGRAMMING_LANGUAGES } from '../assets/programmingLanguages';
@Component({
  selector: 'app-create-wisdom',
  templateUrl: './create-wisdom.component.html',
  styleUrls: ['./create-wisdom.component.scss'],
})
export class CreateWisdomComponent implements OnInit {
  private programmingLanguages = PROGRAMMING_LANGUAGES;
  constructor(private formBuilder: FormBuilder) {}
  createWisdomForm!: FormGroup;

  ngOnInit(): void {
    this.createWisdomForm = this.formBuilder.group({
      name: [''],
      programmingLanguage: [''],
      widsom: [''],
    });
  }

  public get programmingLang(): string[] {
    return this.programmingLanguages;
  }
}
