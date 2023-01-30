let result=document.getElementById("inputext");

let calculate=(number)=>{
    result.value=result.value+number;

}
let Result=()=>{
    try{
        result.value=eval(result.value)
    }
    catch(err){
        alert("enter the valid input");
    }
}
let clr=()=>{
    result.value=""
}
let del=()=>{
    result.value=result.value.slice(0,-1)
}
