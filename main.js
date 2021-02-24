// document.querySelector('#h1').addEventListener('click',click1);
// a1= document.querySelector('.a,b1');console.log(a1);
arr=[];
// switchB=false;
counterImg=0;
numImgPR=0;
strImgPR='';
// arrBool=[];
function crGame(event){
    p = event.target.value;
    //    למען הסדר הטוב הוספתי ריטרן אבל לא היה צריך
    if (!p) {document.querySelector('#game').innerHTML='';return}
    nam=p;
    p=p*2;
    for(let a=p;a>0;a--){
        arr[a-1]=[];
        // arrBool[a-1]=[];
    }
    for(let a=p*nam;a>0;a--){
        let randNumImg = Math.floor(Math.random() * 10);
        for (let i=2;i>0;i--){
            for (let j=0;j<50;){
               var randNum1= Math.floor(Math.random() * p);
                var randNum2=Math.floor(Math.random() * p);
                if (!arr[randNum1][randNum2]){
                    arr[randNum1][randNum2]=randNumImg+1;  j=50; 
                }
            // if (randNum1)
            }
        }
    }
    for(let a=p;a>0;a--){
        document.querySelector('#game').innerHTML+=`<div id="a${a}"></div>`;
        for(let b=p;b>0;b--){
        //    arr[a-1][b-1]=`a=${a},b=${b}`
        //    arr[a-1][b-1]=5
           numImg=arr[a-1][b-1]
            // arrBool[a-1][b-1]=false;
            document.querySelector("#a"+a+"").innerHTML+=`
            <img  id="a${a}${b}img" onclick="click1('a${a}${b}','img',${numImg})" style="display: none; width: 50px;height: 50px;" src='images/${numImg}.png'><//img>
            <img  id="a${a}${b}b" onclick="click1('a${a}${b}','b',${numImg})" style="display:inline-block ; width: 50px;height: 50px;" src='images/blank.png'><//img>
            `;
        }
    }
}
function click1(e,pic,numImgP){
    // console.log(e);
    // console.dir(e.target.value);
    // switchB=!switchB;
    
    if (pic=='b')
    {
        counterImg++;
        if (counterImg==1)
        {
            numImgPR=numImgP;
            strImgPR=e;
        }
        document.querySelector("#"+e+"b").style.display="none";
        document.querySelector("#"+e+"img").style.display="inline-block";
        if (counterImg>1)
        {
            counterImg=0; 
            if (numImgPR!=numImgP){console.log(' numImgPR',numImgPR,numImgP);
                 setTimeout(()=>{click1(e,'img');click1(strImgPR,'img');},1*1000)
            }
            
        }
    } else{
        // document.querySelector("#"+e+"").innerHTML=`
        // <img id="44" onclick="click1(event.target.attributes.id.nodeValue)" style="display: inline-block; width: 50px;height: 50px;" src='images/blank.png'><//img>`;
       
        document.querySelector("#"+e+"b").style.display="inline-block";
        document.querySelector("#"+e+"img").style.display="none";
         
    }

}
// function mamare(rNI){
//     // debugger
//     // for (let i=2;i>0;i--){
//     //     for (let j=0;j<50;){
//     //        var randNum1= Math.floor(Math.random() * p);
//     //         var randNum2=Math.floor(Math.random() * p);
//     //         if (!arr[randNum1][randNum2]){
//     //             arr[randNum1][randNum2]=rNI+1;  j=50; 
//     //         }
//     //     // if (randNum1)
//     //     }
//     // }
// }
// crGame(2)
