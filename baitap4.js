document.getElementById("bai-tap-4").addEventListener("click",function(){
    var contentDiv="";
    for (var i=1;i<=10;i++){
        if (i%2==0){
            contentDiv+=`<div class="bg-danger">Đỏ</div>`;
        } else {
            contentDiv+=`<div class="bg-primary">Xanh</div>`;
        }
    }
    document.getElementById("ket-qua-bai-4").innerHTML=contentDiv;
})