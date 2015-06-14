var myText = 'hello world';

if(myText[0] === myText[0].toUpperCase() && myText[1] === myText[1].toUpperCase()) {
  var firstSpace = myText.indexOf(' ');
  myText.splice(0, 1, myText[0].toUpperCase());
  myText.splice(firstSpace + 1, 1, [firstSpace + 1].toUpperCase());
}


function titleCaser(text) {

  var lowerCase = text.toLowerCase();
  var wordArray = lowerCase.split(/[ ]/);
  var modifiedwordArray = wordArray.map(function(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  });
  var finishedText = modifiedwordArray.join(' ');
  return finishedText
}

titleCaser(myText);


var wordArray = myText.split(/[ ]/);
var modifiedwordArray = wordArray.map(function(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
});

var finishedText = modifiedwordArray.join(' ');
finishedText;

function capitalizeFirstLtr(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function lowercaseFirstLtr(string) {
  return string.charAt(0).toLowerCase() + string.slice(1);
}


