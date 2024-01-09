let usrsco=0;
let comsco=0;
let dis=document.querySelector(".display")
const vara=document.querySelectorAll(".pic11")
let body=document.querySelector("body");

const randomm = ()=>
{
    let com = Math.floor(Math.random()*3);
    const arr=["rock","paper","scissor"];
    
    return arr[com];
}
const show=(win)=>{
    if(win){
        dis.innerHTML="you win";
        body.style.backgroundColor="green"
        usrsco++;
    }
        else{
            dis.innerHTML="you loss"
            body.style.backgroundColor="red"
            comsco++;
        }
        let aa=document.querySelector(".scorecom");
aa.innerHTML=comsco;
let aaa=document.querySelector(".scoreus");
aaa.innerHTML=usrsco;
    
}



const playgame=(userchoice) =>{
    const comchoice= randomm();

    if(userchoice===comchoice){
        body.style.backgroundColor="blue"
     dis.innerHTML="Draw"
     
    }
    else{
        let win=true;
        if(userchoice==="rock"){
            win=comchoice==="paper"?false:true;
        }
        else if(userchoice="paper"){
           win= comchoice==="scissor"?false:true;
        }
        else{
            win=comchoice==="rock"?false:true;
        }
        console.log(win);
        show(win);
    }
    
    
    

}



vara.forEach((choice)=>{
    // console.log(choice);
    choice.addEventListener("click",() => {
        const userchoice=choice.getAttribute("id");
        // console.log(userchoice);
        playgame(userchoice);
    })
});
// let aa=document.querySelector(".scorecom");
// aa.innerHTML=comsco;
// let aaa=document.querySelector(".scoreus");
// aaa.innerHTML=usrsco;
