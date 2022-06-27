// //create a variable for access perticular id or element
// // const SetOfWords = [
// //     " Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
// //     " Provident similique perferendis nemo illo amet. Ex nesci.",
// //     " Quos expedita vitae voluptatum dolor ratione ipsam ipsum!"
// //   ]; // this is an array array text yeil n ye aaplyala type karach aaahe tya karta ghetl aahe.

//   const SetOfWords = [
//     " Nothing is impossible. The word itself says ‘I’m possible!. Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
//     " Keep your face always toward the sunshine, and shadows will fall behind you. Provident similique perferendis nemo illo amet. Ex nesci.",
//     " You define your own life. Don’t let other people write your script. Quos expedita vitae voluptatum dolor ratione ipsam ipsum!",
//     " Suppose you never ever try to learn to type but you work on PC regularly what is wrong in it. Now calculate without learning to type you will be wasting your precious life hours which could be used on any other work you want to accomplish It is gonna Improve your productivity drastically. Think about it.Thank You"
//   ]; // this is an array array text yeil n ye aaplyala type karach aaahe tya karta ghetl aahe.
  
//   const msg = document.getElementById("msg");
//   const typeWords = document.getElementById("mywords");
//   const btn = document.getElementById("btn");
//   let startTime, endTime;
  
//   const playGame = () => {
//     let randomNumber = Math.floor(Math.random() * SetOfWords.length);
//     msg.innerText = SetOfWords[randomNumber];
//     let date = new Date();
//     startTime = date.getTime();
//     btn.innerText = "Done";
//   };
  
//   const endPlay = () => {
//     let date = new Date();
//     endTime = date.getTime(); //endPlay = endTime
//     let totalTime = (endTime - startTime) / 1000;
//     console.log(totalTime);
  
//     let totalStr = typeWords.value; //typeword
//     let wordCount = wordCounter(totalStr);
  
//     let speed = Math.round((wordCount / totalTime) * 60);
  
//     let finalMsg = "You typed total at " + speed + " words per minutes";
  
//     finalMsg += compareWords(msg.innerText, totalStr);
  
//     msg.innerText = finalMsg;
//   };
  
//   const wordCounter = (str) => {
//     let response = str.split(" ").length;
//     console.log(response);
//     return response;
//   };
  
//   const compareWords = (str1, str2) => {
//     let words1 = str1.split(" ");
//     let words2 = str2.split(" ");
//     let cnt = 0;
//     words1.forEach(function (item, index) {
//       if (item == words2[index]) {
//         cnt++;
//       }
//     });
//     let errorWords = words1.length - cnt;
//     return (
//       cnt +
//       " correct out of " +
//       words1.length +
//       " words and the total number of error are " +
//       errorWords +
//       "."
//     );
//   };
  
//   btn.addEventListener("click", function () {
//     // console.log(this);
// //     if (this.innerText === "Start") {
// //       typeWords.disabled = false; //typeword
// //       playGame();
// //     }
//    let  i =0;
//   let par = document.getElementById("participant");
//   btn.addEventListener("click", function () {
//     // console.log(this);
//     if (this.innerText === "Start") {
//       typeWords.disabled = false; //typeword
//       playGame();
//       par.innerText=++i;
//     }else if (this.innerText === "Done") {
//       typeWords.disabled = true;
//       btn.innerText = "Start";
//       endPlay();
//     }
//   });
  

//  //create a variable for access perticular id or element
//  const SetOfWords = [
//     " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus recusandae ab, perferendis consectetur ducimus cumque sequi adipisci at aspernatur veniam numquam magni commodi iure ad dolorum aperiam quia molestias enim mollitia tenetur obcaecati, provident molestiae odio rerum.",
//     "Provident similique perferendis nemo illo amet. Ex nesciunt quia repellendus consectetur accusantium minima vero! Provident nihil placeat itaque sunt exercitationem incidunt ratione praesentium harum, quae labore? Laudantium, numquam eos provident, ratione minima cupiditate tenetur dolorem odit consequatur iusto quo repellat facilis corporis atque dolores quam illo ipsum obcaecati et quas error laborum magni? Odio, ratione veniam voluptatibus ullam animi praesentium voluptas odit saepe cupiditate exercitationem corrupti similique id laborum. Eligendi et sit molestiae doloremque laborum vero, eius quisquam iure eaque.",
//     "Quos expedita vitae voluptatum dolor ratione ipsam ipsum ut unde porro natus perferendis saepe velit suscipit qui rerum ducimus quo eum eveniet, aliquam quasi recusandae! In, cumque minima praesentium, vel excepturi ut animi, laboriosam reiciendis doloremque et iste quibusdam. Delectus, quibusdam vitae architecto magni sunt aliquid incidunt id blanditiis, dolorum reprehenderit itaque facilis, dolore a consequatur ullam ipsa!"
// ]; // this is an array array text yeil n ye aaplyala type karach aaahe tya karta ghetl aahe.

