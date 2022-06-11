const form=document.querySelector("form");
const input= document.querySelector("input");
const button= document.querySelector("button");
const list1= document.querySelector("ul")


function Addtodo(){
    const list= document.createElement("li")
       list1.appendChild(list);
    const text=input.value;
 
list.innerHTML=text;
input.value=""
list.addEventListener('dblclick',()=> {
list.style.display="none";
})
list.addEventListener('click',()=> {
    list.style.textDecoration="line-through";
    
    })
 
}

