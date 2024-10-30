import {Category} from "../../../models/category.enum";
import {Product} from "../../../models/product.interface";

export function getProductArrayFixtureWithoutTaxes() {
  let products: Product[] = [];
  products.push(
    {
      id: 1,
      productName: 'productNameTest',
      category: Category.Food,
      isImported: false,
      price: 10,
      quantity: 1
    } as Product
  );
  products.push({
    id: 2,
    productName: 'productNameTest 2',
    category: Category.Food,
    isImported: false,
    price: 20,
    quantity: 2
  } as Product);
  return products;
}

export function getProductArrayFixture() {
  let products: Product[] = [];
  products.push(
    {
      id: 1,
      productName: 'productNameTest',
      category: Category.Food,
      isImported: false,
      price: 10,
      tax: 0,
      quantity: 1
    } as Product
  );
  products.push({
    id: 2,
    productName: 'productNameTest 2',
    category: Category.Food,
    isImported: false,
    price: 20,
    tax: 0,
    quantity: 2
  } as Product);
  return products;
}

export function getProductFixture(){
  return {
    id: 1,
    productName: 'food',
    category: Category.Food,
    isImported: false,
    price: 20,
    tax: 0,
    quantity: 2
  }
}
