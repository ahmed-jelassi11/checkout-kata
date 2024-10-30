import {TestBed} from '@angular/core/testing';

import {ProductService} from './product.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {getProductArrayFixtureWithoutTaxes} from "../store/product/fixtures/product.fixture";
import {of} from "rxjs";

describe('ProductService', () => {
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call getAll',()=>{
    const serviceSpy= spyOn(service.http, 'get').and.returnValue(of(getProductArrayFixtureWithoutTaxes()));
    service.getAll();
    expect(serviceSpy).toHaveBeenCalled();
  })
});
