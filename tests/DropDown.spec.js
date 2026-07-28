import {test} from '@playwright/test'

test ('validate drop down', async ({page}) =>{
    await page.goto('https://letcode.in/dropdowns/');

    //single dropdown task
    const singledrop = await page.locator('//select[@ id="lang"]');
    await singledrop.selectOption({index : 3})
    const text = await singledrop.locator('option:checked').textContent()
    console.log(text)

    //muli dropdown
    const multidrop = await page.locator('//select[@id="superheros"]');
    await multidrop.selectOption([{index: 0},{value:"bp"},{label:"Daredevil"}])
    const newtext = await multidrop.locator('option:checked').allTextContents()
    console.log(newtext)
 
})