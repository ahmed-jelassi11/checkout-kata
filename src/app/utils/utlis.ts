import {Category} from "../models/category.enum";
import {RoundUpPipe} from "../pipes/roundup.pipe";

export function calculateTaxes(price: number, category: Category, isImported: boolean) {
  let roundUpPipe = new RoundUpPipe();
  let taxPercentage = 0;
  if (category === Category.Food || category === Category.Medicine) {
    taxPercentage = 0;
  } else if (category === Category.Books) {
    taxPercentage = 10;
  } else {
    taxPercentage = 20;
  }
  if (isImported) {
    taxPercentage += 5;
  }
  return roundUpPipe.transform((price * taxPercentage) / 100);
}
