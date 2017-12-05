$(document).ready(function(){


var splits = [];
var round = 0;
var started = false;
var done = false;
var cPace = 0;

//--------------------------- SplitsLoad -----------------------------------
//                 Loads the splits in from json file

function splitsLoad(){
  //grab .json file 	
  var data = $.getJSON( "assets/javascript/splits.json", function(){})
      .done(function() { 
        splits = JSON.parse(data.responseText)

         //calculate Some of Best 
         someOfBest();
      });
 
 

}

//--------------------------- someOfBest ------------------------------------
//                      calculates some of best

function someOfBest(){
  var sob = 0;
  for(var i = 0; i < splits.length; i++){
    sob += splits[i].gold.time;
  }
    $("#sob").html(timeConvert(sob));  
}


//-------------------------- splitEpmty -------------------------------------
//                  emptys out the live splits
function splitEmpty(){
  for(i = 0; i < splits.length; i++){
    splits[i].live.KD1 = null;
    splits[i].live.KD2 = null;
    splits[i].live.time = null;
  }
}

//--------------------------- SplitSave -------------------------------------
//                     saves the splits if you PB

function splitSave(){
  if(done){
    for(i = 0; i < splits.length; i++){
      splits[i].PB.KD1 = splits[i].live.KD1;
      splits[i].PB.KD2 = splits[i].live.KD2;
      splits[i].PB.time = splits[i].live.time;
    }
    $("#h5").html("PB Updated")
    console.log("pb updated");
  }
}

//---------------------------- FileSave ------------------------------------
//                     saves the splits in a file

function fileSave(){
  // if(done){
    var output = JSON.stringify(splits, null, 1)

    var blob = new Blob([output], {type: "text/plain;charset=utf-8"});
    saveAs(blob, "splits.json");
  }
// }

//--------------------------- SplitStart ------------------------------------
//                          starts the splits

function splitStart(){
  started = true;

  //loop to get information from splits
  for(var i = 0; i < splits.length; i++){
    //add the PB time together to get current pace
    cPace += splits[i].PB.time;
  }
 
  function splitInfo(a){
  
    if( a < 29){
    
    //check to see if i is odd/even
    if(a % 2) var info = "sInfo"
    else var info = "sInfo1"
    var time = 0;

    time = timeConvert(splits[a].PB.time)

    // place info in then splitter
    setTimeout(function(){
    $("#splits").children().append("<div class='col-12 " + info + "' id='split" + a + "'>" +
        "<div class='row'>" +
        "<div class='col-6 sName'>"  +
        "<img src='assets/images/fighters/" + a + "/icon.png' class='icon'>" +
        splits[a].name +
      "</div>" +
      "<div class='col-2 sDelta' id='sDelta" + a + "'></div>" +
      "<div class='col-4 sTime' id='sTime" + a + "'>" + time + "</div>" +
    "</div>" + 
    "</div>");
    
    $("#split" + a).fadeIn("slow");
    a++
    splitInfo(a);
    }, 100);
    
    
    }

    $("h5").html(splits[round].name);
  }
  
  splitInfo(0);
  //load in current pace
  $("#pace").html(timeConvert(cPace));
  //laod in fighter info
  fighterInfo(0);

  //make first split current
  setTimeout(function(){$("#split0").addClass("current")}, 5000);
}


//---------------------------- SplitReset -----------------------------------
//              resets the splits back to original state

function splitReset(){
  round = 0;
  started = false;
  done = false;
  cPace = 0;
  
  //clear the information in the splits array
  splitEmpty();

  //clear the splitter of all the splits on it.
  $("#splits").children().empty();

  //reset figher information 
  $("#fImage, .time").hide();

  //reset run information 
  $("#totalTime").html("0.00").removeClass("ahead behind pb");
  $("#prevF").html("-").removeClass("ahead behind");
  $("#pace").html("-");
  $("h5").html("-");
}

//-------------------------- FighterInfo ------------------------------------
//                    puts fighter info in splitter

function fighterInfo(round){

   //create the information
   var pb = ""
   if(splits[round].PB.KD1) pb += splits[round].PB.KD1 + " / ";
   if(splits[round].PB.KD2) pb += splits[round].PB.KD2 + " / ";
   if(splits[round].PB.time) pb += timeConvert(splits[round].PB.time);
   
   var gold = ""
   if(splits[round].gold.KD1) gold += splits[round].gold.KD1 + " / ";
   if(splits[round].gold.KD2) gold += splits[round].gold.KD2 + " / ";
   if(splits[round].gold.time) gold += timeConvert(splits[round].gold.time);
   
   var wr = ""
   if(splits[round].ILWR.KD1) wr += splits[round].ILWR.KD1 + " / ";
   if(splits[round].ILWR.KD2) wr += splits[round].ILWR.KD2 + " / ";
   if(splits[round].ILWR.time) wr += timeConvert(splits[round].ILWR.time);
  
  
 
  //animations for romoving old info
  $("#fImage").fadeOut(2000)
  $("#pbInfo").animate({"right" : "-500px",}, 2000);
  setTimeout(function(){$("#glodInfo").animate({"right" : "-500px",}, 2000)}, 200);
  setTimeout(function(){$("#wrInfo").animate({"right" : "-500px",}, 2000)}, 400);

  //change data out
  setTimeout(function(){$("#fImage").attr("src", "assets/images/fighters/" + round + "/fighter.png");}, 2100);
  setTimeout(function(){$("#pbInfo").html(pb)}, 2100);
  setTimeout(function(){$("#glodInfo").html(gold)}, 2100);
  setTimeout(function(){$("#wrInfo").html(wr)}, 2100); 

  //bring in new info
  setTimeout(function(){$("#fImage").fadeIn(2000)}, 2200);
  setTimeout(function(){$(".time").show()}, 2200);
  setTimeout(function(){$("#pbInfo").animate({"right" : "",}, 2000)}, 2200);
  setTimeout(function(){$("#glodInfo").animate({"right" : "",}, 2000)}, 2400);
  setTimeout(function(){$("#wrInfo").animate({"right" : "",}, 2000)}, 2600);

}
//---------------------------- SplitNext ------------------------------------
//                         moves to next split

function splitNext(){
  $("#split" + round).removeClass("current");

  round++
  $("h5").html(splits[round].name)
  fighterInfo(round);
  $("#split" + round).addClass("current"); 

  if(round > 6 && round < 24){
    $("#split" + (round - 7)).remove();
  }
}

//------------------------ SplitInformation ---------------------------------
//              places the informatoion into the splits
function splitInformation (){  
  if($("#KD1").val() !== undefined)splits[round].live.KD1 =  $("#KD1").val().trim();
  if($("#KD2").val() !== undefined)splits[round].live.KD2 =  $("#KD2").val().trim();
  splits[round].live.time =  parseFloat($("#splitTime").val().trim(), );

  //find the difference in the splits

  //place split time on splits
  $("#sTime" + round).html(timeConvert(splits[round].live.time));


  //fingure out Current Time
  var cTime = 0;
  var pbTime = 0;

  //reset ahead behind values
  $("#prevF, #totalTime, #sDelta" + round).removeClass("ahead behind glod");

  //calculate if current time is ahead/behind PB
  for(var i = 0; i < round + 1; i++){
     cTime += splits[i].live.time;
     pbTime += splits[i].PB.time
  }
  
  if (cTime <= pbTime){
    $("#totalTime, #sDelta" + round).addClass("ahead");
    $("#sDelta" + round).html("-" + (timeConvert(pbTime - cTime)));
  } else {
    $("#totalTime, #sDelta" + round).addClass("behind");
    $("#sDelta" + round).html("+" + (timeConvert(cTime - pbTime)));
  }
  
  //place current time on page
  $("#totalTime").html(timeConvert(cTime));
  
  //figure out the preverious time
  if(splits[round].live.time <= splits[round].PB.time){
    var prevTime = timeConvert(splits[round].PB.time - splits[round].live.time);
    $("#prevF").html("-" + prevTime).addClass("ahead");
  } else {
    var prevTime = timeConvert(splits[round].live.time - splits[round].PB.time);
    $("#prevF").html("+" + prevTime).addClass("behind");
  }

  //figure out current pace

  if(splits[round].live.time <= splits[round].PB.time){
    var pTime = splits[round].PB.time - splits[round].live.time; 
    cPace -= pTime;
    $("#pace").html(timeConvert(cPace));
  } else {
    var pTime = splits[round].live.time - splits[round].PB.time;  
    cPace += pTime; 
    $("#pace").html(timeConvert(cPace));
  }

  //check to see if its a gold split
  console.log(splits[round].live.time)
  console.log(splits[round].gold.time)

  if(splits[round].live.time < splits[round].gold.time){
    console.log("gold")

    //save gold
    if($("#KD1").val() !== undefined)splits[round].gold.KD1 = splits[round].live.KD1;
    if($("#KD2").val() !== undefined)splits[round].gold.KD2 = splits[round].live.KD2;
    splits[round].gold.time = splits[round].live.time;
    //find new sob
    someOfBest();
    //change split color
    $("#prevF, #sDelta" + round).addClass("glod");
  }

  console.log(splits[round]);

  $("#KD1").val("");
  $("#KD2").val("");
  $("#splitTime").val("");

  if(round === 28 )splitsDone(cTime, pbTime);
  else splitNext();
}
                


//---------------------------- SplitPrev ------------------------------------
//              returns to prior split incase you need to edit



//---------------------------- SplitDone ------------------------------------
function splitsDone(a, b){
  console.log("done");
  done = true

  $("#split" + round).removeClass("current");
  if(a < b)$("#totalTime").addClass("pb");
}



//--------------------------- TimeConvert -----------------------------------
//            function for converting the way the time looks

function timeConvert(time){
  var minutes = Math.floor(time/ 60);
  var seconds = time - minutes * 60;
      seconds = seconds.toFixed(2);
  if (seconds < 10) seconds = "0" + seconds;
  var decimal = time - Math.floor(time);

  if(minutes === 0) return seconds;
  else return minutes + ":" + seconds;
}

//---------------------------------------------------------------------------

splitsLoad();

$("#reset").on("click", function(){
  splitReset();
});

$("#start").on("click", function(){
  if(started)console.log("already started");
  else splitStart();
});

$("#save").on("click", function(){
  if(done)fileSave();
});

$("#savePB").on("click", function(){
  if(done)splitSave();
});

$("#timeEnter").on("click", function(){
  event.preventDefault();
  
  console.log("this is " + $("#splitTime").val())
  if($("#splitTime").val().trim())splitInformation();

  // splitNext();
});
});