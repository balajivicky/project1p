import {test} from '@playwright/test'
test ('Window Handling' , async ({browser}) =>{
    const context = await browser.newContext()
    const page = await context.newPage()

    await page.goto('https://www.flipkart.com/')
    await page.locator('(//input[@title="Search for Products, Brands and More"])[1]').fill('macbook air m5')
    await page.keyboard.press('Enter')
    
    const[newPage] = await Promise.all([context.waitForEvent('page'),
    page.click('//a[contains(@title,"Apple AirPods 4 Wireless Earbuds, Personalised Spatial Audio,Sweat and Water Resistant Bluetooth")]') 
    ])
    await newPage.waitForLoadState()
    const title = await newPage.title()
    console.log(title)
})