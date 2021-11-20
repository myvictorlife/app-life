import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule, IonInput } from '@ionic/angular';

import { ShowHidePasswordComponent } from './show-hide-password.component';

describe('ShowHidePasswordComponent', () => {
  let component: ShowHidePasswordComponent;
  let fixture: ComponentFixture<ShowHidePasswordComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ShowHidePasswordComponent],
        imports: [IonicModule.forRoot()],
      }).compileComponents();

      fixture = TestBed.createComponent(ShowHidePasswordComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    }),
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('toggle', () => {
    it('should show the text', () => {
      component.show = false;
      component.input = {
        type: 'password',
      } as IonInput;
      component.toggleShow();
      fixture.detectChanges();
      expect(component.input.type).toEqual('text');
    });

    it('should show the password', () => {
      component.show = true;
      component.input = {
        type: 'text',
      } as IonInput;
      component.toggleShow();
      fixture.detectChanges();
      expect(component.input.type).toEqual('password');
    });
  });
});
