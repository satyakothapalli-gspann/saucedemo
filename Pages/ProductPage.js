import { expect } from '@playwright/test'; 
export class ProductPage{
    constructor(page){
        this.page=page
        this.products=page.locator('.inventory_item_description')
        this.cartButton=page.locator('.shopping_cart_link')
        this.yourCartText=page.locator('//span[text()="Your Cart"]')
    }
  async addProductToCart(productName){
await this.products.filter({hasText:productName}).getByRole('button',{name:'Add to cart'}).click()
  }

  async navigateToCartPage(){
await this.cartButton.click()
await expect(this.page.getByText("Your Cart")).toBeVisible()
  }
}