function popup(url){	
	window.open(url,'window','directories=no,width=550,height=450,hotkeys=no,location=no,menubar=no,personalbar=no,resizable=no,scrollbars=no,status=no,toolbar=no,left=350,top=100')
}
function popup1(url){	
	alert(url);
	window.open(url,'window','directories=no,width=550,height=450,hotkeys=no,location=no,menubar=no,personalbar=no,resizable=no,scrollbars=no,status=no,toolbar=no,left=350,top=100')
}
function ocultar(id){
	document.getElementById(id).style.display="none";
}
function mostrar(id){
	document.getElementById(id).style.display="block";
}

function get_scroll( ){
	return window.pageYOffset || document.documentElement.scrollTop
}
var fx;
var subir = document.getElementById('subir');
subir.onclick = function( ){
	clearInterval(fx);
	fx = setInterval( function(){
		var pos = get_scroll( ) ;
			pos = pos - 30;
			window.scrollTo( 0, pos );
			if( pos <= 0 ){
				clearInterval(fx);
			}
		}, 40 )
	return false;
}
window.addEventListener("scroll", function(){
    if (this.pageYOffset > 200){
        document.querySelector(".subir").style.display = "block";
    }
    else{
        document.querySelector(".subir").style.display = "none";
    }
}, false);