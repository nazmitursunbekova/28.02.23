//найти элемент используя css селектор
//let sayHelloBtn = document.querySelector("#say-hello");

//изменить свойства элемента (содержимое класс итд)
//sayHelloBtn.textContent = "SAY HELLO";
////sayHelloBtn.className = "btn btn-red";
//sayHelloBtn.classList.add("btn btn-red"); // remove toggle



//изменить стили элемента 
sayHelloBtn.style.color = "tomato";
sayHelloBtn.style.fontSize = "20px";

//не изменямые свойства
console.log(sayHelloBtn.clientTop);
console.log(sayHelloBtn.getClientRects);


//создание элемента 
let exampleBtn = document.createElement("button")


//document.body.append(examplebtn);
document.body.prepend(examplebtn);

//удаление элемента 
exampleBtn.remove();


//добавление слушателя событий
sayHelloBtn.addEventListener("click",function(event)){
  alert("hello")
}

let helloTilekBtn = document.querySelector("#hello-tilek");


//удаление элемента 
exampleBtn.remove();

//создать ul > li из массива
let list = ["apples","pears","oranges","peaches"];
let example9 = document.createElement("ul");
document.body.append(example9);
for (let i= 0; i < list.length; i++) {
  let listItem=document.createElement("li");
listItem.textContent= list[i];
example9.append(listItem);
}



//создать массив
let list1= document.createElement("ul"); //step
document.body.append(list); //step2
for (let i = 1; i <= 10; i++) {
  let listItem = document.createElement("li");
  listItem.textContent = "Example" + i;
  list.append(listItem);
}
 