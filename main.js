"use strict";
function getDestination(previousDestination=""){
    //this function should select a destination at random from sight seeing spots around Utah
        let location = ["Temple Square", "Big Cottonwood Canyon", "Lagoon","Pineview", "Timpanogos Cave","Stay Home"]
        let result = location[Math.floor(Math.random()*location.length)];
        //if user has called function previously control to not return the same result
        while (previousDestination == result){
            result = location[Math.floor(Math.random()*location.length)]; 
    
        }
        return result;
    }

function getTransportaion(){
  //
  let transport = ['mode1', 'mode2', 'mode3', 'mode4'];
};

function getFood(){
  //
  let food = ['food1', 'food2', 'food3', 'food4'];
};

function getFun(){
  //
  let fun = ['fun1', 'fun2', 'fun3', 'fun4'];
};

function generateTrip(){
  //
};

function validateTrip(){
  //
};