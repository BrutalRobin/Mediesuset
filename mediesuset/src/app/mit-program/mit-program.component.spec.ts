import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MitProgramComponent } from './mit-program.component';

describe('MitProgramComponent', () => {
  let component: MitProgramComponent;
  let fixture: ComponentFixture<MitProgramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MitProgramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MitProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
