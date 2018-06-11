function readyFunction(){
	var data = [
		{
			text: 'Overshadowing #UNGA is the big question: Will Obama and Rouhani meet?',
			href: 'https://twitter.com/cnnbrk/status/382528782738800641'
		},
		{
			text: "Marine's family hopes visiting Iranian president will help free their son",
			href: 'https://twitter.com/cnnbrk/status/382519683053649920'
		},
		{
			text: 'Obama addresses United Nations.',
			href: 'https://twitter.com/cnnbrk/status/382507500903202817'
		},
		{
			text: '',
			href: 'https://twitter.com/CNNMoney/status/382497891723804672'
		},
		{
			text: "If you're seeing this as a button, congratulations!",
			href: 'http://twitter.com'
		}
	];
	for (var i = 0; i<data.length; i++) {
		//if (data.text) { //what should this be compared to?
		var btn = document.createElement('BUTTON');
		var a = document.createElement('A');
		var btnText = document.createTextNode(data[i].text);
		btn.appendChild(btnText);
		document.getElementById('news').appendChild(btn);
		//var newDiv = document.getElementById("news");
		//var btnContent = document.createTextNode("<p><button type='button' class='btn btn-default' datahref='"+data[i].href+"><span class='glyphicon glyphicon-star'></span> "+data[i].text+"</button></p>");
		//newDiv = newDiv + "<p><button type='button' class='btn btn-default' datahref='"+data.href+"><span class='glyphicon glyphicon-star'></span> "+data.text+"</button></p>";
		//newDiv.appendChild(btnContent);
		
	
	

	var btnsArray = document.getElementsByTagName("button");
	for(var j = 0; j<btnsArray.length;j++){
		var btns = btnsArray[j];
		var a = document.createElement('A');
		btns.appendChild(a);
		//btns.href = "https://getbootstrap.com/";
		//var a = document.createElement('A');
		//a.setAttribute() = ('href', data[i].href);
		//btnsArray[j].addEventListener("click",function(event){
			//if (!target.datahref) { //what should this be compared to?
				//document.location = target.datahref;
		//});
	}
	}
}