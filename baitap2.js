document.getElementById("bai-tap-2").addEventListener("click",function(){
    var x=document.getElementById("so-x").value*1;
    var n=document.getElementById("so-n").value*1;
    var S=0;
    if (x==0) return "";
    for (var i=0;i<=n;i++){
        S+=Math.pow(x,i);
    }
    document.getElementById("ket-qua-bai-2").innerHTML=`<div>Kết quả là: ${S} </div>`
    
})