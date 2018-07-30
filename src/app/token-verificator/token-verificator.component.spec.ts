import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenVerificatorComponent } from './token-verificator.component';

describe('TokenVerificatorComponent', () => {
  let component: TokenVerificatorComponent;
  let fixture: ComponentFixture<TokenVerificatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TokenVerificatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TokenVerificatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
