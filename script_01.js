/***** Variablen 01 *******/

/**
 *  Block-Kommentar
 */

//Zeilen Kommentar

//Konsolen-Ausgabe
// console.log("Hello,World!");
// //console.log(firstname); //nicht deklarierte War, ---> Fehler

// /***** 02 Deklaration + Wertzuweisung */
// let firstname; //Deklaration (Definition)
// firstname= "Alex "; //Wertzuweisung
// console.log(firstname); //Ausgabe

// let familyname = "Van Hanglow"; // Deklaration + Wertzuweisung
// console.log(familyname); //Ausgabe 
// console.log(firstname +" "+ familyname);

//***** 03 Deklaration + Wertzuweisung II *****/

// let firstname, familyname;
// firstname = prompt ("Bitte Vorname eingeben");
// familyname = prompt ("Bitte Nachname eingeben");
// console.log(firstname +" "+ familyname);

// let test;
// test = "hi";
// test = 2;
// test = true;
// console.log ("Datentyp:"+ typeof test);
// console.log ("Inhalt:" + test)

/***** 03a Konstanten *****/
// const test = "Hi"; //Variable mit Konstantem Inhalt
// test = "Hallo"; //KEINE neue Zuweisung zur LZ möglich
// console.log ("Inhalt:"+ test);

/***** Beispiele ***********/

//Deklaration

let ageJohn, ageMark;
let birthYearJohn, birthYearMark;

let date = new Date();
let year = date.getFullYear();


//Wertzuweisung
ageJohn = 25;
ageMark = 35;

// //Berechnung
birthYearJohn = year - ageJohn;
birthYearMark = year - ageMark;

// //Ausgabe
console.log ("birthYearJohn" + birthYearJohn);
console.log ("birthYearMark" + birthYearMark);
