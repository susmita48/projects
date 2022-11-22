import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginDemoComponent } from './login-demo.component';

describe('LoginDemoComponent', () => {
  let component: LoginDemoComponent;
  let fixture: ComponentFixture<LoginDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
