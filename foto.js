var theater=0;
var theater2=0;
var currentimg=0;
var currentvid=0;
var imgn=20;
var vidn=5;
/*------- IMG -------------------*/
function change(id){
    currentimg=id;
    if(theater==0){
        theater=1;
        document.getElementById("theater1").style.display="inherit";
    }
    document.getElementById("view").src="img/matrimonio"+currentimg+".jpg";
}
function quit(){
    theater=0;
    document.getElementById("theater1").style.display="none";
}
function press(){    
    document.onkeydown = onKeyHandler;
}
function onKeyHandler(e) {
    var user;
	e = (!e) ? window.event : e;
    if(e.keyCode==37) back();
    if(e.keyCode==39) forth();
}
/*------- VID -------------------*/
function video(id){
    currentvid=id;
    var player=document.createElement('video');
    player.setAttribute('id', 'videoplayer');
    player.setAttribute('controls', '');
    var source=document.createElement('source');
    source.setAttribute('src', 'video/video'+currentvid+'.mp4');
    source.setAttribute('type', 'video/mp4');
    source.setAttribute('id', 'source');
    document.getElementById("theater2").appendChild(player);
    player.appendChild(source);
    if(theater2==0){
        theater2=1;
        document.getElementById("theater2").style.display="inherit";
    }
}
function quit2(){
    theater2=0;
    document.getElementById("theater2").style.display="none";
    document.getElementById("videoplayer").pause();
    var child=document.getElementById("videoplayer");
    document.getElementById("theater2").removeChild(child);
}
/*------- BOTH -------------------*/
function forth(){
    if(theater==1){
        if(currentimg==imgn) currentimg=-1;
        currentimg++;
        document.getElementById("view").src="img/matrimonio"+currentimg+".jpg";
    }
    else if(theater2==1){
        if(currentvid==vidn) currentvid=-1;
        currentvid++;
        var child=document.getElementById("videoplayer");
        document.getElementById("theater2").removeChild(child);
        video(currentvid);
    }
}
function back(){
    if(theater==1){
        if(currentimg==0) currentimg=imgn+1;
        currentimg--;
        document.getElementById("view").src="img/matrimonio"+currentimg+".jpg";
    }
    else if(theater2==1){
        if(currentvid==0) currentvid=vidn+1;
        currentvid--;
        var child=document.getElementById("videoplayer");
        document.getElementById("theater2").removeChild(child);
        video(currentvid);
    }
}