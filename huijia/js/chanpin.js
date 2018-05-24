		document.getElementsByTagName('html')[0].style.fontSize = window.innerWidth*20/375 + 'px';
		window.onresize = function() {
			console.log(window.innerWidth);
			document.getElementsByTagName('html')[0].style.fontSize = window.innerWidth*20/375 + 'px';
		}