//  const msg = document.getElementById('msg');
//  const typeWords = document.getElementById('mywords');
//  const btn = document.getElementById('btn');
//  let startTime, endTime;

// const playGame = () =>{
// let randomNumber = Math.floor(Math.random()*SetOfWords.length);
// //console.log(randomNumber);
// msg.innerText = SetOfWords[randomNumber];
// let date = new Date();
// startTime = date.getTime();
// btn.innerText = "Done";
//  }

//  const endPlay = () =>{
//     let date = new Date();
//     endPlay = date.getTime();
//     let totalTime = ((endTime - startTime)/1000);
//     console.log(totalTime);

//     let totalStr = typewords.value;
//     let wordCount = wordCounter(totalStr);

//     let speed = Math.round((wordCount / totalTime)*60);

//     let finalMsg = "You typed total at " +speed+ "words per minutes. ";
   
//     finalMsg += compareWords(msg.innerText,totalStr);

//     msg.innerText = finalMsg;
//  }

//  const wordCounter =(str) =>{
//     let response = str.split(" ").length;
//     //console.log(response);
//     return response;
//  }


//  const compareWords = (str1, str2) =>{
//     let words1 = str1.split(" ");
//     let words2 = str2.split(" ");
//     let cnt = 0;

//     words1.forEach(function (item, index)  {
//         if (item == words2[index]){
//             cnt++;
//         }
        
//     });

//     let errorWords = ( words1.length - cnt);
//     return (cnt + " correct out of " + words1.length + " words and the total number of error are " + errorWords + ".");
//  }

// //  const wordCounter =(str) =>{
// //     let response = str.split(" ").length;
// //     //console.log(response);
// //     return response;
// //  }

//  btn.addEventListener('click', function(){
//    // console.log(this);
//     if(this.innerText == 'Start'){
//         typewords.disabled = false;
//         playGame();
//     }else if(this.innerText == "Done"){
//         typeWords.disabled = true;
//         btn.innerText = "Start";
//         endPlay();
//     }
//  })

//create a variable for access perticular id or element
const SetOfWords = [
    " Nothing is impossible. The word itself says ‘I’m possible!. Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    " Keep your face always toward the sunshine, and shadows will fall behind you. Provident similique perferendis nemo illo amet. Ex nesci.",
    " You define your own life. Don’t let other people write your script. Quos expedita vitae voluptatum dolor ratione ipsam ipsum!",
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
    let date = new Date();
    endTime = date.getTime(); //endPlay = endTime
    let totalTime = (endTime - startTime) / 1000;
    console.log(totalTime);
  
    let totalStr = typeWords.value; //typeword
    let wordCount = wordCounter(totalStr);
  
    let speed = Math.round((wordCount / totalTime) * 60);
  
    let finalMsg = "You typed total at " + speed + " words per minutes";
  
    finalMsg += compareWords(msg.innerText, totalStr);
  
    msg.innerText = finalMsg;
  };
  
  const wordCounter = (str) => {
    let response = str.split(" ").length;
    console.log(response);
    return response;
  };
  
  const compareWords = (str1, str2) => {
    let words1 = str1.split(" ");
    let words2 = str2.split(" ");
    let cnt = 0;
    words1.forEach(function (item, index) {
      if (item == words2[index]) {
        cnt++;
      }
    });
    let errorWords = words1.length - cnt;
    return (
      cnt +
      " correct out of " +
      words1.length +
      " words and the total number of error are " +
      errorWords +
      "."
    );
  };
  
  let  i =0;
  let par = document.getElementById("participant");
  btn.addEventListener("click", function () {
    // console.log(this);
    if (this.innerText === "Start") {
      typeWords.disabled = false; //typeword
      playGame();
      par.innerText=++i;

    } else if (this.innerText === "Done") {
      typeWords.disabled = true;
      btn.innerText = "Start";
      endPlay();
    }
  });
  

