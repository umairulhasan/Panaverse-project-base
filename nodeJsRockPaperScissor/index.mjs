import randomInteger from 'random-int';
import PromptKaLia from 'prompt-sync';

//Avaliable choices
const choices = ["Rock" , "Paper", "Scissors"]
const Message = "Enter value"
//logic for computer pick choice rock paper scissor this will give a random value

const computerChoice = randomInteger (0,2) ;
console.log(computerChoice);
// choices[0] = Rock , choices[1] = Paper , choices[2] = Scissors
const AnyRandomValueGet = choices[computerChoice]   //  choices[0] ,choices[1] ,choices[2] 
console.log(AnyRandomValueGet);


//prompt from user 
const promptLoo = PromptKaLia();
const userChoice = promptLoo(Message)
console.log(userChoice)