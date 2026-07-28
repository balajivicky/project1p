export class SearchHotel{
    constructor(page){
        this.page=page
        this.location = page.locator('//select[@id="location"]')
        this.hotels = page.locator('//select[@id="hotels"]')
        this.roomtype = page.locator('//select[@id="room_type"]')
        this.numberofRooms = page.locator('//select[@id="room_nos"]')
        this.adultsperRoom = page.locator('//select[@id="adult_room"]')
        this.childrenperRoom = page.locator('//select[@id="child_room"]')
        this.searchbutton = page.locator('//input[@id="Submit"]')
    }
    async selectLocation(){
        await this.location.selectOption({label : "London" })
    }
    async selectHotels(){
        await this.hotels.selectOption({label : "Hotel Sunshine"})
    }
    async selectRoomType(){
        await this.roomtype.selectOption({label : "Deluxe"})
    }
    async selectnumberofRooms(){
        await this.numberofRooms.selectOption({label : "1 - One"})
    }
    async selectadultsperRoom(){
        await this.adultsperRoom.selectOption({label : "2 - Two"})
    }
    async selectchildrensperRoom(){
        await this.childrenperRoom.selectOption({label : "3 - Three"})
    }
    async clicksearchButton(){
        await this.searchbutton.click()
    }
}