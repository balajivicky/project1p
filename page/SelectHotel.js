export class SelectHotel{
    constructor(page){
        this.page=page
        this.RadioButton = page.locator('//input[@id="radiobutton_3"]')
        this.continueButton = page.locator('//input[@id="continue"]')
    }
    async clickRadioButton(){
        await this.RadioButton.first().click()
    }
    async clickcontinueButton(){
        await this.continueButton.click()
    }

}