console.log("Hello");
// //of else que
// let a =prompt("Enter your grades :-");
// if(a<=100&&a>=90){
//     console.log("Grade A");
// }
// else if(a<=89&&a>=70){
//     console.log("Grade B");
// }
// else if(a<=69&&a>=60){
//     console.log("Grade C");
// }
// else if(a<=59&&a>=50){
//     console.log("Grade D");
// }
// else {
//     console.log("Grade F");

// }
// //for of helps using loops on str and arr
// // for in helps in using loops on objects
// for(let i=0;i<=100;i++){
//     if(i%2===0){
//         console.log(i);
//     }
// }
// let no = Math.floor(0,10);
// let n =1;
// while(n>0){
//     let q=prompt("enter");
//     if(no==q){
//         console.log("you guessed it right",);
//         break;
//     }
// }
// function StrVowel(str){
//     let count =0;
//     for(let i of str){
//         if(i=="a"||i=="e"||i=="o"||i=="i"||i=="u")
//         count++;
//     }
//     return count;
// }
// let arr=[1,4,3,2,5];
// arr.forEach(function printVal(val){
//     console.log(val*val);
// });

// PROJECT
let userScore =0;
let compScore =0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock","paper","scissor"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame=()=>{
    msg.innerText="Game Was Draw"
    msg.style.backgroundColor="#081b31"
};

const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText = "You Win";
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText="You Lose";
        msg.style.backgroundColor="red"
    }
}

choices.forEach((choice)=> { 
    choice.addEventListener("click", ()=> {
        const userChoice=choice.getAttribute("id")
        playGame(userChoice);
    });
});

const playGame=(userChoice)=>{
    console.log("user choice = ",userChoice);
    const compChoice = genCompChoice();
    console.log("comp choice = ",compChoice);

    if (userChoice===compChoice){
        drawGame();
    }else{
        let userWin = true ;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false:true;
        } else if(userChoice==="paper"){
            userWin = compChoice === "scissor" ? false:true;
        } else{
            userWin = compChoice === "rock" ? false:true;
        }
        showWinner(userWin);
    }
};




//oops
// class ToyotaCar{
//     start(){
//         console.log("car starts");
//     }
//     stop(){
//         console.log("car stops");
//     }

//     setBrand(brand){
//         this.brand=brand;
//     }

//     constructor() {
//         console.log("creating new object");
//     }
// }

// let Fortuner=new ToyotaCar();
// Fortuner.setBrand("Toyota");


//INHERITANCE
// class person{
//     constructor(){
//         console.log("cons");
//     }
//     eat(){
//         console.log("eats");
//     }
//     sleep(){
//         console.log("sleeps");
//     }
// }
// class engineer extends person{
//     constructor(branch){
//         super(branch); // to invoke parent class constructor
//         this.branch=branch;
//     }
//     work(){
//         console.log("solve problems,build something");
//     }
// }
// let adityaObj=new engineer();


//error handling
// try{
//     //statement
// } catch(err){
//     console.log(err);  
// }

// sync in js
// const hello=()=>{
//     console.log("hello");
// }
// setTimeout(hello,4000);//hello 4 sec baad print hoga yeh a synchronous hota hai tyoh baaki code apna run krta rahega iske liye rukega nhi jaise hi 4 sec poore honge yeh apne aap execute ho jaega bus 


// callback function 
// function add(a,b){
//     console.log(a+b);
// }
// const callBack=(a,b,add){
//     add(a,b);
// }

//promises-to overcome callback .
