import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TopBarComponent} from './top-bar.component';
import {provideMockStore} from "@ngrx/store/testing";
import {provideRouter} from "@angular/router";

describe('TopBarComponent', () => {
  let component: TopBarComponent;
  let fixture: ComponentFixture<TopBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopBarComponent],
      providers: [provideRouter([]), provideMockStore({
        initialState: {
          ["product"]: {
            products: [],
            error: ''
          },
          ['cart']: {
            items: []
          }
        }
      })]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TopBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
