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

let firstname, familyname;
firstname = prompt ("Bitte Vorname eingeben");
familyname = prompt ("Bitte Nachname eingeben");
console.log(firstname +" "+ familyname);

let test;
test = "hi";
test = 2;
test = true;
console.log ("Datentyp:"+ typeof test);
console.log ("Inhalt:" + test)
