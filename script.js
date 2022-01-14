function main(){

//Add the "big" class to the "grow-me" paragraph.
const el = document.getElementById("grow-me");
el.classList.add("big");

//Remove the "big" class from the "shrink-me" paragraph.
const el2 = document.getElementById("shrink-me");
el2.classList.remove("big");

//Find all the <li>s and log their text content to the console.
//loop through (for each) access the innerText
const listItems = document.querySelectorAll('li');
listItems.forEach(item => console.log(item.innerText));

//Set the href of the link to "https://www.example.com" and update the text to say "somewhere" instead of "nowhere".
const el3 = document.querySelector(".link");
el3.setAttribute("href", "https://www.example.com");
el3.innerText = "somewhere";

//Set the "display" CSS property of the "hide-me" paragraph to "none".
const el4 = document.getElementById("hide-me");
el4.style.display = "none";

//Set the "display" CSS property of the "show-me" paragraph to "block".
const el5 = document.getElementById("show-me");
el5.style.display = "block";

//Get the text that the user enters into the "name" input box and use it to set a welcome message in the <h1>, e.g., "Welcome Grant!".

document.querySelector("h1").innerText = "Welcome " + document.getElementById("name").value; //easier way

/*function person(user){
if (user != null) {
    document.querySelector("h1").innerHTML =
    "Welcome " + user;
}
};
person(document.getElementById("name").value);
*/

};