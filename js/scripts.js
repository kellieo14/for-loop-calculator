var max;
var countBy;
var output = "";

var checkInput = function(input){
  if (!input || input < 0) {
    alert("Error: please enter a positive number");
  }
};

var checkFactors = function(){
  if (countBy > max) {
    alert("Error: Count by number is greater than maximum number");
  }
};


max = parseInt(prompt("Maximum Number:"));
countBy = parseInt(prompt("Count By:"));

checkInput(max);
checkInput(countBy);
checkFactors();

for (var i = 0; i <= (max - countBy); i += countBy){
  output += (countBy + i) + " ";
}

alert(output);
