function Tacka(a,b){
	this._a = a;
	this._b = b;
	
	this.render = function(x,y){
		this._x = x;
		this._y = y;
		this._element = document.createElement('div');
		this._element.style.cssText = 'position:absolute;height:10px;width:10px;background-color:red';
		this._element.style.left = this._x + 'px';
		this._element.style.top = this._y + 'px';
		document.body.appendChild(this._element);
	}
}

	var t = new Tacka(10,10);
window.onmousedown = function(e){
	window.onmousemove = function(e){
	t.render(event.clientX,event.clientY);
	}
};

window.onmouseup = function(e){
	window.onmousemove = function(e){
	}
};


