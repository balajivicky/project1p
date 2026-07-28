import { test } from '@playwright/test'

test ('validate test application',async({page}) =>{
    await page.goto('https://practicetestautomation.com/practice-test-login/')
    await page.locator('//input[@id="username"]').fill('student')
    await page.locator('//input[@name="password"]').fill('Password123')
    await page.locator('//button[text()="Submit"]').click()

})