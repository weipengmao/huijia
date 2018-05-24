	$(function(){
			var singlesum;
			var shanchu = 0;
			var shanchu1 = 0;
			var addsum = 0;
			var subsum = 0;
			var allsum = 0;
			var addsum1 = 0;
			var subsum1 = 0;
			var addsum2 = 0;
			var subsum2 = 0;
			var danxuansum = 0;
			var danxuansum1 = 0;
			firstprice();

			var e = 1;
			$("#add").click(function(){
				e++;
				document.getElementById('txt').value = e;
				changenum2();
				singleprice();
			})
			$("#sub").click(function(){
				e--;
				document.getElementById('txt').value = e;
				changenum3();
				singleprice();
			})

			var f = 1;
			$("#add1").click(function(){
				f++;
				document.getElementById('txt1').value = f;
				changenum4();
				singleprice();
			})
			$("#sub1").click(function(){
				f--;
				document.getElementById('txt1').value = f;
				changenum5();
				singleprice();
			})


			function changenum2(){
				console.log(addsum1)
					addsum1 = addsum1 + parseInt($("input[name = 'danxuan']")[0].value);
					singleprice()
			}
			function changenum3(){
					subsum1 =  subsum1 - parseInt($("input[name = 'danxuan']")[0].value);
					singleprice()
			}

			function changenum4(){
				console.log(addsum2)
					addsum2 = addsum2 + parseInt($("input[name = 'danxuan']")[0].value);
					singleprice()
			}
			function changenum5(){
					subsum2 =  subsum2 - parseInt($("input[name = 'danxuan']")[0].value);
					singleprice()
			}

			function firstprice(){
					danxuansum = parseInt($("input[name = 'danxuan']")[0].value)*$("input[name = 'danxuan']").length;
					singleprice();
			}

			function single(){
				$("#item").css({display: 'none',});
				shanchu = 0 - parseInt($("input[name = 'danxuan']")[0].value);
				addsum1 = 0;
				subsum1 = 0;
				singleprice();
			}

			function single1(){
				$("#item1").css({display: 'none',});
				shanchu1 = 0 - parseInt($("input[name = 'danxuan']")[0].value);
				addsum2 = 0;
				subsum2 = 0;
				singleprice();
			}

			function singleprice(){
					$("#zongjine").text(danxuansum + danxuansum1 + addsum1 + subsum1 + addsum2 + subsum2 + shanchu + shanchu1 );
			}
	})