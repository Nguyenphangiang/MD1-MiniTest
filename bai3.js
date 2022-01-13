let arrs= [2,3,4,5,6,7,8,9,10,11,12];
let total=0;
function checkSNT(x){
    let flag=true
    for (let i = 2; i <= Math.sqrt(x); i++) {
        if(x%i===0){
            flag=false;
            break;
        }
    } return flag
}
function totalSNT(){
    for (let i = 0; i < arrs.length; i++) {
        if (checkSNT(arrs[i])){
            total+=arrs[i];
        }
    }
}
totalSNT()
document.write(total);