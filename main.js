// document.querySelector('#h1').addEventListener('click',click1);
// a1= document.querySelector('.a,b1');console.log(a1);
arr=[];
switchB=false;
arrBool=[];
function crGame(p){
    nam=p;
    p=p*2;
    for(let a=p;a>0;a--){
        arr[a-1]=[];
        arrBool[a-1]=[];
        document.querySelector('#game').innerHTML+=`<div id="a${a}"></div>`;
        for(let b=p;b>0;b--){
           arr[a-1][b-1]=`a=${a},b=${b}`
            arrBool[a-1][b-1]=false;
            document.querySelector("#a"+a+"").innerHTML+=`
            <img  id="a${a}${b}v" onclick="click1("a${a}${b}")" style="display: inline-block; width: 50px;height: 50px;" src='images/${b}.png'><//img>
            <img  id="a${a}${b}b" onclick="click1("a${a}${b}")" style="display: none; width: 50px;height: 50px;" src='images/blank.png'><//img>
            `;
        }
    }
}
function click1(e){
    // console.log(e);
    // console.dir(e.target.value);
    switchB=!switchB;
    
    if (switchB){
        // document.querySelector("#"+e+"").innerHTML=`
        // <img id="44" onclick="click1(event.target.attributes.id.nodeValue)" style="display: inline-block; width: 50px;height: 50px;" src='images/4.png'><//img>`;
       
    document.querySelector("#"+e+"b").style.display="inline-block";
    document.querySelector("#"+e+"v").style.display="none";
    
    } else{
        document.querySelector("#"+e+"").innerHTML=`
        <img id="44" onclick="click1(event.target.attributes.id.nodeValue)" style="display: inline-block; width: 50px;height: 50px;" src='images/blank.png'><//img>`;
       
        // document.querySelector("#b").style.display="none";
        // document.querySelector("#v").style.display="inline-block";
         
    }

}

crGame(2)
