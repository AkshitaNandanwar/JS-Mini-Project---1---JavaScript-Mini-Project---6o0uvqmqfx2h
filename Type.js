
const SetOfWords = [
  " Nothing is impossible. The word itself says 'I'm possible!. Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
  " Keep your face always toward the sunshine, and shadows will fall behind you. Provident similique perferendis nemo illo amet. Ex nesci.",
  " You define your own life. Don't let other people write your script. Quos expedita vitae voluptatum dolor ratione ipsam ipsum!",
  " Suppose you never ever try to learn to type but you work on PC regularly what is wrong in it. Now calculate without learning to type you will be wasting your precious life hours which could be used on any other work you want to accomplish It is gonna Improve your productivity drastically. Think about it.Thank You"
]; // this is an array array text yeil n ye aaplyala type karach aaahe tya karta ghetl aahe.

const msg = document.getElementById("msg");
const typeWords = document.getElementById("mywords");
const btn = document.getElementById("btn");
let startTime, endTime;

const playGame = () => {
  let randomNumber = Math.floor(Math.random() * SetOfWords.length);
  msg.innerText = SetOfWords[randomNumber];
  let date = new Date();
  startTime = date.getTime();
  btn.innerText = "Done";
};

const endPlay = () => {
  let finalMsg;
  if(typeWords.value===""){
   finalMsg= "Hey User You haven't typed anything."
  }
  else{
  let date = new Date();
  endTime = date.getTime(); //endPlay = endTime
  let totalTime = (endTime - startTime) / 1000;
  console.log(totalTime);

  let totalStr = typeWords.value; //typeword
  let wordCount = wordCounter(totalStr);

  let speed = Math.round((wordCount / totalTime) * 60);

   finalMsg = "You speed is " + speed + " words per minutes";

  finalMsg += compareWords(msg.innerText, totalStr);
  }
  typeWords.value="";
  msg.innerText = finalMsg;
};
  

