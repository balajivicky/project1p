import { expect, test } from '@playwright/test';
test('Webtable Handling', async ({ page }) => {
    await page.goto('https://qavbox.github.io/demo/webtable/')
    const rowData = await page.locator('//table[@id="table02"]//tbody//tr[1]//td').allTextContents()
    console.log(rowData)

    await expect(rowData).toEqual([
       'Tiger Nixon',	
       'System Architect',	
       'Edinburgh',	
       '61',
       '2011/04/25',	
       '$320,800'
    ])
    await expect(rowData).toContain('Tiger Nixon')

    const columnData=await page.locator('//table[@id="table02"]//tbody//tr//td[2]').allTextContents()
    console.log(columnData)
    await expect(columnData).toContain('Junior Technical Author')
    const Data = await page.locator('//table[@id="table02"]//tbody//tr[4]//td[4]').textContent()
    console.log(Data)


})