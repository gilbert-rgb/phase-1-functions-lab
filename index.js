// Code your solution in this file!
// index.js

function distanceFromHqInBlocks(location) {
    
    return Math.abs(location - 42);
  }
  
  function distanceFromHqInFeet(location) {
    
    return distanceFromHqInBlocks(location) * 264;
  }
  
  function distanceTravelledInFeet(start, destination) {
    
    const blocks = Math.abs(start - destination);
    return blocks * 264;
  }
  
  function calculatesFarePrice(start, destination) {
    
    const distanceInFeet = distanceTravelledInFeet(start, destination);
  
    
    if (distanceInFeet <= 400) {
      return 0; 
    } else if (distanceInFeet <= 2000) {
      
      const chargeableFeet = distanceInFeet - 400;
      return chargeableFeet * 0.02;
    } else if (distanceInFeet <= 2500) {
      return 25; 
    } else {
      return 'cannot travel that far'; 
    }
  }
  
  