import { expect } from "@playwright/test"
export class CartPage{
constructor(page){
    this.page=page
    this.productName=page.locator('.inventory_item_name')
    this.checkOutButton = page.locator('#checkout')
}
async validateProductInCartPage(productInCartPage){
    const product=await this.productName.textContent()
 expect(product).toContain(productInCartPage)
}
async navigateToCheckOutPage() {
await this.checkOutButton.click()

}
}