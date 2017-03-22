		window.onload=function(){
			u();
			q();
			z();
		};

		function u(){
		var img1 =document.getElementById('img1');
		img1.addEventListener('mouseup', function(event){
		document.getElementById('img1').src="e11.jpg";
		console.log('up');
		},false);
		img1.addEventListener('mousedown', function(event){
		document.getElementById('img1').src="e21.jpg";
		console.log('down');
		},false);};

		function q(){
		var img2 =document.getElementById('img2');
		img2.addEventListener('mouseup', function(event){
		document.getElementById('img2').src="e12.jpg";
		},false);
		var img2 =document.getElementById('img2');
		img2.addEventListener('mousedown', function(event){
		document.getElementById('img2').src="e22.jpg";
		},false);};

		function z(){
		var img3 =document.getElementById('img3');
		img3.addEventListener('mouseup', function(event){
		document.getElementById('img3').src="e13.jpg";
		},false);
		var img3 =document.getElementById('img3');
		img3.addEventListener('mousedown', function(event){
		document.getElementById('img3').src="e23.jpg";
		},false);};