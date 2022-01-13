let arrs=[1,2,3,4,5,6,7,8]
let cnt=0;
for (let i = 0; i < arrs.length; i++) {
    if (arrs[i]%2===0){
        cnt++;
        document.write("</br>" + arrs[i] + " là số chẵn");
        document.write( "<br/> số lượng sỗ chẵn = " + cnt)
    }
}


