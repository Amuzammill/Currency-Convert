import inquirer from "inquirer";

// Define the list of currencies and thier exhange rates
let exhange_rate : any = {

    "USD" : 1,    
    "EUR" : 0.9,
    "JYP" : 113,
    "CAD" : 1.3,
    "AUD" : 1.65,
    "PKR" : 280 ,

}
// promot  the user to select currencies convert from and to
let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message : "select the currency to convert from",
        choices: ["USD","EUR","JYP","CAD","AUD","PKR"]
    
    },
    {
        name: "to_currency",
        type:"list",
        message: "select the currency to convert into:",
        choices:["USD","EUR","JYP","CAD","AUD","PKR"]
    },
    {
        name: "amount",
        type: "input",
        message:"enter the amount to convert:"
    },

])
// perform currency conversion by using formula
let from_amount = exhange_rate[user_answer.from_currency];
let to_amount = exhange_rate[user_answer.to_currency];
let amount = user_answer.amount
// formula of conversion
let base_amount = amount / from_amount
let converted_amount = base_amount * to_amount
// display the converted amount
console.log(`converted amount = ${converted_amount}`);
 