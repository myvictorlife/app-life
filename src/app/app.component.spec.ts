import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { AppComponent } from './app.component';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';

class FakeLoader implements TranslateLoader {
  getTranslation(lang: string): Observable<any> {
    return of({ test: 'This is a Fake translate' });
  }
}
describe('AppComponent', () => {
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [AppComponent],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
        imports: [
          TranslateModule.forRoot({
            loader: {
              provide: TranslateLoader,
              useClass: FakeLoader,
            },
          }),
        ],
        providers: [provideMockStore({})],
      }).compileComponents();
    }),
  );

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
  // TODO: add more tests!
});
