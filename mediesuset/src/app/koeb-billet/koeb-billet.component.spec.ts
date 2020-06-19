import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KoebBilletComponent } from './koeb-billet.component';

describe('KoebBilletComponent', () => {
  let component: KoebBilletComponent;
  let fixture: ComponentFixture<KoebBilletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KoebBilletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KoebBilletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
