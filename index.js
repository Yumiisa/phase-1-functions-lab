// Code your solution in this file!
function distanceFromHqInBlocks(distanceInBlock){
    if(distanceInBlock >42){
        return distanceInBlock - 42
    }
    else{
        return 42-distanceInBlock
    }
 }
 console.log(distanceFromHqInBlocks(50))
 function distanceFromHqInFeet (distanceInBlock) {
     return distanceFromHqInBlocks(distanceInBlock) * 264;
   }
   
 function distanceTravelledInFeet(start, destination){
     if(start<destination){
        return(destination-start) * 264
     }else{
        return(start-destination) * 264
    }
 }
 console.log(distanceTravelledInFee(43, 45))
 function calculatesFarePrice(start, destination){
     const distance = distanceTravelledInFeet(start, destination)
     if(distance <= 400){
         return 0
     }
     else if(distance >=400 && distance<= 2000){
         return 0.02 * (distance-400);
     }
     else if(distance > 2000 && distance <= 2500){
         return 25;
     }else{
         return 'cannot travel that far'
     }
 }
 