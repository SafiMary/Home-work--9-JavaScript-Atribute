const str1= document.getElementById('li1')
const str2= document.getElementById('li2')
const str3= document.getElementById('li3')
 // создаем новый элемент
 const newstr1 = document.createElement('a');
 newstr1.setAttribute("href", "#");
 newstr1.textContent = 'https://metanit.com/web/html5/2.5.php?ysclid=lt5g0oiceb259853214';
str1.textContent = "";
str1.appendChild(newstr1); 

const newstr2 = document.createElement('a');
 newstr2.setAttribute("href", "#");
 newstr2.textContent = 'https://webformyself.com/mnogourovnevyj-spisok-v-html-kak-sozdat-i-nastroit/?ysclid=lt5g9w7h42422061991';
str2.textContent = "";
str2.appendChild(newstr2); 


const newstr3 = document.createElement('a');
 newstr3.setAttribute("href", "#");
 newstr3.textContent = 'https://metanit.com/web/javascript/1.1.php?ysclid=lt1hqk79ex167261475!';
str3.textContent = "";
str3.appendChild(newstr3); 
