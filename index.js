let string =""

let buttons =document.querySelectorAll(".btn")
// console.log(buttons)
Array.from(buttons).forEach(element=>{
element.addEventListener("click",(e)=>{
// console.log(e.target.innerHTML)
try {
    if(e.target.innerHTML == "="){
        string =eval(string)
        document.getElementById("input").value =string
    }
    
    else if(e.target.innerHTML =="c"){
    string =" "
    document.getElementById("input").value =string
    }
    else{
        
    string = string +  e.target.innerHTML;
    document.getElementById("input").value =string
    
    }

} catch (error) {
    console.log("Don,t worry")
}

})
})