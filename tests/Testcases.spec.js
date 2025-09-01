import { test, expect } from './Fixture'


test('@run Entire Flow', async ({ page,launchApplication,loginPage,productPage,cartPage,checkOutPage}) => {
    test.setTimeout(40000);
    await launchApplication.launchApp()
    await loginPage.loginToApplication("standard_user", "secret_sauce")
    await productPage.addProductToCart("Sauce Labs Onesie")
    await productPage.navigateToCartPage()
    await cartPage.validateProductInCartPage("Sauce Labs Onesie")
    await cartPage.navigateToCheckOutPage()
    await checkOutPage.enterDetailsInCheckOutPage("satya", "devi", "534201")
    await checkOutPage.validateCheckOutDetails()

})


