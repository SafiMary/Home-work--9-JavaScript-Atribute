const listItems = document.querySelectorAll('.li-class');

for(let i in listItems){
const link = listItems[i].innerText;
listItems[i].innerHTML =`<a href="${link}">${link}</a>`;
}