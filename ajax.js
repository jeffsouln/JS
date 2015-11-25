
window.onload = function(e){
	var XHR = new XMLHttpRequest();
	document.getElementById('btn').onclick = function(){
		XHR.open('GET','neki.xml');
		XHR.send();
		XHR.onreadystatechange = function(){
			if ((XHR.readyState === 4) && (XHR.status === 200)) {
				var from = XHR.responseXML.getElementsByTagName('from')[0]
				console.log(from.childNodes[0]);

			};
		}
	};

	window.setInterval(function(){
		XHR.open('GET','neki.json');
		XHR.send();
		XHR.onreadystatechange = function(){
			if ((XHR.readyState === 4) && (XHR.status === 200)) {
				var obj = JSON.parse(XHR.responseText);
				document.getElementById('ime').innerHTML = obj.employees[1].firstName;
			};
		}
	},10000);
}
