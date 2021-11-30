import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule, LoadingController } from '@ionic/angular';
import { provideMockStore } from '@ngrx/store/testing';

import { LoadingComponent } from './loading.component';

describe('LoadingComponent', () => {
  let component: LoadingComponent;
  let fixture: ComponentFixture<LoadingComponent>;
  
  const initialState = {
    loading: {
      active: 0,
      actionsInProgress: []
    }
  };
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadingComponent ],
      imports: [IonicModule.forRoot()],
      providers: [
        provideMockStore({
          initialState,
        })
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
