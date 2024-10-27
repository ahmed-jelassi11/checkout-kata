import {ProductState} from "./product.state";
import {ProductSelectors} from "./product.selector";
import {Category} from "../../models/category.enum";
import {Product} from "../../models/product.interface";
import {getProductArrayFixture, getProductArrayFixtureWithoutTaxes} from "./fixtures/product.fixture";

describe('ProductSelector', () => {


  it("should select the product state", () => {
    const productState: ProductState ={
      products: [],
      error: ''
    }
    const result = ProductSelectors.selectProductState.projector(productState);
    expect(result).toEqual(productState);
  });

  it("should select products", () => {
    const products : Product[] = getProductArrayFixtureWithoutTaxes();

    const result = ProductSelectors.selectProducts.projector(products);

    expect(result).toEqual(getProductArrayFixture());
  });

  it("should select the product by id", () => {
    const products = [{
      id: 1,
      productName: 'productNameTest',
      category: Category.Food,
      isImported: false,
      price: 1,
      quantity: 1
    },{
      id: 2,
      productName: 'productNameTest 2',
      category: Category.Food,
      isImported: false,
      price: 2,
      quantity: 2
    }];
    const result = ProductSelectors.selectProductById(2).projector(products);
    expect(result).toEqual({
      id: 2,
      productName: 'productNameTest 2',
      category: Category.Food,
      isImported: false,
      price: 2,
      quantity: 2
    });
  });


});
