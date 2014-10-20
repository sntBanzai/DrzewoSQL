/**
 * @author X870
 */
var pac = {
	SQL: ['<div class="parent"><span class="SQL"><h1 class="SQL">SQL</h1><p class="SQL">Structured Query Language</p></span></div>','<div class="child"><span class="DQL"><h2 class="DQL">DQL</h2><p class="DQL">Data Query Language</p></span></div>',
		  '<div class="child"><span class="DDL"><h2 class="DDL">DDL</h2><p class="DDL">Data Definition Language</p></span></div>',
		  '<div class="child"><span class="DML"><h2 class="DML">DML</h2><p class="DML">Data Manipulation Language</p></span></div>','<div class="child"><span class="DCL"><h2 class="DCL">DCL</h2><p class="DCL">Data Control Language</p></span></div>'],
	DQL: ['<div class="parent"><span class="DQL"><h1 class="DQL">DQL</h1><p class="DQL">Data Query Language</p></span><button class="SQL">Wróć</button></div>','<div class="child"><span class="SELECT"><h2 class="SELECT">SELECT...FROM</h2></span></div>'],
	DDL: ['<div class="parent"><span class="DDL"><h1 class="DDL">DDL</h1><p class="DDL">Data Definition Language</p></span><button class="SQL">Wróć</button></div>','<div class="child"><span class="CREATE"><h2 class="CREATE">CREATE</h2></span></div>','<div class="child"><span class="DROP"><h2 class="DROP">DROP</h2></span></div>',
		  '<div class="child"><span class="ALTER"><h2 class="ALTER">ALTER</h2></span></div>'],
	DML: ['<div class="parent"><span class="DML"><h1 class="DML">DML</h1><p class="DML">Data Manipulation Language</p></span><button class="SQL">Wróć</button></div>','<div class="child"><span class="INSERT"><h2 class="INSERT">INSERT...INTO...<br>VALUES</h2><p class="INSERT">Alternatywnie SELECT zamiast VALUES</p></span></div>',
		  '<div class="child"><span class="DELETE"><h2 class="DELETE">DELETE...FROM</h2></span></div>','<div class="child"><span class="MERGE"><h2 class="MERGE">MERGE</h2></span></div>','<div class="child" id="fixed"><span class="UPDATE""><h2 class="UPDATE">UPDATE...SET</h2><p class="UPDATE">Opcjonalnie SELECT po UPDATE</p></span></div>'],
	DCL: ['<div class="parent"><span class="DCL"><h1 class="DCL">DCL</h1><p class="DCL">Data Control Language</p></span><button class="SQL">Wróć</button></div>','<div class="child"><span class="COMMIT"><h2 class="COMMIT">COMMIT</h2></span></div>','<div class="child"><span class="ROLLBACK"><h2 class="ROLLBACK">ROLLBACK</h2></span></div>',
		  '<div class="child"><span class="SAVEPOINT"><h2 class="SAVEPOINT">SAVEPOINT</h2></span></div>','<div class="child"><span class="GRANT"><h2 class="GRANT">GRANT</h2></span></div>','<div class="child"><span class="REVOKE"><h2 class="REVOKE">REVOKE</h2></span></div>',
		  '<div class="child"><span class="ROLE"><h2 class="ROLE">...ROLE</h2></span></div>']	  
};

function bind(e){
	'use strict';
	if (typeof e == 'undefined') e = window.event;
	console.log(e);
	var t = e.target||e.srcElement;
	var to_create = "";
	for(var i=0; i<t.attributes.length; i++){
		if(t.attributes[i].name == 'class'){
				console.log(t.attributes[i].value);
				to_create = t.attributes[i].value;	
		}
	}
	clear();
	main(to_create);
	console.log('Koniec cyklu');
}

function clear(){
	'use strict';
	var to_delete = document.getElementsByTagName('body');
	console.log('Do skasowania');
	console.log(to_delete);
	to_delete[0].parentNode.removeChild(to_delete[0]);
}

function main(id) {
	'use strict';
	var html = document.getElementsByTagName('html')[0];
	var new_body = document.createElement('body');
	html.appendChild(new_body);
	for(var i=0; i<pac[id].length;i++){
		document.body.innerHTML += pac[id][i];
		console.log(pac[id][i]);
		}
	var to_attachEv = document.getElementsByClassName('child');
	console.log('Do podłączenia słuchacza');
	console.log(to_attachEv);
	for(var i= 0; i<to_attachEv.length; i++){
		U.addEvent(to_attachEv[i], 'click', bind);
	}
	var to_att_back_button = document.getElementsByTagName('button');
	if(to_att_back_button){
		U.addEvent(to_att_back_button[0], 'click', bind);
	}
}

window.onload = function () {
	'use strict';
	var initialAtt = document.getElementsByTagName('div')[0];
	U.addEvent(initialAtt, 'click', bind);
	};
