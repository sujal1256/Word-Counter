// locating the elements
const inputField = document.getElementById('text');
const wordCount = document.getElementById('words');
const charCount=document.getElementById("chars");
const facebookCount=document.getElementById("facebook");
const twitterCount=document.getElementById("twitter");
const facebookMaxCount=document.getElementsByClassName("max_count")[0];
const twitterMaxCount=document.getElementsByClassName("max_count")[1];

// setting maxlimit of facebook
let facebookmax=300;
facebookMaxCount.innerHTML=facebookmax;
facebookCount.innerHTML=facebookmax;

// setting maxlimit of twitter
let twittermax=200;
twitterMaxCount.innerHTML=twittermax;
twitterCount.innerHTML=twittermax;

// word counter starts working giving input 
inputField.addEventListener('input', () => {

  // Word count
  const inputText = inputField.value.trim(); // gives the text ent  ered in the field
  let count;
  if(inputText){
    count=inputText.split(/\s+/).length;
  }
  else{
    count=0;
  }
  wordCount.innerHTML = count;

  // character count
  let value=inputText.length;
  charCount.innerHTML=value;

  // facebook count
  facebookCount.innerHTML= facebookmax-value;
  
  // twitter counter
  twitterCount.innerHTML=twittermax-value;


});

