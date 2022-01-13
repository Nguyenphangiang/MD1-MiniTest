let arrs=[1,2,3,4,2,1,5,8,9,10,2,4]
let inputA= prompt("Nhập số bạn muốn đếm  số lượng có trong mảng  : ")
let cntA=0;
for (let i = 0; i < arrs.length; i++) {
    if (inputA==arrs[i]){
        cntA++;
    }
} document.write("số lương số có trong mảng là :"+cntA)
