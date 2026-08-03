import { test } from '@playwright/test';
import { LoginPage } from '../page/LoginPage.js';
import { SearchHotel } from '../page/SearchHotel.js';
import { SelectHotel } from '../page/SelectHotel.js';

test('Page Object Model',async({page}) =>{
    const login = new LoginPage(page)
    await login.visitUrl()
    await login.enterUsername()
    await login.enterPassword()
    await login.clickButton()
    
    const search = new SearchHotel(page)
    await search.selectLocation()
    await search.selectHotels()
    await search.selectRoomType()
    await search.selectnumberofRooms()
    await search.selectadultsperRoom()
    await search.selectchildrensperRoom()
    await search.clicksearchButton()

    const select = new SelectHotel(page)
    //await select.clickRadioButton()
    await select.clickcontinueButton()
})