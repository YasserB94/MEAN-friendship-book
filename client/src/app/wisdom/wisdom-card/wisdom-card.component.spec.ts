import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WisdomCardComponent } from './wisdom-card.component';

describe('WisdomCardComponent', () => {
  let component: WisdomCardComponent;
  let fixture: ComponentFixture<WisdomCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WisdomCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WisdomCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
