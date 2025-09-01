import {test as base,expect} from '@playwright/test'
import { LaunchApplication } from '../Pages/LaunchApp'
import { LoginToApplication } from '../Pages/LoginToapplication'
import { ProductPage } from '../Pages/ProductPage'
import { CartPage } from '../Pages/CartPage'
import { CheckOutPage } from '../Pages/CheckOutPage'


export const test=base.extend({
    launchApplication:async({page},use)=>{
        await use(new LaunchApplication(page))
    },
    loginPage:async({page},use)=>{
        await use(new LoginToApplication(page))
    },
    productPage:async({page},use)=>{
        await use(new ProductPage(page))
    },
    cartPage:async({page},use)=>{
await use(new CartPage(page))
    },
    checkOutPage:async({page},use)=>{
        await use(new CheckOutPage(page))
    }
}) 

export { expect }