var load = require('./loading');




var StateOne = function(){
  process.stdin.resume();
  process.stdin.setEncoding("utf8");
    var onData = (data) => {
      //load.FindDictionary(data);
      if(load.FindDictionary(data) != false){
        process.stdin.removeListener('data', onData);
           return StateTwo();
       }
    }


  process.stdin.on('data', onData);

}
var StateTwo = function() {console.log("Moving on up");}
var init = function() {
//worry about states?
//elseif: do you have dictionary, do you have a search term?
  StateOne();
  //process.stdin.on('data', loadDictionary)

}




function EnterOperation(){
  process.stdin.resume();
  process.stdin.setEncoding("utf8");

  process.stdin.on('data', (data) => {
    //Take search term
    //send to searching

  })

}



module.exports = { "init": init}
