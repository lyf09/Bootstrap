# Bootsrap的安装
## 什么是Bootstrap
jQuery是一个用来提高JavaScript编写效率的工具库。而Bootstrap是通过一系列的预设的class，为我们提供一套预定义的样式。网页中通用的一些常用组件，在Bootstrap中有所定义。Bootstrap中为我们提供了一些JavaScript组件，用于实现一些网页特效。

## 创建项目工程
![屏幕快照 2017-06-28 下午7.45.28](/Users/ZhuJiaCong/Desktop/屏幕快照 2017-06-28 下午7.45.28.png)


首先创建工程项目结构，css,js,img,fonts用于存放代码和资源文件，lib文件夹用于存放各种外部库文件。一般来说我们对于lib文件夹中的代码文件只做更新版本，不做修改操作。index.html文件为网站的首页文件，在其中创建我们的HTML代码。

## 套用文档中的Bootstrap模板
从中文文档中，获取到一个Bootstrap项目的基本模板，然后逐一分析其中代码的作用。

```html
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <!-- 字符编码模式 -->
    <meta charset="utf-8">
    <!-- IE浏览器的适配 保证在IE中能够正常使用Bootstrap -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- 视口 用于在不同的屏幕大小的设备中进行适配 -->
    <!-- 视口宽度设置为设备宽度 -->
    <!-- 网页初始缩放倍数设置为1倍 -->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- 上述3个meta标签*必须*放在最前面，任何其他内容都*必须*跟随其后！ -->
    <title>我自己的微金所</title>

    <!-- Bootstrap 的默认样式CSS文件 -->
    <link href="lib/bootstrap/css/bootstrap.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="css/main.css">

    <!-- 在IE9版本以下的浏览器中，引入两个文件，对HTML5和响应式布局进行适配 -->
    <!--[if lt IE 9]>
      <script src="https://cdn.bootcss.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://cdn.bootcss.com/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
  <body>

    <h1>你好，世界！</h1>
    <!-- Bootstrap的JavaScript组件是基于jQuery实现的 -->
    <!-- 导入jQuery文件 -->
    <script src="lib/jQuery/jquery-3.2.1.min.js"></script>
    <!-- Bootstrap的JavaScript组件 -->
    <script src="lib/bootstrap/js/bootstrap.js"></script>
  </body>
</html>
```


# Bootstrap常用类
## Contianer
Contianer意为容器，我们的网页中所有的内容都是在一个有限定宽度切水平居中于页面中的容器中。这样能够保证网页中的内容在不同的屏幕宽度下都能正常显示。Bootstrap为我们提供了container类用于实现这一效果。通过CSS3中的媒体查询新特性我们可以对不同的屏幕宽度定义不同的container宽度，实现页面宽度自适应的效果。

```css
.container {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
@media (min-width: 768px) {
  .container {
    width: 750px;
  }
}
@media (min-width: 992px) {
  .container {
    width: 970px;
  }
}
@media (min-width: 1200px) {
  .container {
    width: 1170px;
  }
}
```

## 屏幕大小界定
Bootstrap中，将不同的屏幕大小区分为四个档次。每个档次都有自己的前缀名，这个前缀名在栅格系统和响应式工具中可以使用。

| 0~767px | 768px~991px | 992px~1199px | 1200px以上 |
| --- | --- | --- | --- |
| 手机屏幕 | 平板电脑 | 桌面电脑屏幕 | 高分辨率桌面屏幕 |
| xs | sm | md | lg |

## 栅格系统
Bootstrap将整个容器宽度等分为12列，在同一行中我们可以使用`col-`起始的类名来对每一个区块进行宽度的设定。划分完毕后的区块会在当前行中自动调配自身宽度，并且能够根据不同的屏幕宽度进行响应式的布局。类名的格式为`col-前缀名-列数`，比如在平板电脑屏幕中占据三列的元素可以写作为`col-sm-3`。用栅格系统可以很方便的对容器进行各种等分操作，配合contianer类进行使用可以完成页面主体内容的布局。

```html
  <section class="topbar">
      <div class="container">
        <div class="col-md-2">手机微金所</div>
        <div class="col-md-5">4006-89-4006 (服务时间: 9:00-21:00)</div>
        <div class="col-md-2">常见问题 财富登录</div>
        <div class="col-md-3">免费注册 登录</div>
      </div>
    </section>
```

## 响应式工具类
在响应式工具类中，我们可以很方便在使用`visible-`和`hidden-`来设置某元素在特定的屏幕尺寸下的显示状态。`visible-前缀名`可以在特定的屏幕下才显示某一元素，而`hidden-前缀名`可以使某个元素在特定的屏幕下隐藏。例如本次案例中的TopBar，我们希望他在xs和sm屏幕下能够自动隐藏，则可以为其添加响应式工具类。

```html
<section class="topbar hidden-xs hidden-sm bottom-border">
```

# 字体图标的使用
## 字体类型的注册
在网页中有很多的小图标，我们不希望拿图片去实现这些图标，因为图片会占据很大的储存空间。所以我们可以使用字体图标的形式来进行解决。字体图标是将图标文件通过特定的手段压缩成一个字体文件，然后注册成一些在原本系统中并不占据实际字符的字符空间。在CSS中我们可以使用`@font-face`来注册一种字体，然后再字体图标中进行使用。

