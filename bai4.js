function checkSNT(x){
    let flag=true;
    for (let i = 2; i <= Math.sqrt(x) ; i++) {
        if (x%i==0){
           flag=false;
           break;
        }
    }return flag;
}
function totalSNT(){
    let cnt=1;
    let tongSNT=0;
    while (cnt>0){
        cnt++;
        if (checkSNT(cnt)){
            tongSNT+= cnt

        }
        if (cnt>500){
            break;
        }
    } document.write(tongSNT)
} totalSNT()
