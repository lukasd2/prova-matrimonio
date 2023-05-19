var imm=new Array();
var times=[0, 170, 340, 510, 680, 850];

function slider(){
    var i;
    for(i=0;i<6;i++){
        setarray(i);
    }
    change();
}
function setarray(i){
    var j;
    imm[i]=(Math.random()*20).toFixed(0);
    for(j=0;j<6;j++)
        if((imm[j]==imm[i]) && (i!=j)){
            setarray(i);
            return;
        }
}
function change(){
    var i;
    for(i=0;i<6;i++){
        setTimeout(function(){document.getElementById("img"+i).src="img/matrimonio"+imm[i]+".jpg";}, 300);
    }
    setTimeout(function(){slider();}, 1000);
}