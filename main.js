document.querySelector('#button').addEventListener('click',click)
arr=[];
switchB=false;
arrBool=[];
function crGame(p){
    for(let a=p;a>0;a--){
        arr[a-1]=[];
        arrBool[a-1]=[];
        document.querySelector('#game').innerHTML+=`<div id="aa${a}"></div>`;
    for(let b=p;b>0;b--){
        arr[a-1][b-1]=`a=${a},b=${a}`;
        arrBool[a-1][b-1]=false;
    // document.body.innerHTML+='<div>vvv</div>'
    // document.querySelector("#aa"+a+"").innerHTML+=`
    // <img id="${a}${b}" style="display: inline-block; width: 50px;height: 50px;" src='images/${b}.png'><//img>`
    document.querySelector("#aa"+a+"").innerHTML+=`
    <img id="${a}${b}" onclick="click()" style="display: inline-block; width: 50px;height: 50px;" src='images/blank.png'><//img>`

}
}
console.log(arr);
}
function click(){
    switchB=!switchB;
    console.log("a",switchB);
    if (switchB){
        console.log("if",switchB);
    document.querySelector("#b").style.display="inline-block";
    // setAttribute("style", "display: inline-block;");
    document.querySelector("#v").style.display="none";
    
}
}

crGame(10)
