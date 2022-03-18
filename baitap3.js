document.getElementById("bai-tap-3").addEventListener("click",function(){
    var n=document.getElementById("giai-thua-n").value*1;
    var ketQua=1;
    if (n==0){
        ketQua=1;
    };
    for (var i=1;i<=n;i++){
        ketQua*=i;
    }
    document.getElementById("ket-qua-bai-3").innerHTML=`<div> Kết quả là: ${ketQua} </div>`
})