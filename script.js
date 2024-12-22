
const container = document.querySelector("container");
const button = document.querySelector("button");
let box;
let x = 16;
boxCreator();
function boxCreator()
{
    let size = Math.pow(x,2);
var containerside = container.getBoundingClientRect().width - 1.6;
var boxsize = (containerside/x) - 2*0.8;
boxcolor = document.createElement('div');

for(let i = 0; i < size; i++)
{
    box = document.createElement("div");
    box.classList.add("box");
    box.style.width = `${boxsize}px`;
    box.style.height = `${boxsize}px`;
    container.append(box);
}

const boxes = document.querySelectorAll(".box");

button.onclick = ()=>{

    x = window.prompt("Enter size of grid");
    x = parseInt(x);
    if(!x || typeof(x) === 'string')
    {
        x = 16;
    }
    if(x > 100)
    {
        window.alert("enter a value below 100!");
        x = 16;
    }
    container.innerHTML = '';
    boxCreator();
};

boxes.forEach((box) => {

    box.addEventListener('mouseover', (e)=>{

        box.style.backgroundColor = "grey";
             
    })
})
}

 
    



