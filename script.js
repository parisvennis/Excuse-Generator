/* eslint-disable */

import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = function() {
  let who = ["My Cat", "My Friend", "My Grandma", "My Boyfriend"];
  let what = [
    " ate my homework ",
    " kidnapped me ",
    " didnt call me ",
    " made me dinner"
  ];
  let when = [
    " last week.",
    " last month.",
    " last year.",
    "yesterday",
    "today"
  ];

  let who_index = Math.floor(math.random() * who.length);
  let what_index = Math.floor(math.random() * what.length);
  let when_index = Math.floor(math.random() * when.length);

  var outcome = who[who_index] + what[what_index] + when[when_index];

  console.log(outcome);
  document.querySelector("#the-excuse").innerHTML = outcome;
};