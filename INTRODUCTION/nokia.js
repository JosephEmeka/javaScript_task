

function mainMenu() {
console.log(`  
---Main Menu---
1.  Phone book
2.  Messages
3.  Chat
4.  Call register
5.  Tones
6.  Settings
7.  Call divert
8.  Games
9.  Calculator
10. Reminders
11.  Clock
12. Profiles
13. SIM services
`)
}


function userImputForMainMenu(){
let userInput = prompt("Choose option between 1 - 13:");
console.log("you chose option, " + userInput);

switch (parseInt(userInput)){
    case 1:
        function phonebook(){
            console.log(`  
---Phone Book---
1. Search
2. Service Nos. 
3. Add name
4. Erase
5. Edit
6. Assign tone
7. Send b’card
8. Options
    1. Type of view
    2. Memory status
9. Speed dials
10. Voice tags
`)

function phoneBookMenu(){
    let phoneBookMenuOption = prompt("Choose option between 1 - 10: ");
console.log("you chose option, " + phoneBookMenuOption);
    switch(parseInt(phoneBookMenuOption)){
        case 1:
            console.log(" Search");
        case 2:
            console.log("Service Nos.");
        case 3:
            console.log("Add name");
        case 4:
            console.log("Erase");
        case 5:
            console.log("Edit");
        case 6:
            console.log("Assign tone");
        case 7:
            console.log("Send b’card");
        case 8:
            console.log("Options");
        case 9:
            console.log("Speed dials");
        case 10:
            console.log("Voice tags");
        default:
            console.log("Unknown service");
            mainMenu();
    }

}

        }
break;
        
       
    case 2:
        function messages(){
        console.log(`  
        ---Messages---
        1. Write messages
        2. Inbox
        3. Outbox
        4. Picture messages
        5. Templates
        6. Smileys
        7. Message settings
            1. Set 121. Message centre number
            2. Messages sent as
            3. Message validity
            2. Common 31. Delivery reports
            2. Reply via same centre
            3. Character support
        8. Info service
        9. Voice mailbox number
        10.Service command editor

        `)
        
        function messagesMenu(){
            let messagesMenuOption = prompt("Choose option between 1 - 7: ");
            console.log("you chose option, " + messagesMenuOption);

            switch(parseInt(messagesMenuOption)){
                case 1:
                    console.log("Write messages");
                case 2:
                    console.log("Inbox");
                case 3:
                    console.log("Outbox");
                case 4:
                    console.log("Picture messages");
                case 5:
                    console.log("Templates");
                case 6:
                    console.log("Smileys");
                case 7:
                    console.log("Message settings");
                case 8:
                    console.log("Info service");
                case 9:
                    console.log("Voice mailbox number");
                case 10:
                    console.log("Service command editor");
                default:
                    console.log("Unknown service");
                    mainMenu();
            }
        
        }
    
    }

    break;

    
    case 3:
        function chat(){};
    case 4:
        function callRegister(){
                console.log(`  
    ---Call Register---
    1. Missed calls
    2. Received calls
    3. Dialled numbers
    4. Erase recent call lists
    5. Show call duration
        1. Last call duration
        2. All calls’ duration
        3. Received calls’ duration
        4. Dialled calls’ duration
        5. Clear timers
    6. Show call costs
        1. Last call cost
        2. All calls’ cost
        3. Clear counters
    7. Call cost settings
        1. Call cost limit
        2. Show costs in
    8. Prepaid credit
    `)
    
    function callRegisterMenu(){
        let callRegisterMenuOption = prompt("Choose option between 1 - 10: ");
    console.log("you chose option, " + callRegisterMenu);
    
    switch(parseInt(callRegisterMenuOption)){
        case 1:
            console.log("Missed calls");
        case 2:
            console.log("Inbox");
        case 3:
            console.log("Outbox");
        case 4:
            console.log("Picture messages");
        case 5:
            console.log("Templates");
        case 6:
            console.log("Smileys");
        case 7:
            console.log("Message settings");
        case 8:
            console.log("Info service");
        default:
            console.log("Unknown service");
            mainMenu();
    }
    }


        };

        break;

    case 5:
        function tones(){
            console.log(`  
            ---tones---
            1. Ringing tone
            2. Ringing volume
            3. Incoming call alert
            4. Composer
            5. Message alert tone
            6. Keypad tones
            7. Warning and game tones
            8. Vibrating alert
            9. Screen saver
            `)
            
            function tonesMenu(){
                let tonesMenuOption = prompt("Choose option between 1 - 10: ");
            console.log("you chose option, " + tonesMenuOption);
            switch(parseInt(tonesMenuOption)){
                case 1:
                    console.log("Ringing tone");
                case 2:
                    console.log("Ringing volumex");
                case 3:
                    console.log("Incoming call alert");
                case 4:
                    console.log("Composer");
                case 5:
                    console.log("Message alert tone");
                case 6:
                    console.log("Keypad tones");
                case 7:
                    console.log("Warning and game tones");
                case 8:
                    console.log("Vibrating alert");
                case 9:
                    console.log("Screen saver");
                default:
                    console.log("Unknown service");
                    mainMenu();
            }

        };

    }

    break;

    case 6:
        function settings(){
            console.log(`  
            ---Settings---
            1. Call settings
                1. Automatic redial
                2. Speed dialling
                3. Call waiting options
                4. Own number sending
                5. Phone line in use
                6. Automatic answer 
            2. Phone settings
                1. Language
                2. Cell info display
                3. Welcome note
                4. Network selection
                5. Lights
                6. Confirm SIM service actions
            3. Security settings
                1. PIN code request
                2. Call barring service
                3. Fixed dialling
                4. Closed user group
                5. Phone security
                6. Change access codes
            4. Restore factory settings
            
            `)
            
            function settingsMenu(){
                let settingsMenuOPtion = prompt("Choose option between 1 - 10: ");
            console.log("you chose option, " + tonesMenuOption);

        };

        };
        break;

    case 7:
        function callDivert(){};
        break;
    case 8:
        function games(){};
        break;
    case 9:
        function calculator(){};
        break;
    case 10:
        function Reminders(){};
        break;
    case 11:
        function Clock(){
            console.log(`  
            ---Settings---
            1. Alarm clock
            2. Clock settings
            3. Date setting
            4. Stopwatch
            5. Countdown timer
            6. Auto update of date and time
        `);

        function clockMenu(){
            let clockMenuOption = prompt("Choose option between 1 - 10: ");
        console.log("you chose option, " + clockMenuOption);
        switch(parseInt(clockMenuOption)){
            case 1:
                console.log("Alarm clock");
            case 2:
                console.log("Clock settings");
            case 3:
                console.log("Date setting");
            case 4:
                console.log("Stopwatch");
            case 5:
                console.log("Countdown timer");
            case 6:
                console.log("Auto update of date and time");
        
            default:
                console.log("Unknown service");
                mainMenu();
        }

        };
    }

        break;
    case 12:
        function Profiles(){};
        break;
    case 13:
        function simServices(){};
        break;
    default:
        console.log("Invalid option selected.");
        
};

};
