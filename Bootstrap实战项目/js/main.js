$(function () {
	

	//var imageArray = ['img/slide_01_2000x410.jpg','img/slide_02_2000x410.jpg','img/slide_03_2000x410.jpg','img/slide_04_2000x410.jpg'];


	//获取轮播图的item标签
	var itemArray = $('.banner .carousel-inner .item');
	// console.log(itemArray);
	//遍历所有的轮播图
	for (var i = itemArray.length - 1; i >= 0; i--) {
		var item = itemArray[i];
		//设置标签的background-image
		var $item = $(item);

		//获取data数据
		var data = $item.data();
		// console.log(data.image);
		//获取图片链接
		var imageURL = "url('"+data.image+"')";
		$item.css("background-image", imageURL);
	}


	
});