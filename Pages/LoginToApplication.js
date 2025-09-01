export class LoginToApplication {
    constructor(page) {
        this.page = page
        this.userName = page.locator('#user-name')
        this.password = page.locator('#password')
        this.loginButton=page.locator('#login-button')

    }
    async loginToApplication(userName,password) {
        //await this.page.waitForTimeout(1000)
        await this.userName.fill(userName)
        await this.password.fill(password)
        await this.loginButton.click()

    }
}