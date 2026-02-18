// variables in javascript
var fullName= "Sameer Maharjan";
let address= "Nayabazar";
const bloodGroup= "B+";

console.log(fullName,address,bloodGroup);


//data types
let name='sameer';
let age= 12;
let isStudent= true;

let arr= [1,2,3,4,5];
let obj= {
    name:"Sameer",
    class: 2,
    address: "kathamadu",
    num: arr
};
console.log(obj["name"]);
console.log(obj.num[0]);

//functions
function name1(name) {
    console.log(name)
}
name1("Sameer")

const name2=(name)=>{
    console.log(`Your name is ${name}`);
}
name2("Sameer");

const headingById= document.getElementById("head");
console.log(headingById.innerText);

const headingByQuery= document.querySelector("#head");
console.log(headingByQuery)

const paraByQuery= document.querySelector(".para");
console.log(paraByQuery);

paraByQuery.innerText="hello this is innertext";
paraByQuery.style.color="red";

const btn= document.querySelector(".btn");
btn.addEventListener("click",()=>{
    alert("btn click bho");
})