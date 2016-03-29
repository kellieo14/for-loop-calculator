var max;
var countBy;
var countOutput = "";
var input;
var factorialOutput = 1;

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

var factorial = function(input){
  factorialOutput = 1;
  if (!input && input !== 0) {
    alert("Error: please enter a number!")
  } else {
    for (var i = 1; i <= input; i++) {
      factorialOutput *= i;
      console.log(i + " " + factorialOutput);
    }
  }
};

var recursiveFactorial = function(p1) {
  if (p1 > 0) {
    factorialOutput *= p1;
    console.log("output " + factorialOutput);
    p1 -= 1;
    console.log("p1 " + p1);
    recursiveFactorial(p1);
  }
};

$(".recursive-factorial").submit(function(event){
  event.preventDefault();
  input = parseInt($("#recursive-factorial").val());
  recursiveFactorial(input);
  alert(factorialOutput);
});


$(".counter").submit(function(event){
  event.preventDefault();
  max = parseInt($("#max").val());
  countBy = parseInt($("#count-by").val());

  checkInput(max);
  checkInput(countBy);
  checkFactors();

  for (var i = 0; i <= (max - countBy); i += countBy){
    countOutput += (countBy + i) + " ";
  }

  alert(countOutput);
});

$(".factorial").submit(function(event){
  event.preventDefault();
  input = parseInt($("#factorial").val());
  factorial(input);
  alert(factorialOutput);
});
