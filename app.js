
const inp=document.querySelector('#inp');
const btn= document.querySelector('#btn');
const list=document.querySelector('#list');


btn.addEventListener('click',()=>{
    if(inp.value!=""){
    const todotext=inp.value;

    const li=document.createElement('li');

    const button=document.createElement('button');

    button.innerText="Remove";
    li.innerText=todotext;

    // adding remove  todo list
    button.addEventListener('click',()=>{
        li.remove();
    })
    

    list.append(li);
    li.append(button);

    inp.value="";
}
else
alert('empty todo')
return;
}) 
