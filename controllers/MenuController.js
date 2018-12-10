const inquirer = require('inquirer');

module.exports = class MenuController {
    constructor() {
        this.mainMenuQuestions = [
            {
                type: "list",
                name: "mainMenuChoice",
                message: "Please choose from an option below: ",
                choices: [
                    "Add new contact",
                    "Exit"
                ]
            }
        ];
        this.contacts = [];
    }

    main() {
        console.log("Welcome to AddressBloc!");
        inquirer.prompt(this.mainMenuQuestions).then((response) => {
            switch(response.mainMenuChoice) {
                case "Add new contact":
                    this.addContact();
                    break;
                case "Exit":
                    this.exit();
                    break;
                default:
                    console.log("Invalid input");
                    this.main();
            }
        })
        .catch((err) => {
            console.log(err);
        })
    }

    clear() {
        console.log("\x1Bc");
    }

    addContact() {
        this.clear();
        console.log("Add contact called");
        this.main();
    }

    getContactCount() {
       return this.contacts.length;
    }

    exit() {
        console.log("Thank you for using AddressBloc!");
        process.exit();
    }
}