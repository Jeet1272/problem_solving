//------------- Problem 1 ------------ //
function radianToDegree(radian) {
    if (typeof radian !== 'number') {
        return 'Please insert a valid number'
    }
    else {
        // Used radian to degree formula //
        let degreeTemperature = radian * 180 / 3.1416;
        let temperature = degreeTemperature.toFixed(2);
        return temperature
    }
}
// const result = radianToDegree(10);
// console.log(result);

//-------------- Problem 2 -------------//
function isJavaScriptFile(file) {
    if (typeof file !== 'string') {
        return "Please input a valid file "
    }
    else if (file.endsWith('js')) {
        return true
    }
    else {
        return false
    }
}
// console.log(isJavaScriptFile('app.js'))

// ---------------- Problem 3 -------------//
function oilPrice(digelQuantity, petrolQuantity, octaneQuantity) {
    if (typeof digelQuantity !== 'number' || typeof petrolQuantity !== 'number' || typeof octaneQuantity !== 'number') {
        return "Plase input a valid number"
    }
    else {
        const digelLiterPrice = 114;
        const petrolLiterPrice = 130;
        const octaneLiterPrice = 135;
        let digelTotalPrice = digelLiterPrice * digelQuantity
        let petrolTotalPrice = petrolLiterPrice * petrolQuantity
        let octaneTotalPrice = octaneLiterPrice * octaneQuantity
        let totalPayableAmount = digelTotalPrice + petrolTotalPrice + octaneTotalPrice
        return totalPayableAmount
    }
}
// console.log(oilPrice(1, 1, 1));

//------------------ Problem 4 ----------------//
function publicBusFare(persons) {
    if (typeof persons !== 'number') {
        return "Please input a valid number"
    }
    else {
        const busCapacity = 50;
        const microCapacity = 11;
        const publicBusTicketPrice = 250;
        let leftPeopleAfterBus = persons % 50;
        let leftPeopleAfterMicro = leftPeopleAfterBus % 11;
        let publicBusPayableAmount = publicBusTicketPrice * leftPeopleAfterMicro
        return publicBusPayableAmount
    }
}
// console.log(publicBusFare(55));

//---------------- Problem 5 ----------------//
function isBestFriend(object1, object2) {
    if (typeof object1 !== 'object' || typeof object2 !== 'object') {
        return "Please input a valid object"
    }
    else if (object1.name === object2.friend && object2.name === object1.friend) {
        return true
    }
    else {
        return false
    }
}
// let friend1 = { name: 'abul', friend: 'kabul' }
// let friend2 = { name: 'kabul', friend: 'abul' }
// console.log(isBestFriend(friend1, friend2))