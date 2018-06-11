function readyFunction(){

	var items = document.getElementsByClassName("list-group-item");
	
	for(var i = 0; i<items.length;i++) {
		items[i].addEventListener("click",function(event) {

			for(var j = 0; j<event.target.childNodes.length;j++) {
				if(event.target.childNodes.tagName=='SPAN') {
					var num = parseInt(event.target.childNodes[j].innerHTML, 10);
					num--;
				} //close 1st if statement
					if (num <= 0) {
						num = '';
					} //close 2nd if statement
					else if(event.target.childNodes[j].innerHTML!='') {
						event.target.childNodes[j].innerHTML = num;	
				} //close 3rd if statement
			
		} //close 2nd for loop
	});//close listener function
} //close 1st for loop
} //close readyFunction
