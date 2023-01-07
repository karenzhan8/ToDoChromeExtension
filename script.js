/** Initialize Good Morning, Good Afternoon, Good Evening Message */
const hours = new Date().getHours();
var greeting = document.getElementById("greeting");

if (hours < 12) {
  greeting.appendChild(document.createTextNode("Good Morning."));
} else if (hours < 17) {
  greeting.appendChild(document.createTextNode("Good Afternoon."));
} else {
  greeting.appendChild(document.createTextNode("Good Evening."));
}

/* Use Local Storage to Store To-Do List */
var list = document.querySelector('#list'),
    form = document.querySelector('form'),
    item = document.querySelector('#item');

form.addEventListener('submit',function(e){
  e.preventDefault();
  list.innerHTML += '<li>' + item.value + '</li>';
  store();
  item.value = "";
},false)

list.addEventListener('click',function(e){
  var t = e.target;
  if(t.classList.contains('checked')){
  t.parentNode.removeChild(t);
  } else {
  t.classList.add('checked');
  }
  store();
},false)

function store() {
  window.localStorage.myitems = list.innerHTML;
}

function getValues() {
  var storedValues = window.localStorage.myitems;
  if(storedValues) {
    list.innerHTML = storedValues;
  }
}
getValues();

document.getElementById("close-button").addEventListener("click", function() {
  document.getElementById('to-do-list').style.display = 'none';
  document.getElementById('to-do-button').style.display = 'block';
});
document.getElementById("to-do-button").addEventListener("click", function() {
  document.getElementById('to-do-list').style.display = 'block';
  document.getElementById('to-do-button').style.display = 'none';
  
});



/** Use Quotable API (https://github.com/lukePeavey/quotable) to randomly generate a new quote */
fetch('https://api.quotable.io/random', {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
    },
})
.then(response => response.json())
.then(response => document.getElementById("quote").appendChild(document.createTextNode(JSON.stringify(response.content))))

