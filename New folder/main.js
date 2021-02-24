document.querySelector('#h1').addEventListener('click',click1);
a1= document.querySelector('.a,b1');console.log(a1);
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
          /*  for(let b=p;b>0;b--){
                arr[a-1][b-1]='';
                if (b%2==0){
                    randNumImg = Math.floor(Math.random() * 10);
                    arr[a-1][b-1]=randNumImg;
                }
            }
            */
           arr[a-1][b-1]=`a=${a},b=${b}`
            arrBool[a-1][b-1]=false;
            document.querySelector("#a"+a+"").innerHTML+=`
            <img id="${a}${b}" onclick="click1()" style="display: inline-block; width: 50px;height: 50px;" src='images/${b}.png'><//img>`;
            // document.querySelector("#"+a+b+"").innerHTML="<div>vvv</div>"

        }
    }
    console.log(arr);
}
function click1(){
    switchB=!switchB;
    
    if (switchB){
        console.log("if",switchB);
    document.querySelector("#b").style.display="inline-block";
    document.querySelector("#v").style.display="none";
    // setAttribute("style", "display: inline-block;");
    } else{
        document.querySelector("#b").style.display="none";
        document.querySelector("#v").style.display="inline-block";
         
    }

}

crGame(2)
