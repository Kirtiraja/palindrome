$(document).ready(function(){
  $("form#userForm").submit(function(event){
    event.preventDefault();

    var stringInput = $("#userString").val();
    var stringReversed = stringInput.split("").reverse().join("");

    if (stringInput === stringReversed){
      $("#showResults").text('"'+stringInput+'"'+' is a Palindrome!');
    }
    else {
      $("#showResults").text('"'+stringInput+'"'+' is NOT a Palindrome!');
    }

    // console.log(stringInput);
    // console.log(stringReversed);

    $(".results").show();
  });
});
