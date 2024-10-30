import {calculateTaxes} from "./utlis";
import {Category} from "../models/category.enum";


describe('Utils', ()=>{
  describe('With IsImported = false', ()=>{
    const priceHT = 1;
    const isImported = false;
    it("should have no taxes for local food/medicine",()=>{
      expect(calculateTaxes(priceHT, Category.Food, isImported)).toEqual(0);
      expect(calculateTaxes(priceHT, Category.Medicine, isImported)).toEqual(0);
    });
    it("should have 10% tax for books",()=>{
      expect(calculateTaxes(priceHT, Category.Books, isImported)).toEqual(0.1);
    });
    it("should have 20% tax for perfume & electric Category",()=>{
      expect(calculateTaxes(priceHT, Category.Perfume, isImported)).toEqual(0.2);
      expect(calculateTaxes(priceHT, Category.Electric, isImported)).toEqual(0.2);
    });
  });
  describe('With IsImported = true', ()=>{
    const priceHT = 1;
    const isImported = true;
    it("should have 5% for local food/medicine",()=>{
      expect(calculateTaxes(priceHT, Category.Food, isImported)).toEqual(0.05);
      expect(calculateTaxes(priceHT, Category.Medicine, isImported)).toEqual(0.05);
    });
    it("should have 15% tax for books",()=>{
      expect(calculateTaxes(priceHT, Category.Books, isImported)).toEqual(0.15);
    });
    it("should have 25% tax for perfume & electric Category",()=>{
      expect(calculateTaxes(priceHT, Category.Perfume, isImported)).toEqual(0.25);
      expect(calculateTaxes(priceHT, Category.Electric, isImported)).toEqual(0.25);
    });
  })

})
