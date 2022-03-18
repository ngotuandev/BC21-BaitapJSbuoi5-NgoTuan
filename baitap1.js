document.getElementById("bai-tap-1").addEventListener("click",function(){
    var s=0;
    var count=0;
    for (var i=0;s<10000;i++){
        s+=i;
        count=i
    }
    document.getElementById("ket-qua-bai-1").innerHTML=`<div>Kết quả là: ${count} </div>`
})