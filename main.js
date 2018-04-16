var ourreq = new XMLHttpRequest();
ourreq.open('GET','https://github.com/tapos-Sarker/jasontry/blob/master/datas.json')
ourreq.onload = function(){
	 console.log(ourreq.responseText);
};
ourreq.send();