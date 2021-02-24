arr=[];
counterImg=0;
numImgPR=0;
strImgPR='';
function crGame(event){
    p = +event.target.value;
    //    למען הסדר הטוב הוספתי ריטרן אבל לא היה צריך
    if (!p) {document.querySelector('#game').innerHTML='';return}
    nam=p;
    p=p*2;
    for(let a=p;a>0;a--){
        arr[a-1]=[];
    }
    for(let a=p*nam;a>0;a--){
        let randNumImg = Math.floor(Math.random() * 10);
        for (let i=2;i>0;i--){
            for (let j=true;j;){
               var randNum1= Math.floor(Math.random() * p);
                var randNum2=Math.floor(Math.random() * p);
                if (!arr[randNum1][randNum2]){
                    arr[randNum1][randNum2]=randNumImg+1;  j=false; 
                }
            }
        }
    }
    for(let a=p;a>0;a--){
        document.querySelector('#game').innerHTML+=`<div id="a${a}"></div>`;
        for(let b=p;b>0;b--){
           numImg=arr[a-1][b-1]
           document.querySelector("#a"+a+"").innerHTML+=`
            <img  id="a${a}${b}img" style="display: none; width: 50px;height: 50px;" src='images/${numImg}.png'><//img>
            <img  id="a${a}${b}b" onclick="click1('a${a}${b}','b',${numImg})" style="display:inline-block ; width: 50px;height: 50px;" src='images/blank.png'><//img>
            `;
        }
    }
}
function click1(imgId,pic,numImgP){
    if (pic=='b')
    {
        counterImg++;
        if (counterImg%2==1)
        {
            numImgPR=numImgP;
            strImgPR=imgId;
        }
        document.querySelector("#"+imgId+"b").style.display="none";
        document.querySelector("#"+imgId+"img").style.display="inline-block";
        if (counterImg%2==0)
        {
            // counterImg=0; 
            if (numImgPR!=numImgP){console.log(' numImgPR',numImgPR,numImgP);
                 setTimeoutImg(imgId,'img');setTimeoutImg(strImgPR,'img');
            }
            
        }
    } else{
        document.querySelector("#"+imgId+"b").style.display="inline-block";
        document.querySelector("#"+imgId+"img").style.display="none";
    }
}
function setTimeoutImg(a,b){
    setTimeout(()=>click1(a,b),2*1000);
};
