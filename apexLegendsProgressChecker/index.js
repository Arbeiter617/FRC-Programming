//custom variables...//
var totalCountedKills = 10;
var totalCountedDays;
var totalDeathsCounted = 100;
var avgKD;
//////////////////////



function calculateKD() {
    //in apex, KD is calculated by taking the players total kills and dividing it by total deaths//

    avgKD = totalCountedKills/totalDeathsCounted;
    document.getElementById("kd").innerHTML = "Average K/D: " + avgKD;

    
}

calculateKD();


