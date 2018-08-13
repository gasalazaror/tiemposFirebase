import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionPersonaComponent } from './informacion-persona.component';

describe('InformacionPersonaComponent', () => {
  let component: InformacionPersonaComponent;
  let fixture: ComponentFixture<InformacionPersonaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformacionPersonaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacionPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
