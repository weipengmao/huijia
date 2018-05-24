
		$(function(){
			var myElement=document.getElementById('myCarousel');
			var hm=new Hammer(myElement);
			hm.on("swipeleft",function(){
			$('#myCarousel').carousel('next');
			})
			hm.on("swiperight",function(){
			$('#myCarousel').carousel('prev');
			})

			var item = document.querySelector('.dingwei1')
			// 监听委托事件方法
			// item.addEventListener('click', function(e){
			// 	target = e.target;
			// 	console.log(target)
			// })
			
			// 委托事件方法
			var dataIndex = 0
			var info = document.querySelectorAll('.info')
			var infoA = $('.info a')
			var liStyle = $('.dingwei1 li')
			liStyle.css('line-height','2rem')
			infoA.css({
				'float':'left',
			}).attr('href','price.html')
			item.onclick = function(e){
				target = e.target
				var index = target.dataset.index
				liStyle[dataIndex].classList.remove('liActive')
				liStyle[index].classList.add('liActive')
				info[dataIndex].classList.remove('active')
				info[dataIndex].classList.add('clearActive')
				info[index].classList.add('active')
				info[index].classList.remove('clearActive')
				dataIndex = index
			}
		});
