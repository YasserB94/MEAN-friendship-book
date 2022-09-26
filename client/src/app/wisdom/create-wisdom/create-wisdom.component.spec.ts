import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateWisdomComponent } from './create-wisdom.component';

describe('CreateWisdomComponent', () => {
  let component: CreateWisdomComponent;
  let fixture: ComponentFixture<CreateWisdomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateWisdomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateWisdomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
