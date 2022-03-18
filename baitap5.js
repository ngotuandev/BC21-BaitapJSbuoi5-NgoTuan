function isPrime(n) 
{
    if (n<=1) return false;
    for (var i = 2; i <= n-1; i++)
        if (n % i == 0) return false;
    return 1;
}
document.getElementById("bai-tap-5").addEventListener("click",function(){
    var nguyenToValue=document.getElementById("so-nguyen-to").value*1;
    var kiemTraSoNguyenTo=0;
    var soNguyenTo="";
    for (var number=0;number<nguyenToValue;number++){
        
        kiemTraSoNguyenTo=isPrime(number);
        if (kiemTraSoNguyenTo==1){
            soNguyenTo+=number + " ";
        } else{
            soNguyenTo+="";
        }
    }

    document.getElementById("ket-qua-bai-5").innerHTML=`<div>Kết quả là: ${soNguyenTo}</div>`
})