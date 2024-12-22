
const container = document.querySelector("container");
const button = document.querySelector("button");
const rainbowbutton = document.querySelector(".rainbow");
const clearbutton = document.querySelector(".cleargrid");
let box,rainbowcond;
let rainbowbuttoncond = "OFF";

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

rainbowbutton.onclick = ()=>
{      
    if(rainbowbuttoncond === "OFF")
    {
        rainbowbuttoncond = "ON";
        rainbowbutton.style.backgroundColor = `yellow`;
    }
    else
    {
        rainbowbuttoncond = "OFF";
        rainbowbutton.style.backgroundColor = '';
    }
}

clearbutton.onclick =() =>{

    boxes.forEach((box) =>{

        box.style.backgroundColor = "";
    })
}

boxes.forEach((box) => {

    box.addEventListener('mouseover', ()=>{

        box.style.backgroundColor = "grey";

        if(rainbowbuttoncond === "ON")
        {
            box.style.backgroundColor = `rgb(${randomcolor()},${randomcolor()},${randomcolor()})`;
        }                   
    })
})
}

function randomcolor()
{
    return Math.floor(Math.random() * 255);
}


 
    



