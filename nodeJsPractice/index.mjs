import PromptSync from "prompt-sync";

const anyName = PromptSync();

var name = anyName("What is your name ")

console.log(name);

const num = anyName ("Enter a number ")
console.log(Number(num)+ 4)