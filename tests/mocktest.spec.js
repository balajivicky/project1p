import {test} from '@playwright/test'

test('validate instagram application', async ({ page }) => {

    await page.goto('https://www.instagram.com/?hl=en');
    await page.locator('//input[name="email"]').fill('balaji');
    await page.locator('//input[name="pass"]').fill('abcde123');
    await page.locator('//button[text()="login"]').click()

})