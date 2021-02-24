azsx=[];nnn=5;
nT=nnn*2;
for (let i=nT-1;i>=0;i--){
    azsx[i]=[];
}
for (let i=nnn*nT;i>0;i--){
    let randNumImg = Math.floor(Math.random() * 10);
    mamare(randNumImg) 
}
function mamare(rNI){
    // debugger
    for (let i=2;i>0;i--){
        for (let j=0;j<50;){
           var randNum1= Math.floor(Math.random() * nT);
            var randNum2=Math.floor(Math.random() * nT);
            if (!azsx[randNum1][randNum2]){
                azsx[randNum1][randNum2]=rNI+1;  j=50; 
            }
        // if (randNum1)
        }
    }
}
console.log(azsx);  