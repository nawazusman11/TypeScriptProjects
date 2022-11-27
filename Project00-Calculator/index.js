#! /usr/bin/env node
import Inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
async function welcome() {
    let welcomeMsg = chalkAnimation.rainbow("******************************\n" +
        "Welcome to CLI calculator.  \n " +
        "     Created by Usman Nawaz\n" +
        "******************************");
    await sleep();
    welcomeMsg.stop();
    console.log(chalk.blueBright(` _____________________
|  _________________  |
| | JO           0. | |
| |_________________| |
|  ___ ___ ___   ___  |
| | 7 | 8 | 9 | | + | |
| |___|___|___| |___| |
| | 4 | 5 | 6 | | - | |
| |___|___|___| |___| |
| | 1 | 2 | 3 | | x | |
| |___|___|___| |___| |
| | . | 0 | = | | / | |
| |___|___|___| |___| |
|_____________________|
`));
}
async function getInput() {
    const val = await Inquirer.prompt([
        {
            type: "list",
            name: "operator",
            message: "Which operation you want to select\n",
            choices: ["Addition", "Subtraction", "Multiplication", "Division"],
        },
        {
            type: "number",
            name: "numOne",
            message: "Enter first number",
        },
        {
            type: "number",
            name: "numTwo",
            message: "Enter second number",
        },
    ]);
    switch (val.operator) {
        case "Addition":
            console.log(chalk.blue(`${val.numOne} + ${val.numTwo} = ${val.numOne + val.numTwo} `));
            break;
        case "Subtraction":
            console.log(chalk.magenta(`${val.numOne} - ${val.numTwo} = ${val.numOne - val.numTwo} `));
            break;
        case "Multiplication":
            console.log(chalk.red(`${val.numOne} * ${val.numTwo} = ${val.numOne * val.numTwo} `));
            break;
        case "Division":
            console.log(chalk.yellow(`${val.numOne} / ${val.numTwo} = ${val.numOne / val.numTwo} `));
            break;
        default:
            break;
    }
}
async function start() {
    await welcome();
    do {
        await getInput();
        var status = await Inquirer.prompt({
            type: "input",
            name: "restart",
            message: "Do you want to continue then press Y or n to exit.\n",
        });
    } while (status.restart == "Y" ||
        status.restart === "y" ||
        status.restart == "Yes" ||
        status.restart == "yes");
}
// await welcome();
//getInput();
start();
