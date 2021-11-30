/*
 * File: loading.component.spec.ts
 * Project: LIFE
 * Created: Tuesday, 30th November 2021 5:57:49 pm
 * Last Modified: Tuesday, 30th November 2021 8:59:05 pm
 * Copyright © 2021 My Custom Life
 */


import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { selectIsLoadingSpinnerActive } from '@life-store/ui-components/loading/selectors/loading.selectors';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';

import { LoadingComponent } from './loading.component';

describe('LoadingComponent', () => {
  let component: LoadingComponent;
  let fixture: ComponentFixture<LoadingComponent>;
  let store: MockStore;
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
    store = TestBed.inject(MockStore);
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should init hide the loading', () => {
    const storeSelect = jest.spyOn(store, 'select').mockImplementation(() => of(0));
    const hideLoadingSpy = jest.spyOn(component, 'hideLoading')
      .mockImplementation(() => new Promise(resolve => true));
    component.ngOnInit();
    expect(storeSelect).toHaveBeenCalledWith(selectIsLoadingSpinnerActive);
    expect(hideLoadingSpy).toHaveBeenCalled();
  });

  it('should init show the loading', () => {
    const storeSelect = jest.spyOn(store, 'select').mockImplementation(() => of(1));
    const showLoadingSpy = jest.spyOn(component, 'showLoading')
      .mockImplementation(() => new Promise(resolve => true));
    component.ngOnInit();
    expect(storeSelect).toHaveBeenCalledWith(selectIsLoadingSpinnerActive);
    expect(showLoadingSpy).toHaveBeenCalled();
  });

});
