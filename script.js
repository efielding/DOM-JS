var anchor = document.querySelector('a');
console.log (anchor);
var allAnchors = document.querySelectorAll('a');
console.log(allAnchors);

// The '1' targets the second anchor specifically
allAnchors [1].textContent = 'This text is set from JS using DOM manipulation';
allAnchors[1].href = 'https:ww.google.com';
allAnchors[1].target = 'blank'; //Works with or without the _but_ is safer so you aren't overriding other existing

// Two ways to do the same thing. Query is more modern
var para1 = document.getElementById('para-1');
console.log(para1);
var para1UsingSelector = document.querySelector('#para-1'); //Query selector needs specificity so the id is needed
console.log(para1UsingSelector);
para1.style.color = 'orange';

var btn = document.getElementsByClassName('button'); // This is not a  query selector so specifics are not needed
console.log(btnUsingSelector);
btn[0].style.padding = '10px';
btn[0].style.fontSize = '22px';
// fix what's wrong then add and commit to current branch