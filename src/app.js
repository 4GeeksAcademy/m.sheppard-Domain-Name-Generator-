/* eslint-disable */
import "bootstrap";
import "./style.css";

let domain = ["the", "our", "dog", "apples", "car"];
let end = [".com", ".net", ".org"];

let randomDomain = domain[Math.floor(Math.random() * domain.length)];
let randomEnd = end[Math.floor(Math.random() * end.length)];

let domainName = randomDomain + randomEnd;

console.log("generated domain= " + domainName);
