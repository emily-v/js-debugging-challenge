function readyFunction(){

	var items = document.getElementsByClassName("list-group-item");
	for(var i = 0; i<items.length;i++) {
		items[i].addEventListener("click",function(event) {

			for(var j = 0; j<event.target.childNodes.length;j++) {
				
				if(event.target.childNodes[j].tagName=='SPAN') { //childNodes is an array. must specify index
					var num = parseInt(event.target.childNodes[j].innerHTML);
					num--;
					if (num <= 0) {
						var elem = event.target;
						elem.parentNode.removeChild(elem);
						num = '';
					} 
					if(event.target.childNodes[j].innerHTML!='') event.target.childNodes[j].innerHTML = num;
				}
			}
		});
	}
}