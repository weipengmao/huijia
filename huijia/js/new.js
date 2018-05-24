$(function(){
	
		var container = document.querySelector('.container');
		var item = document.querySelector('.container .item');
		var img_box = document.querySelector('.container .img');
		var img =  document.querySelector('.container img');
		var title = document.querySelector('.container .title');
		var time = document.querySelector('.container .time');

		var xhr = new XMLHttpRequest();
		xhr.open('get','http://36kr.com/api//search/entity-search?page=1&per_page=40&keyword=%E5%AD%A6%E5%89%8D%E6%95%99%E8%82%B2&entity_type=post&_=1522333788029',false);
		xhr.send();
		var text = JSON.parse(xhr.responseText);
		var news = text.data.items;

		for (var i = 0; i < news.length; i++) {
			//新建元素
			var item = document.createElement('a');
				item.className = 'item';
				item.href = 'http://36kr.com/p/'+news[i].id+'.html'
			var img_box = document.createElement('div');
				img_box.className = 'img';
			//创建img标签
			var img = document.createElement('img');
				img.src = news[i].cover;
				img_box.appendChild(img);
			//创建p标签
			var title = document.createElement('p');
				title.className = 'title';
				title.innerHTML = news[i].title;

			var time = document.createElement('p');
				time.className = 'time';
				time.innerHTML = news[i].published_at;
			//a标签内插入元素
				item.appendChild(img_box);
				item.appendChild(title);
				item.appendChild(time);
			//容器内插入a标签
				container.appendChild(item);
		}	
})