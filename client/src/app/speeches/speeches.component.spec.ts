import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeechesComponent } from './speeches.component';

describe('SpeechesComponent', () => {
  let component: SpeechesComponent;
  let fixture: ComponentFixture<SpeechesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeechesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeechesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
