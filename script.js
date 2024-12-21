
const container = document.querySelector("container");
let box;
let boxlist = [];
let size = Math.pow(16,2);


//container height: no of boxes * height of each box
//container width: no of boxes * width of each box
for(let i = 0; i < size; i++)
{
    box = document.createElement("div");
    box.classList.add("box");
    boxlist += box;  
    container.append(box);
}
console.log(document.querySelector(".box").getBoundingClientRect().width);
console.log(document.querySelector(".box").clientWidth);
const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
    let cond = true;
    box.addEventListener('mouseover', (e)=>{

        if(cond)
            box.setAttribute("style","background-color: grey");
             
       
        
    })
    box.addEventListener('mouseleave', () =>{

        if(cond)
            box.setAttribute("style","background-color");
               
    })
    box.addEventListener('mousedown',(e) =>{

        if(e.button === 0)
        {
            console.log(e.button);
            box.setAttribute("style","background-color: black");
            cond = false;
        }
        if(e.button === 2)
            {    
                console.log(e.button);
               
                box.setAttribute("style","background-color");
                cond = true;
            }
        
    })
    
    box.addEventListener('contextmenu', (e)=>{
        e.preventDefault();
    }) 
})



