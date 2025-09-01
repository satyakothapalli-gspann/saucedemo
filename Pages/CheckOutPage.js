import { expect } from "@playwright/test"

export class CheckOutPage {
    constructor(page) {
        this.page = page
        this.firstName = page.locator('#first-name')
        this.lastName = page.locator('#last-name')
        this.postalCode = page.locator('#postal-code')
        this.continueButtonInCheckOutPage = page.locator('#continue')
        this.paymentInformation=page.locator('[data-test="payment-info-value"]')
        this.total=page.locator('[data-test="total-label"]')
    }
    async enterDetailsInCheckOutPage(firstName, lastName, potalCode) {
        await this.firstName.waitFor ({ state: 'visible' });
        await this.firstName.fill(firstName)
        await this.lastName.fill(lastName)
        await this.postalCode.waitFor({ state:'visible',timeout:6000});
        await this.postalCode.fill(potalCode)
        await expect(this.continueButtonInCheckOutPage).toBeVisible()
        //await this.page.waitForTimeout(6000)
        //await this.page.waitForSelector('#continue', { state: 'visible' });
        await this.continueButtonInCheckOutPage.waitFor ({ state: 'visible' });
        await this.continueButtonInCheckOutPage.click()
    }
async validateCheckOutDetails(){
const orderID=await this.paymentInformation.textContent()
console.log(orderID.split(" ")[1])
const totalAmount=await this.total.textContent()
console.log(totalAmount.split(" ")[1])
}
}