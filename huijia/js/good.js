		$(function(){
			var myElement=document.getElementById('myCarousel');
			var hm=new Hammer(myElement);
			hm.on("swipeleft",function(){
			$('#myCarousel').carousel('next');
			})
			hm.on("swiperight",function(){
			$('#myCarousel').carousel('prev');
			})
			document.getElementsByTagName('html')[0].style.fontSize = window.innerWidth*20/375 + 'px';
				window.onresize = function() {
				document.getElementsByTagName('html')[0].style.fontSize = window.innerWidth*20/375 + 'px';
			}	
			console.log('ok')
		});