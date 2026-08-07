import { test } from '@playwright/test'
test('Frame Handling' , async({page})=> {
    await page.goto('https://demo.automationtesting.in/Frames.html')
    //single farme
    const singleframe= await page.frameLocator('//iframe[@id="singleframe"]')
    await singleframe.locator('//input[@type="text"]').fill('Hi Bro')

    //multi frame
    const outerframe=await page.frameLocator('//iframe[@src="MultipleFrames.html"]')
    const innerframe = await page.frameLocator('//iframe[@src="SingleFrame.html"]')
    await innerframe.locator('//input[@type="text"]')
console.log('Hi bro')
})