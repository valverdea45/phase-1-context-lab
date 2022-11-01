/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */


function createEmployeeRecord(row) {
    return {
        firstName: row[0],
        familyName: row[1],
        title: row[2],
        payPerHour: row[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(nestedArray){
    const loopingThroughArrays = nestedArray.map(createEmployeeRecord)
    return loopingThroughArrays
}

function createTimeInEvent(dateStamps){
    
    let [date, hour] = dateStamps.split(" ")
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour),
        date,
    })
    return this
}

function createTimeOutEvent(dateStamps){
    let [date, hour] = dateStamps.split(" ")
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour),
        date
    })
    return this
}

function hoursWorkedOnDate(dateOfPunch){
    const timeInDate = this.timeInEvents.find((employeeTimeInDates => {
        return employeeTimeInDates.date === dateOfPunch
    }))
    const timeOutDate = this.timeOutEvents.find((employeeTimeOutDates) => {
        return employeeTimeOutDates.date === dateOfPunch
    })
    const diffrenceInHours = timeOutDate.hour - timeInDate.hour
    const diffrenceInHourSingleDigits = diffrenceInHours/100
    return diffrenceInHourSingleDigits
}


function wagesEarnedOnDate(date) {
    const paymentOwedOnDate = hoursWorkedOnDate.call(this, date) * this.payPerHour
    return paymentOwedOnDate
}

function findEmployeeByFirstName(arrayOfEmployee, firstNameToBeMatched){
    const findingNames = arrayOfEmployee.find((individualEmployee) => {
        return individualEmployee.firstName === firstNameToBeMatched
    })
    return findingNames
}

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function calculatePayroll(arrayOfEmployee){
    
    const grandTotalOwed = arrayOfEmployee.reduce((accum, thingBeingLooped) => {
        return accum + allWagesFor.call(thingBeingLooped)
    },0)
    return grandTotalOwed
}





