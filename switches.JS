// Simple Alarm System
// Mon - 7am
// Tue-Thur-4am
// Fri-9am
// sat-sun-8am

 let day = "Thursday"
 switch(day){
    case 'Monday':
        console.log("7am");
        break

    case 'Tuesday':
    case 'Wednwsday':
    case 'Thursday':
        console.log("4am");
        break

    case 'Friday':
        console.log("9am");
        break

    case 'Saturday':
    case 'Sunday':
        console.log("8am");
        break

    default:
        console.log("Day not defined");

}
console.log("Wake Upp!!!")
