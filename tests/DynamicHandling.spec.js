import {test} from '@playwright/test'
test ('Window Handling' , async ({browser}) =>{
    const context = await browser.newContext()
    const page = await context.newPage()

    await page.goto('https://www.amazon.in/')
    await page.locator('//input[@id="twotabsearchtextbox"]').fill('apple watch series 11 gps and cellular')
    await page.keyboard.press('Enter')
    //await page.pause()

    const[newPage] = await Promise.all([context.waitForEvent('page'),
    page.click('//h2[text()="Results"]//ancestor::div[@data-cel-widget="search_result_1"]//following-sibling::div[@data-asin="B0FQFLJ2XX"]//descendant::h2[contains(@aria-label,"Watch Series 11 GPS + Cellular 46mm Space Grey Aluminium Case with Black Sport Band - S/M")]') 
    ])
    await newPage.waitForLoadState()
    const title = await newPage.title()
    console.log(title)
})