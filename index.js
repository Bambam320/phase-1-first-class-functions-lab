const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
const returnFirstTwoDrivers = function() {
            let firstDrivers = [drivers[0], drivers[1]];
            return firstDrivers;
  };
const returnLastTwoDrivers = function () {
            let lastDrivers = [drivers[2], drivers [3]];
            return lastDrivers;
           }
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

selectingDrivers[0]
  
function selectDifferentDrivers(drivers,select) {
  
  if (select === returnFirstTwoDrivers) {
    return returnFirstTwoDrivers();
  } else if (select === returnLastTwoDrivers) {
    return returnLastTwoDrivers();
  } else {
    return "Try again buddy!"
  }
}

function createFareMultiplier(fare) {
  return function fareMultiplier(){
    return fare * 5;
}
}

const fareDoubler = function(tva) {
  return tva * 2;
}

const fareTripler = function(tre) {
  return tre * 3;
}
