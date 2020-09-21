//this file is optional
//you can use this to paste in js code and have it run when index.html is loaded
var Element = document.createElement('div');
Element.innerHTML = 'Hello Cassy';
Element.style.backgroundColor = '#f9f9f9';
document.body.appendChild(Element);

Element.style.textAlign = 'center';

var ul = document.createElement('ul');

for (let i = 0; i < 3; i++){
    let li = document.createElement('li');
    li.innerHTML = (i + 1).toString();
    ul.appendChild(li);
}

Element.appendChild(ul);
ul.style.textAlign = 'left';

ul.removeChild(ul.querySelector('li:nth-child(2)'));

ul.remove();