```css
/*字体图标*/
/*定义一种字体类型*/
@font-face {
	/*字体名称*/
  	font-family: 'weijinsuoIcon';
  	/*多种字体文件类型,按照 eot,svg,ttf,woff的顺序来加载*/
  	src: url('../fonts/MiFie-Web-Font.eot') format('embedded-opentype'), url('../fonts/MiFie-Web-Font.svg') format('svg'), url('../fonts/MiFie-Web-Font.ttf') format('truetype'), url('../fonts/MiFie-Web-Font.woff') format('woff');
}

/*图标类都以 icon-开头,使用属性选择器来设置字体类型*/
[class^="icon-"],
[class*=" icon-"] {
  /*字体设定*/
  font-family: weijinsuoIcon;
  font-style: normal;
  display: inline-block;
}

/*字体图标类*/
.icon-mobilephone::before {
  content: '\e908';
  font-size: 13px;
}

.icon-telephone::before {
  content: '\e909';
  font-size: 13px;
}
```
## 使用字体图标
完成字体图标的设定后，我们可以直接在HTML中使用这个类进行字体图标的创建。直接使用一些类似于`i`,`s`,`u`这样的弃用类进行字体图标的引用。这样就能直接将一个图标以文字的形式添加到网页中去。

```html
<i class="icon-mobilephone"></i>
```

## Bootstrap的默认字体图标
在Bootstrap的组件中，整合了Glyphicons 字体图标。我们可以直接使用这个字体图标中的类来进行字体图标的引用。例如使用`glyphicon glyphicon-chevron-down`类能够实现一个下拉箭头的图标。还有更多的图标样式可以直接查找Bootstrap文本中的[组件](http://v3.bootcss.com/components/)页面。


# Bootstrap组件使用
## Bootstrap的导航条

```html
<!-- nav 导航栏标签 -->
 <nav class="navbar navbar-default navbar-static-top">
    <div class="container">
        <!-- 导航条的头部区域 -->
        <div class="navbar-header">
          <!-- 小屏幕下用于切换导航栏隐藏显示的按钮 -->
          <!-- data-toggle="collapse"表示这是一个切换按钮 -->
          <!-- data-target=" #bs-example-navbar-collapse-1"表示切换显示的目标DI -->
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target=" #bs-example-navbar-collapse-1" aria-expanded="false">
            <!-- sr-only = screen read only  盲人屏幕阅读器中识别的内容屏幕-->
            <span class="sr-only ">菜单显示切换</span>
            <!-- 三个小横条 -->
            <span class="icon-bar "></span>
            <span class="icon-bar "></span>
            <span class="icon-bar "></span>
          </button>
          <!-- navbar-brand 商标区域，导航条最左边的用于放置网站logo的区域-->
          <a href="# " class="navbar-brand ">
            <!-- 使用图标字体来制作logo -->
            <i class="ico-logo "></i>
            <i class="ico-weijinsuo "></i>
          </a>
        </div>
        <!-- 使用collapse对需要显示和隐藏的ul进行包裹 -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <!-- 导航项列表 -->  
          <ul class="nav navbar-nav ">
            <li class="active "><a href="# ">我要投资</a></li>
            <li><a href="# ">我要借款</a></li>
            <li><a href="# ">平台介绍</a></li>
            <li><a href="# ">新手专区</a></li>
            <li><a href="# ">最新动态</a></li>
            <li><a href="# ">微论坛</a></li>
          </ul>
          <!-- navbar-right 表示悬浮于导航条的右边 -->
          <ul class="nav navbar-nav navbar-right hidden-sm ">
            <li><a href="# ">个人中心</a></li>
          </ul>
        </div>
    </div>
</nav>

```
## 轮播图的使用

```html
<!-- 轮播图控件 -->
<div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
    <!-- indicators 翻页小白点 -->
    <!-- data-slide-to="0" 表示对应的页码 -->
    <ol class="carousel-indicators">
        <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
        <li data-target="#carousel-example-generic" data-slide-to="1"></li>
        <li data-target="#carousel-example-generic" data-slide-to="2"></li>
    </ol>

    <!-- inner 轮播的内容列表 -->
    <div class="carousel-inner" role="listbox">
        <!-- 一个item就是一页里面有两部分组成 -->
        <!-- active表示默认显示的页面 -->
        <div class="item active">
            <!-- img 显示的图片 -->
            <img src="images/slide_01_2000x410.jpg" alt="...">
            <!-- caption 下方显示的文字 -->
            <div class="carousel-caption">
                第一个广告的文字内容
            </div>
        </div>
        
        <!-- 第二个itam -->
        <div class="item">
            <img src="images/slide_02_2000x410.jpg" alt="...">
            <div class="carousel-caption">
                第二个广告的文字内容
            </div>
        </div>
    </div>
    <!-- Controls 控制器部分 左右箭头 -->
    <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
    </a>
</div>
```


    

