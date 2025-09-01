export class LaunchApplication{
    constructor(page){
        this.page=page
    }
    async launchApp(){
        await this.page.goto("https://www.saucedemo.com/")
    }
}