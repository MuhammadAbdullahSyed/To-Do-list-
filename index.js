#! /usr/bin/env node
import inqurier from "inquirer";
let toDos = [];
let condition = true;
while (condition) {
    let addTask = await inqurier.prompt([
        {
            name: "todo",
            type: "input",
            message: "what you want to add in your Todos?"
        },
        {
            name: "addMore",
            type: "confirm",
            message: "Do you wnat to add more?",
            default: "true",
        }
    ]);
    toDos.push(addTask.todo);
    condition = addTask.addMore;
}
toDos.pop();
toDos.splice(1, 1, "M");
console.log(toDos.join("\n"));
