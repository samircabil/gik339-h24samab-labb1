console.log(" hej från script.js!")

/* uppgift 2*/
console.log( "innan blocket");
try {
    console.log(a, b, c);
} catch {
    console.log("variblerna är inte tillgängliga");
}
{
var a = "jag är var";
let b = " jag är let";
const c = "jag är const";

console.log("innuti blocker");
console.log(a);
console.log(b);
console.log(c);
}

console.log("Efter blocket:");
console.log(a);
try {
    console.log(b);
} catch {
    console.log( "b är inte tillgäng utanför blocket");
}
try {
    console.log(c);
} catch {
    console.log("c är inte tillgänglig utanför blocket");
}

/* Reflektion uppgift 2
Skillnaden mellan var, let och konst: Var fungerar både inuti och utanför blocket. 
Let och const fungerar bara inuti blocket {}.

Placeringen av console.og(): Före blocket, variablerna finns inte än vilket ger fel. 
Inuti blocket: alla 3 fungerar. 
Efter blocket: bara "Var" fungerar, "let" och "const" fungerar inte. */

/* uppgift 3 jämförelse och specialvärden */
 console.log("'3' == 3:", '3' == 3);
 console.log("'3' === 3:", '3' === 3);

 console.log("NaN === NaN:", NaN === NaN);
 console.log( "null == undefined:", null == undefined);
 console.log("null === undefined:", null === undefined);

 let value = undefined;
 let result = value ? "truthy" : "falsy";
 console.log("undefined är", result);

 /* Reflektion uppgift 3; 
 Förklarar output för de olika värdena som du testade med == och === och på:
 Jämför bara värden och kan konvertera typer  exempel '3' == 3 blir true menan === 3'3 === 3 blir fasle.

 Förklarar vad som händer när ett uttryck står för sig självt 
 i exempelvis en tenerary operator eller inom parenteserna hos en if-sats;
  när ett utryck står för sig självt, exampel i en ternay operator eller if-sats kontrolleras om 
  det är truth eller false. Exampel undefined är false, och resultatet blir false i logiska kontroller.

  Förklarar vad NaN, undefined och null representerar:
  NaN betyder " not a number" och anv när en matematisk operation misslyckas.
  undefined betyder att en variabek finns men inte har något värde.
  Null betyder att variabeln är medvetet tom.  */

  /* uppgift 4*/
  
  function greet(name) {
    console.log("inuti funktionen", name);
    return "Hej " + name;
  }
  console.log(greet("Nuur"));

  let name = "Mariam"
  console.log("Utanför funktionen  innan anrop",name);
  console.log(greet("Nour"));
  console.log("utanför funktioen efter anrop",name);

  /* Reflektion uppgift 4
   1.Beskriver skillnaden mellan de olika sätten att skapa en funktion
  (funktionsdeklaration, funktionsuttryck och arrowfunktion) amt varför du valde 
   den varianten som du valde?

   Svar:  Det finns 3 sätt att skapa funktioner: 1 funktiondeklaration function greet() {}, kan anroppas innan den är definierad
   2 funtionsuttryck: const greet function() {}, kan anropas efter att den skapats.
   3 aroowfunktion: const greet () => {}, kortare syntax, inget egen this.
   Jag valde funktiondeklaration eftersom det är tydligast och enklast att förstå.

   2.Reflekterar över vad du behöver tänka på gällande varifrån du kan anropa dina 
   funktioner (innan/efter funktionerna har skapats).

   Svar:  Funktiondeklaration kan anropas både före och efter att den skrivits i koden.
   Men funktionsuttrck och arrowfunktion måste anropas efter de skapats, annars får man felmeddelande.

   3.Förklararar vad som händer om du ändrar variabeln/parametern name i de olika 
   situationerna och hur det påverkar utskrifterna på de olika ställena i koden. 

   Svar: Parametern name inne i funktionen är lokal och påverkar inte variabeln name utanför funktionen. 
   Den yttre variabeln behåller sitt värde före och efter anropet, medan parametern bara gäller inne i funktioen.

   4.Förklarar skillnaden mellan parameter, variabel och argument?
   Svar: Parameter är namnet som  står i funktionshuvudet ex name.
   Varibel är ett lagret värde i resten av koden ex let name = "Mariam".
   Argument ärvärdet man skcikar in närman anropar funktioen ex "Nour".*/


