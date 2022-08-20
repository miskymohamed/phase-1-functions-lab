// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
    return Math.abs(42 - distance);
  }
  
  function distanceFromHqInFeet(distance) {
    return distanceFromHqInBlocks(distance) * 264;
  }
  
  function distanceTravelledInFeet(distance, feet) {
    return Math.abs((feet - distance) * 264);
  }
  
  function calculatesFarePrice(distance, feet) {
    const myValue = distanceTravelledInFeet(distance, feet);
    if (myValue < 400) {
      return 0;
    } else if (myValue < 2000 && myValue > 400) {
      return 0.02 * (myValue - 400);
    } else if (myValue > 2000 && myValue < 2500) {
      return 25;
    } else if (myValue > 2500) {
      return "cannot travel that far";
    }
  }