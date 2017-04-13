<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>商品详情</title>
    <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no" />
    <meta name="format-detection" content="telephone=no" />
	<script src="js/jquery-3.1.1.min.js"type="text/javascript"></script>
	<script src="js/lodash.min.js" type="text/javascript"></script>
    <script src="js/react.min.js"></script>
    <script src="js/react-dom.min.js"></script>
    <script src="js/lunbo.min.js"></script>
	<style media="screen">
	@media screen and (max-width:640px){
	  *{
		padding: 0;
		margin: 0;
	  }
	  body, ul, li{
		margin: 0;
		padding: 0;
		width: 100%;
		height: 100%;
	  }
	  body {
	   font-family:"Times New Roman", Times, serif;
	   position: relative;
	  }
	  input[type="submit"],input[type="reset"],input[type="button"],button {
		 -webkit-appearance: none;
	  }
	  p{
		padding: 0;
		margin: 0;
	  }
	  li{
		list-style: none;
		float: left;
	  }
	  a{
		text-decoration: none;
		color: #000;
	  }
	  .content{
		width: 100%;
		overflow: hidden;
		background-color: #fff;
		border-top: 1px solid #dadada;

	  }

	  .price{
		width: 100%;
		height: 29px;
	  }
	  .price-top{
		font-size: 15px;
		line-height: 15px;
		color: #f23030;
		padding-top: 42px;
		padding-left: 10px;
		font-weight: bold;
	  }
	  .price .price-top-1{
		width: 9px;
		height: 11px;
		margin-right: 3px;
		margin-top: 2px;
		float: left;
		display: block;
		background: url("images/product-detail-sprites-mjs.png") no-repeat 0 0;
		background-size: 100px 100px;
		background-position: -14px -17px;
	  }
	  .price .price-bottom{
		font-size: 11px;
		line-height: 11px;
		margin-top: 24px;
		color: #81838e;
		padding-left: 10px;
	  }
	  .content .content-middle{

		padding-left: 10px;

	  }
	  .content-middle-infor{
		height: auto;
		font-size: 0;
		padding-bottom: 15px;
		border-width: 0 0 1px 0;
		background-color: #fff;
		width: 96%;
    	margin: 0 auto;
		overflow: hidden;
	  }
	  .middle-1{
		font-size: 0;
		overflow: hidden;
		position: relative;
	  }
	  .middle-span1{
		line-height: 18px;
		margin-right: 8px;
		display: inline-block;
		line-height: 15px;
		font-size: 13px;
		color: #81838e;
		width: 26px;
		white-space: normal;
		height: auto;
		float: left;
	  }
	  .middle-name{
		line-height: 18px;
		margin-right: 8px;
		margin-left: 34px;
		font-size: 13px;
		color: #252525;
		line-height: 15px;
		padding-right: 15px;
	  }
	  .middle-2 .middle-2-0ne{
		margin-top: 13px;
		font-size: 0;
		overflow: hidden;
		position: relative;
	  }
	  .middle-2 .middle-2-0ne .middle-span3{
		line-height: 23px;
		float: left;
		display: inline-block;
		font-size: 13px;
		color: #81838e;
		width: 26px;
		white-space: normal;
		height: auto;
	  }
	  .middle-2 .middle-2-0ne .middle-span3-float1{
		  float: none;
		  width: 100%;
		  margin-bottom: 10px;
	  }
	  .middle-2 .middle-2-0ne .middle-color{
		width: 100%;
		height: auto;
		overflow: hidden;
		float: right;
		display: flex;
		flex-wrap:wrap;
		align-content:space-between;
		justify-content:flex-start;
	  }
	  .middle-2 .middle-2-0ne .middle-span3-float2{
		  float: none;
	  }

	  .middle-2 .middle-2-0ne .middle-color .middle-a1{
		display: inline-block;
		width: 22%;
		border: 1px solid #bfbfbf;
		color: #232326;
		height: 27px;
		border-radius: 4px;
		line-height: 27px;
		font-size: 13px;
		box-sizing: border-box;
		text-align: center;
		margin-right: 2.739726%;
		margin-bottom: 10px;
	  }
	  .middle-2 .middle-2-0ne .middle-color .on{
		border: 1px solid #f23030;
		color: #f23030;
	  }
	  .middle-2-0ne::after{
		visibility: hidden;
		display: block;
		font-size: 0;
		content: " ";
		clear: both;
		height: 0;
	  }
	  .middle-number-right{
		display: inline-block;
		height: 26px;
		border-radius: 5px;
		margin-left: 8px;
		float: left;
		line-height: 26px;
	  }
	  .middle-number-input1{
		font-size: 16px;
		vertical-align: middle;
		outline: none;
		color: inherit;
		font: inherit;
	  }
	  .middle-number-right .middle-a3{
		float: left;
		font-size: 15px;
		text-align: center;
		background: #fff;
		border: 1px solid #cbcbcb;
		color: #232326;
		display: block;
		height: 24px;
		line-height: 24px;
		width: 26px;
		overflow: hidden;
		text-indent: -200px;
		box-sizing: border-box;
		-webkit-border-radius: 2px 0 0 2px;
	  }
	  .middle-number-right .middle-a3 .middle-em{
		background: url("images/reduce3.png") no-repeat;
		background-size: 12px 12px;
		height: 12px;
		width: 12px;
		display: block;
		margin: 6px;
	  }
	  .middle-number-right .middle-a3 .middle-em.reduce{
		background: url("images/reduce.png") no-repeat;
		background-size: 12px 12px;
	  }
	  .middle-number-right .middle-a3 .push{
		background: url("images/product-detail-sprites-mjs.png") no-repeat;
		background-position: -32px -67px;
		background-size: 100px 100px;
		height: 12px;
		width: 12px;
		display: block;
		margin: 6px;
	  }
	  .middle-number-input2{
		float: left;
		font-size: 15px;
		text-align: center;
		color: #232326;
		border: solid #cbcbcb;
		border-width: 1px 0 1px 0;
		height: 24px;
		line-height: 24px;
		width: 34px;
		border-radius: 0;
		-webkit-appearance: none;
		box-sizing: border-box;
		vertical-align: middle;
		outline: none;
	  }
	  #box {
	   position:relative;
	   width:100%;
	   height:375px;
	   margin:0 auto;
	  }
	  #box .imgList{
	   position:relative;
	   width:100%;
	   height:375px;
	   overflow:hidden;
	  }
	  #box .imgList li{
	   position:absolute;
	   top:0;
	   left:0;
	   width:100%;
	   height:375px;
	  }
	  #box .countNum{
	   width: 75px;
	   height: 20px;
	   position:absolute;
	   right:0;
	   bottom:5px;
	  }
	  #box .countNum li{
	   width:20px;
	   height:20px;
	   float:left;
	   color:#fff;
	   border-radius:20px;
	   background:#f90;
	   text-align:center;
	   margin-right:5px;
	   cursor:pointer;
	   opacity:0.7;
	   filter:alpha(opacity=70);
	  }
	  #box .countNum li.current{
	   background:#f60;
	   font-weight:bold;
	   opacity:1;
	   filter:alpha(opacity=70);
	  }
	  .head{
		width: 100%;
		display: flex;
		border-bottom: 1px solid #bbbbbb;
	  }
	  .head p{
		display: inline-block;
		flex: 1;
		text-align: center;
		height: 44px;
		line-height: 44px;
		vertical-align: middle;
		font-weight: 400;
		color: #051b28;
	  }
	  .head p img{
		width: 20px;
		height: 20px;
		vertical-align: middle;
	  }
	  .head p span{
		display: block;
		width: 30px;
		height: 30px;
	  }
	  .middle{
		width: 100%;
	  }
	  .middle .top-img{
		/*width: 80%;*/
		margin: 0 auto;
	  }
	  .middle .top img{
		width: 100%;
		height: 100%;
		overflow: hidden;
	  }
	  .top-infor{
		width: 100%;
		height: 45px;
		margin: 0px;
		background: rgb(112,180,44);
		font-size: 0;
	  }

	  .top-infor p{
		display: inline-block;
		width: 25%;
		line-height: 45px;
		color: #fff;
		font-size: 16px;
		font-weight: bold;
		text-align: center;
		margin-right: 20px;
	  }
	  .top-infor p:nth-child(4n+2){
		text-align: left;
	  }
	  .top-infor .ad{
		font-size: 12px;
		font-weight: normal;
	  }
	  .middle .top-center{
		width: 96%;
		margin: 0 auto;
		font-size: 12px;
		line-height: 30px;
	  }
	  .middle .service{
		width: 96%;
		margin: 0 auto;
		font-size: 12px;
		line-height: 30px;
	  }
	  .middle .top-center p span{
		display: inline-block;
		font-size: 14px;
		line-height: 30px;
		color: #FF4400;
		width: 100%;
		white-space:wrap;
		font-size: 18px;
	  }
	  .middle .top-center p span:first-child{


	  }

	  .address{
		width: 96%;
		margin: 0 auto;
	  }
	  .address span{
		display: inline-block;
		font-size: 14px;
		line-height: 40px;
	  }
	  .address span:last-child{
		float: right;
	  }
	  .top-service{
		width: 100%;
		margin: 0 auto;
		font-size: 14px;
		line-height: 40px;
		background: #f5edf5;

	  }
	  .top-service p{
		width: 96%;
		margin: 0 auto;

		padding-bottom: 8px;
	  }
	  .top-service p:first-child{
		  border-bottom: 0.5px solid #bbbbbb;
	  }
	  .top-service p .span1{
		color: #E84E40;
		display: inline-block;padding: 0 10px;
	  }
	  .top-service .discount-coupon span{
		display: inline-block;
		width: 24%;
		text-align: center;
		color: transparent;
		height: 30px;
	  }
	  .top-service .discount-coupon .span2{
		color: #000;
		height: 30px;
		line-height: 30px;
		vertical-align: middle;
	  }
	  .top-service .discount-coupon .span3{
		background: url(images/i-11.png) no-repeat 0 0 ;
		background-size: contain;
		vertical-align: middle;
	  }
	  .top-service .discount-coupon .span4{
		background: url(images/i-12.png) no-repeat 0 0 ;
		background-size: contain;
		vertical-align: middle;
	  }
	  .top-service .discount-coupon .span5{
		background: url(images/i-13.png) no-repeat 0 0 ;
		background-size: contain;
		vertical-align: middle;
	  }
	  .top-service .discount-coupon span:first-child{
		text-align: left;
	  }
	  .top-kind{
		width: 96%;
		margin: 0 auto;
	  }
	  .top-kind .top-kind-top span{
		display: inline-block;
		width: 33%;
		line-height: 45px;
		font-size: 14px;
	  }
	  .top-kind .top-kind-top span:nth-child(3n+2){
		text-align: center;
	  }
	  .top-kind .top-kind-top span:last-child{
		text-align: right;
		float: right;
	  }
	  .top-kind-infor{
		font-size: 0;
	  }
	  .top-kind-infor .kind-title{
		display: inline-block;
		width: 20%;
		font-size: 14px;
		vertical-align: top;
		line-height: 30px;
		margin-top: 5px;
	  }
	  .top-kind-infor .kind-infor{
		display: inline-block;
		width: 80%;
		font-size: 14px;
	  }
	  .top-kind-infor .kind-infor span{
		display: inline-block;
		width: 20%;
		line-height: 30px;
		text-align: center;
		border: 1px solid #bbb;
		box-sizing: border-box;
		margin: 5px 5px;
		vertical-align: middle;
	  }
	  .expressage{
		width: 96%;
		margin: 0 auto;
		font-size: 14px;
		line-height: 45px;
	  }
	  .expressage p span{
		display: inline-block;
		vertical-align: middle;
	  }

	  .expressage p span:first-child{
		width: 60px;
	  }
	  .expressage p span:nth-child(5n+2){
		width: 45px;
	  }
	  .expressage p span:nth-child(5n+3){
		width: 75px;
	  }
	  .expressage p span:nth-child(5n+4){
		width: 100px;
	  }
	  .expressage p .dingwei{
		float: right;
	  }
	  .expressage p span img{
		width: 20px;
		height: 20px;
		vertical-align: middle;
	  }

	  .combo-infor{
		width: 96%;
		margin: 0 auto;
		font-size: 0;
	  }
	  .combo-infor span{
		display: inline-block;
		font-size: 14px;
		vertical-align: middle;
		line-height: 45px;
	  }
	  .combo-infor span img{
		vertical-align: middle;
	  }
	  .combo-infor span:first-child{
		width: 16.666667%;
	  }
	  .combo-infor span:nth-child(3n+2){
		width: 43.3333333%;
	  }
	  .combo-infor span:last-child{
		width: 40%;
		text-align: right;
	  }
	  .evaluate{
		width: 96%;
		margin: 0 auto;
	  }
	  .evaluate .evaluate-top img{
		vertical-align: middle;
	  }
	  .evaluate .evaluate-top{
		width: 100%;
		font-size:0;

	  }
	  .evaluate .evaluate-top span{
		display: inline-block;
		font-size: 14px;
		height: 45px;
		line-height: 45px;
	  }
	  .evaluate .evaluate-top span:first-child{
		width: 65.277778%;
	  }
	  .evaluate .evaluate-top span:last-child{
		font-size: 14px;
		width:34.722222% ;
		text-align: right;
	  }
	  .evaluate .evaluate-bottom span{
		display: inline-block;
		background: #63B8FF;
		border-radius: 2px;
		line-height: 15px;
		margin: 10px 5px;
		font-size: 14px;
		padding: 2px 4px;
		color: #fff;
		border-radius: 4px;
	  }
	  .evaluate .evaluate-bottom  img{
		width: 20.833333%;
		margin: 0 2.0833333%;
	  }
	  .evaluate-middle{
		text-indent: 10px;
		font-size: 12px;
		color: #575657;
		margin-bottom: 10px;
	  }
	  .all{
		width: 100%;
		margin: 0 auto;
		text-align: center;
		height: 35px;
		line-height: 35px;
		color: #575657;
		font-size: 12px;
		border-top: 1px solid #F0F0F0;
	  }
	  .warp{
		border-bottom: 1px solid #F0F0F0;
	  }
	  .hot{
		width: 100%;
		margin: 0 auto;
	  }
	  .hot .hot-title{
		text-align: center;
		border-bottom: 1px solid #F0F0F0;
	  }
	  .hot .hot-title span{
		display: inline-block;
		font-size: 12px;
		height: 22px;
		padding: 0 10px;
	  }
	  .hot .hot-title a:first-child{
		color: #e51c23;
	  }
	  .hot-img-warp{
		display: flex;
		width: 96%;
		margin: 0 auto;
		flex-wrap:wrap;
      	justify-content:space-between;
	  }
	  .hot-img-warp li{
	    width: 33.3333333%;
		box-sizing: border-box;
	  }
	  .hot-img-warp li .hot-img-top{
		  width: 83.333333%;
		height: 100px;
		margin: 0 auto;
		background: #eee;

	  }
	  .hot  li .hot-img-top img{
		width: 100%;
		height: 100px;
	  }
	  .hot-img-warp li p{
		font-size: 12px;
		line-height: 25px;
		padding-left: 10px;
		height: 50px;
		overflow: hidden;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
	  }
	  .hot-img-warp li p:last-child{
		color: #ff5722;
	  }
	  .img-word{
		width: 96%;
		line-height: 45px;
		overflow: hidden;
		margin: 0 auto;
		display: flex;
	  }
	  .img-word span{
		display: block;
		flex: 1;
		text-align: center;
	  }
	  .img-word span:nth-child(3n+2){
		border-bottom: 2px solid #E84E40;
	  }
	  .img-word span:last-child{

	  }
	  .hot .images{
		text-align: center;
	  }
	  .hot .images span{
		display: inline-block;
		width: 96%;
		margin: 10px 0;

	  }
	  .hot .images span img{
		width: 100%;
	  }
	  .hot-img2{
		display: none;
	  }
	  .hot-img3{
		display: none;
	  }
	  .hot-span1-color{
		color: red;
	  }
	  /*底部导航*/
	  .footernav{
		width: 100%;
		height: 47px;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		background: #fff;
		border-top: 1px solid #eee;
		overflow: hidden;

	  }
	  .footernav li{
		text-align: center;
		float: left;
		height: 47px;
		position: relative;
	  }
	  .footernav li a{
		display: inline-block;
		width: 100%;
		height: 47px;
	  }
	  .footernav .footernavLi{
		width: 14.666%;
		padding-top: 5px;
	  }
	  .footernav .footernavLi1{
		width:28%;
		line-height: 47px;
	  }
	  .footernav .footernavLi2{
		background: #FF6600
	  }
	  .footernav .footernavLi3{
		background: #D81E06
	  }
	  .footernav .footernavLi1 a{
		color: #fff;
	  }
	  .footernav li p{
		font-size: 12px;
	  }
	  .footernav li img{
		width: 22px;
		height: 22px;
	  }
	  .footernav li .footernav-wordnum{
		display: inline-block;
		width: 16px;
		height: 16px;
		border-radius: 8px;
		text-align: center;
		line-height: 16px;
		background: #D81E06;
		color: #fff;
		font-size: 12px;
		position: absolute;
		top: 2px;
		left: 31px;
	  }
	  /*详情*/
	  .warp1{
		width: 100%;
		display: none;
	  }
	  .warp1 .nav{
		width: 96%;
		height: 47px;
		line-height: 47px;
		display: flex;
		margin: 0 auto;
	  }
	  .warp1 .nav span{
		display: inline-block;
		flex: 1;
		text-align: center;
	  }
		.warp1 .content{
		  width: 96%;
		  margin: 0  auto;
		  display: none;
		}
		.warp1 .content ul{
		  width: 100%;
		  font-size: 0;
		}
		.warp1 .content ul li{
		  border-bottom: 1px solid #E7E7E7;
		}
		.warp1 .content ul li p{
		  font-size: 14px;
		  padding: 10px 0
		}

		.warp1 .content ul li .p1{
		  display: inline-block;
		  width: 30%;
		  vertical-align: top;
		  color: #999;
		}
		.warp1 .content ul li .p2{
		  display: inline-block;
		  width: 70%;
		  font-size: 16px;
		  font-weight: 400;

	  }
	  .warp1 .content ul li .p3, .p4{
		  line-height: 30px;
	  }
	  .warp1 .none{
		  width: 100%;
		  height: 56px;
		  text-align: center;
		  color: #999;
		  line-height: 56px;
	  }
	  .content1{
            width: 94%;
            overflow: hidden;
            margin: 0  auto;
            display: none;
        }
	 	.content1 ul{
		  width: 100%;
		  font-size: 0;
		  overflow: hidden;
	  }
	  .content1 ul li{
		  font-size: 14px;
		  margin-bottom: 25px;
		  line-height: 24px;
		  color: #666;
	  }
	  .spancolor{
		  border-bottom: 2px solid red;
	  }
	  .spancolor1{
		  border-bottom: 2px solid #000;
	  }
	  .warp1 .content0{
		  width: 94%;
		  margin: 0  auto;
	  }
	 .warp1 .content0 img{
		  width: 100%;
	 }
	 /*全部评论*/
	 /*具体内容*/
	 .warp2{
	   width: 100%;
	   overflow: hidden;
	   display: none;
	 }
	 .warp2 .content-nav {
	   width: 92%;
	   margin: 0 auto;
	   border-bottom: 1px solid #eee;
	 }
	 .warp2 .content-nav span{
	   display: inline-block;
	   font-size: 12px;
	   color: #666;
	   background: #f5f5f5;
	   padding: 9px 15px;
	   border-radius: 20px;
	   margin: 15px 0;
	   margin-right: 15px;
	 }
	 .warp2 .content-nav .color{
	   background: #DD2727;
	   color: #fff;
	 }
	 .warp2 .content-infor{
	   width: 92%;
	   margin: 0 auto;
	   border-bottom: 1px solid #eee;
	 }
	 .warp2 .content-infor .p-name{
	   color: #252525;
	   font-size: 12px;
	   margin-top: 20px;

	 }
	 .warp2 .content-infor .p-kind{
	   color: #999;
	   font-size: 12px;
	   margin: 20px 0;

	 }
	 .warp2 .content-infor .p-infor{
	   color: #051b28;
	   font-size: 12px;
	   margin: 20px 0;
	   line-height: 22px;

	 }
	 .warp2 .content-infor .p-img{
	   margin: 10px 0 20px 0;
	 }
	 .warp2 .content-infor .p-img img{
	   width: 28.9855%;
	   height: 100px;
	 }
	 .warp2 .content-infor .p-img img:nth-child(3n+2){
	   margin: 0 6.52173913%;
	 }
	 .warp2 .content-infor .p-zhuijia{
	   color: #dd2727;
	   font-size: 12px;
	   margin: 20px 0;
	   line-height: 22px;
	 }
	 .warp2 .content-infor .p-zhuijia span{
	   color: #999;

	 }
	 .warp2 .content-infor .p-zhuijia-infor{
	   color: #051b28;
	   font-size: 12px;
	   margin: 20px 0;
	   line-height: 22px;
	 }

	 /*新样式*/
	 .head .head-lastp{
	   position: relative;
	 }
	 .head p .headernewsnum{
	   position: absolute;
	   top: 11px;
	   left: 37px;
	   background:#D81E06;
	   color: #fff;
	   width: 14px;
	   height: 14px;
	   line-height: 14px;
	   border-radius: 7px;
	   font-size: 12px;
	   font-weight: 400;
	   color: 000;
	   display: none;
	 }
	 /*点击立即购买弹出付款选择层*/
	 .buyNow{
	   width: 86%;
	   background: #fff;
	   position: fixed;
	   top: 175px;
	   left: 7%;
	   z-index: 99;
	   display: none;
	   border-radius: 4px;
	 }
	 .buyNow li{
	   width: 100%;
	   height: 47px;
	   border-bottom: 1px solid #eee;
	   display: flex;
	   margin-bottom: 10px;
	   margin-top: 10px;
	 }
	 .buyNow li span{
	   display: inline-block;
	   height: 47px;
	   font-size: 14px;
	 }
	 .buyNow li .buyNow-ul-li1 img{
	   width: 40px;
	   height: 35px;
	   margin-top: 6px;
	 }
	 .buyNow li .buyNow-ul-li1{
	   width: 12.5%;
	   padding-left: 10px;
	 }
	 .buyNow li .buyNow-ul-li2{
	   width: 75%;
	   padding-left: 10px;
	   line-height: 23px;
	 }
	 .buyNow li .buyNow-ul-li3{
	   width: 12.5%;
	   text-align: center;

	 }
	 .buyNow li .buyNow-ul-li3 img{
	   margin-top: 13.5px;
	 }
	 .tanchuceng{
	   width: 100%;
	   height: 100%;
	   position: fixed;
	   top: 0;
	   left: 0;
	   right: 0;
	   bottom: 0;
	   background: #000;
	   opacity: 0.5;
	   z-index: 9;
	   display: none;
	 }
	 #has_stock{
		 border: 1px dashed #666;
	 }
	 /*配送方式*/
	 .opacity{
	   width: 100%;
	   height: 150%;
	   background: #000;
	   opacity: 0.5;
	   position: absolute;
	   top: 0;
	   z-index: 9999;
	   display: none;
	 }
	 .partone{
	   width: 94%;
	   height:227px;
	   background: #fff;
	   position: fixed;
	   top: 175px;
	   left: 3%;
	   right: 3%;
	   border-top: 1px solid #eee;
	   z-index: 99999999;
	   display: none;

	 }
	 .partone p{
	   width: 100%;
	   margin: 0 auto;
	   line-height: 20px;
	   font-size: 16px;
	   color: #000;
	   overflow: hidden;
	   text-indent: 10px;
	   margin-top: 10px;
	 }
	 .partone .partone-p{
	   font-size: 12px;
	   color: #000;
	   margin-top: 10px;
	 }
	 .partone p span:last-child{
	   float: right;
	   margin-right: 27.5px;
	 }
	 .partone .close{
	   position: absolute;
	   bottom: 0;
	   left: 0;
	   right: 0;
	   width: 100%;
	   height: 36px;
	   line-height: 36px;
	   text-align: center;
	   color: #EF6900;
	   border-top: 1px solid #eee;
	   background: #fff;
	 }
	 .partone .close3{
	   width: 94%;
	   height: 36px;
	   line-height: 36px;
	   text-align: center;
	   color: #EF6900;
	   border-top: 1px solid #eee;
	   background: #fff;
	   position: fixed;
	   top: 366px;
	 }
	 .partone .close3 input{
	   padding: 2px 9px;
	   border: none;
	   border-radius: 2px;
	   color: #fff;
	 }
	 .partone .close3 input:first-child{
	   background: #EF6900;
	   margin-right: 100px;
	 }
	 .partone .close3 input:last-child{
	   background: #D81E06;
	   margin-left: 100px;
	 }
	 .product-number{
	   font-size: 14px;
	   margin-right: 10px;
	 }
	 .partone .partone3-p span:first-child{
	   display: inline-block;
	   width: 80%;
	   overflow: hidden;
	   text-indent: 0;
	 }
	 .partone .partone3-p span input{
	   vertical-align: middle;
	 }
	}
    </style>
  </head>
  <body>

    <div class="head">
		<p><img src="images/jiantou.png" alt=""></p>
        <p data-rolo="middle" class="head-p1 spancolor1">商品</p>
        <p data-rolo="warp1" class="head-p1">详情</p>
        <p data-rolo="content1" class="head-p1">包装售后</p>

        <p class="head-lastp"><img src="images/news.png" alt="" class="headernimg" />
			<a href="/messages">
	        	<span class="headernewsnum"></span>
			</a>
		</p>

    </div>
    <div class="middle">
      <div class="top">
        <div class="top-img" id="lunbo">

        </div>
        <div class="top-infor">
          <p class="price"><span>￥</span><span>{{product.product_sale_price}}</span></p>
          <p class="ad"><span>￥</span><span><s>{{product.product_marketing_price}}</s></span></p>
          <p class="ad"><span></span></p>
        </div>
      </div>
      <div class="top-center">
        <p><span>{{product.product_name}}</span> <span></span></p>
		<p>限时抢购：6/18 下架</p>
        <!-- <p>{{product.product_describe | safe}}</p> -->
      </div>

      <div class="address">
        <span>快递:免费</span><span>上海</span>
      </div>
      <div class="top-service click3">
        <p>优惠：<span class="span1">满99减100</span></p>
        <p class="discount-coupon"><span class="span2">领优惠券：</span><a><span class="span3">ss</span></a><a><span class="span4"></span></a><a><span class="span5"></span></a></p>
      </div>
      <div class="content">
		  <div class="price">

            <div class="price-bottom">
              <span>重量:</span>
              <span>{{product.weight}}kg</span>
            </div>
          </div>
	  </div>
	  <div class="content-middle">
          <div class="content-middle-infor">
            <div class="middle-1">


            </div>
            <div class="middle-2">
			{% for property in product.mp_stock.properties  %}
	              <div class="middle-2-0ne">
	                <span class="middle-span3 middle-span3-float1">{{property.name}}</span>
	                <p class="middle-color middle-span3-float2">
					{% for value in property.all_value %}
						<a class="middle-a1" {% if !product.mp_stock.stocks[value] %} id="has_stock" {% endif %}>{{value}}</a>
					{% endfor %}
					</p>
	              </div>
			{% endfor %}
              <div class="middle-2-0ne">
                <span class="middle-span3">数量</span>
                <div class="middle-number-right" style="float:right;">
                  <input type="hidden" name="" value="" class="middle-number-input1">
                  <a id="reduce" class="middle-a3"><em class="middle-em reduce">-</em></a>
                  <input type="tel" name="" value="1" class="middle-number-input2 ">
                  <a id="plus" class="middle-a3"><em class="middle-em push">+</em></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      <div class="line" style="width:100%;height:10px;background:#f5edf5"></div>
      <div class="combo">
        <p class="combo-infor">
          <span><img src="images/combo.png" alt=""></span>
          <span>可选用套餐</span>
          <span>套餐购买享优惠 <img src="images/jiantou-right2.png" alt=""> </span>
        </p>
      </div>
      <div class="line" style="width:100%;height:10px;background:#f5edf5"></div>
	  <div class="line" style="width:100%;height:10px;background:#f5edf5"></div>
      <div class="hot">
        <p class="hot-title"><span data-hot="hot-img1" class="hot-span1 hot-span1-color">热销产品</span>|<span data-hot="hot-img2" class="hot-span1">猜你喜欢</span>|<span data-hot="hot-img3" class="hot-span1">新品推荐</span></p>
        <div class="hot-img hot-img1">
		</div>
        <div class="hot-img hot-img2">
        </div>
        <div class="hot-img hot-img3">
        </div>
        <div class="line" style="width:100%;height:10px;background:#f5edf5"></div>
        <script src="http://apps.bdimg.com/libs/jquery/2.1.1/jquery.min.js"type="text/javascript"></script>
      </div>
    </div>
    <!-- 产品详情 -->
    <div class="warp1">
      <div class="nav">
        <span data-role="content0" class="navspan2 spancolor">图文详情</span>|
        <span data-role="content" class="navspan2">产品参数</span>
      </div>
      <div class="content0">
        <img src="images/tuwenjieshao.png" alt="">
      </div>
      <div class="content">
        <ul>
		{% for industry in industry_properties %}
          <li><p class="p1">{{ industry.name }}</p><p class="p2">{% if property[industry.name] %} {{ property[industry.name].value or '' }} {% endif %}</p></li>
		{% endfor %}
        </ul>
      </div>

      <div class="none">
        没有啦！！！
      </div>
    </div>
	<!-- 优惠券 -->
    <div class="partone partone2">
      <p>优惠券</p>
      <p class="partone-p"><span>满100减10元（1张）</span><span><input type="checkbox" name="" value=""></span></p>
      <p class="partone-p"><span>满100减10元（1张）</span><span><input type="checkbox" name="" value=""></span></p>
      <div class="close close2">
        关 闭
      </div>
    </div>
	<div class="opacity"></div>
	<div class="content1">
	  <ul>
		<li><p>包装清单：</p><p>猕猴桃x1(箱)</p></li>
		<li><p>售后服务：</p><p>本产品全国联保，享受三包服务，保质期为：无质保</p></li>
		<li><p>价格说明</p>
		  <p>1、售价：京东价为商品的销售价，是您最终决定是否购买商品的依据。</p>
		  <p>2、划线价：商品展示的划横线价格为参考价，该价格可能是品牌专柜标价、商品吊牌价或由品牌供应商提供的正品零售价
			（如厂商指导价、建议零售价等）或该商品在京东平台上曾经展示过的销售价；由于地区、时间的差异性和市场行情波动，
			品牌专柜标价、商品吊牌价等可能会与您购物时展示的不一致，该价格仅供您参考。</p>
		  <p>3、折扣：如无特殊说明，折扣指销售商在原价、或划线价（如品牌专柜标价、商品吊牌价、厂商指导价、厂商建议零售价）
			等某一价格基础上计算出的优惠比例或优惠金额；如有疑问，您可在购买前联系销售商进行咨询。</p>
		  <p>4、异常问题：商品促销信息以商品详情页“促销”栏中的信息为准；商品的具体售价以订单结算页价格为准；如您发现活动
			商品售价或促销信息有异常，建议购买前先联系销售商咨询。</p>
		  </li>
	  </ul>
	</div>
	<script id="hot-img1" type="text/template">
		<ul class="hot-img-warp">
		<% _.forEach(products, function(product) {  %>
			<li>
			  <a href="/product_show?product_id=<%- product.id %>">
				<div class="hot-img-top">
					<% if(product.img){ %>
					   <img src="images/<%- product.img.location %>" alt="">
				   <% }else{ %>
					   <img src="images/no_picture.png" alt="">
				   <% } %>
				</div>
				<p><%- product.product_name %></p>
				<p>￥<%- product.product_sale_price %></p>
			  </a>
			</li>
		<% }); %>
		</ul>
	</script>
	<script id="hot-img2" type="text/template">
		<ul class="hot-img-warp">
		<% _.forEach(products, function(product) {  %>
			<li>
			  <a href="/product_show?product_id=<%- product.id %>">
				<div class="hot-img-top">
					<% if(product.img){ %>
					   <img src="images/<%- product.img.location %>" alt="">
				   <% }else{ %>
					   <img src="images/no_picture.png" alt="">
				   <% } %>
				</div>
				<p><%- product.product_name %></p>
				<p>￥<%- product.product_sale_price %></p>
			  </a>
			</li>
		<% }); %>
		</ul>
	</script>
	<script id="hot-img3" type="text/template">
		<ul class="hot-img-warp">
		<% _.forEach(products, function(product) {  %>
			<li>
			  <a href="/product_show?product_id=<%- product.id %>">
				<div class="hot-img-top">
					<% if(product.img){ %>
					   <img src="images/<%- product.img.location %>" alt="">
				   <% }else{ %>
					   <img src="images/no_picture.png" alt="">
				   <% } %>
				</div>
				<p><%- product.product_name %></p>
				<p>￥<%- product.product_sale_price %></p>
			  </a>
			</li>
		<% }); %>
		</ul>
	</script>
    <script type="text/javascript">
      $(function(){
        $(".warp1 .nav span").click(function(){
          $(".warp1 .content0").hide();
          $(".warp1 .content").hide();
          var role=$(this).data("role");
          $("."+role).show();

          $(".warp1 .nav span").removeClass("spancolor");
          $(this).addClass("spancolor");
        });
      });
    </script>



    <div style="background:#fff;height:75px;width:100%"></div>
	<ul class="footernav">
		<li class="footernavLi"><a href="/"><p class="footernav_p1"><img src="images/shouye1.png" alt="" /></p><p class="footernav-word">首页</p></a></li>
        <li class="footernavLi favorite"><a><p class="footernav_p1"><img src="images/shoucang.png" alt="" /></p><p class="footernav-word">收藏</p></a></li>
        <li class="footernavLi"><a href="/cart_infos"><p class="footernav_p1"><img src="images/car.png" alt="" /></p><p class="footernav-word">购物车<span class="footernav-wordnum">99</span></p></a></li>
        <li class="footernavLi1 footernavLi2" id="shopping_cart"><a><p>加入购物车</p></a></li>
        <li class="footernavLi1 footernavLi3"><a><p id="buy_immediate">立即购买</p></a></li>

	</ul>

    <script type="text/javascript">
      $(function(){
        $(".head .head-p1").click(function(){
          $(".middle").hide();
          $(".warp1").hide();
          $(".content1").hide();
          var rolo=$(this).data("rolo");
          $("."+rolo).show();
          $(".head .head-p1").removeClass("spancolor1");
          $(this).addClass("spancolor1");
        })
      })
    </script>
	<script>
		$(function() {
			var hot_img2 = false,hot_img3 = false;
			var is_active;
			//推荐
			var get_recommend_products = function(){
				$.ajax({
					url: "/get_recommend_products",
					dataType: 'json',
					type: 'GET',
					success: function(data) {
						if (data.success) {
							var products = data.products;
							var t = _.template($("#hot-img1").html());
							$(".hot-img1").html(t({products:products}));
						}else {
							alert(data.message);
						}
					},
					error: function(xhr, status, err) {
					}
				});
			};

			//热销
			var get_hot_sale_products = function(){
				$.ajax({
					url: "/get_hot_sale_products",
					dataType: 'json',
					type: 'GET',
					success: function(data) {
						if (data.success) {
							hot_img2 = true;
							var products = data.products;
							var t = _.template($("#hot-img2").html());
							$(".hot-img2").html(t({products:products}));
						}else {
							alert(data.message);
						}
					},
					error: function(xhr, status, err) {
					}
				});
			};

			//新品
			var get_new_arrival_products = function(){
				$.ajax({
					url: "/get_new_arrival_products",
					dataType: 'json',
					type: 'GET',
					success: function(data) {
						if (data.success) {
							hot_img3 = true;
							var products = data.products;
							var t = _.template($("#hot-img3").html());
							$(".hot-img3").html(t({products:products}));
						}else {
							alert(data.message);
						}
					},
					error: function(xhr, status, err) {
					}
				});
			};

			//信息数量
			$.ajax({
				url: "/check_message_number",
				dataType: 'json',
				type: 'POST',
				success: function(data) {
					if (data.count == 0) {
						$(".headernewsnum").hide();
					}else {
						$(".headernewsnum").show();
						$(".headernewsnum").html(data.count);
					}
				},
				error: function(xhr, status, err) {
				}
			});
			//收藏
			$.ajax({
				url: "/find_favorite",
				dataType: 'json',
				type: 'GET',
				data:{"product_id":"{{product.id}}"},
				success: function(data) {
					if (data.success) {
						if (data.is_active == 1) {
							$(".favorite img").attr("src","images/shoucangjia.png");
							is_active = 1;
						}else {
							$(".favorite img").attr("src","images/shoucang.png");
							is_active = 0;
						}
					}
				},
				error: function(xhr, status, err) {
				}
			});
			var operation = "";
			//数量加减
			var change_num = function(num,operation){
				if (operation == "update") {
					num = parseInt(num);
				}else if (operation == "plus") {
					num = parseInt(num) + 1;
					$(".middle-number-input2").val(num);
				}else {
					if (num > 1) {
						num = num -1;

						$(".middle-number-input2").val(num);
					}
				}

				if (num > 1) {
					$("#reduce em").removeClass("reduce");
				} else {
					$("#reduce em").addClass("reduce");
				}
			};
			//购物车里商品数量显示
			var check_cart_number = function(){
				$.get("/check_cart_number",function(data){
					if (data.success) {
						if (data.number) {
							$(".footernav-wordnum").html(data.number);
							$(".footernav-wordnum").show();
						}else {
							$(".footernav-wordnum").hide();
						}
					}
				})
			};
			check_cart_number();
			get_recommend_products();
			$(".comment").click(function(){
				location.href = "/product_comment?product_id={{product.id}}";
			});
			//优惠卷
			$(".click3").click(function(){
			  $(".partone2").css("display","block");
			  $(".opacity").css("display","block");
			});
			$(".close2").click(function(){
			  $(".partone2").css("display","none");
			  $(".opacity").css("display","none");
			});
			$(".opacity").click(function(){
			  $(".partone2").css("display","none");
			  $(".opacity").css("display","none");
			});
			var product_id = "{{product.id}}";
			$(".favorite").click(function(){
				$.post("/update_favorite",{is_active:is_active,product_id:product_id},function(data){
					if (data.success) {
						if (is_active == 1) {
							$(".favorite img").attr("src","images/shoucang.png");
							alert("收藏取消");
							is_active = 0;
							return;
						}else {
							$(".favorite img").attr("src","images/shoucangjia.png");
							alert("收藏成功");
							is_active = 1;
						}
					}
				});
			});
			$("#shopping_cart").click(function(){
				var num = $(".middle-number-input2").val();
				var product_id = "{{product.id}}";
				var product_price = "{{product.product_sale_price || 999999}}";
				$.post("/shopping_cart",{product_id:product_id,product_price:product_price,num:num},function(data){
					if (data.success) {
						check_cart_number();
					}else {
						alert(data.message);
					}
				})
			});

			$("#buy_immediate").click(function(){
				var num = $(".middle-number-input2").val();
				var product_id = "{{product.id}}";
				location.href = "/buy_now?id="+JSON.stringify(product_id)+"&num="+num;
			});
			$(".middle-number-input2").change(function(){
				var num = $(".middle-number-input2").val();
				operation = "update";
				change_num(num,operation);
			});
			$("#reduce").click(function(){
				var num = $(".middle-number-input2").val();
				operation = "reduce";
				change_num(num,operation);
			});
			$("#plus").click(function(){
				var num = $(".middle-number-input2").val();
				operation = "plus";
				change_num(num,operation);
			});
			$(".hot .hot-title  span").click(function(){
              $(".hot .hot-img1").hide();
              $(".hot .hot-img2").hide();
              $(".hot .hot-img3").hide();
              var hot=$(this).data("hot");
			  if (hot == "hot-img2" && !hot_img2) {
				  get_hot_sale_products();
			  } else if (hot == "hot-img3" && !hot_img3) {
				  get_new_arrival_products();
			  }
              $("."+hot).show();

              $(".hot .hot-title  span").removeClass("hot-span1-color");
              $(this).addClass("hot-span1-color");
            })
		});
	</script>
    <script type="text/javascript">
        // 返回到页面
        var images ={{ JSON.stringify(product.mp_pictures)|| safe}};
        var imgs = [];
        for (var i = 0; i < images.length; i++) {
           imgs.push("<img src=\'images/"+images[i].location+"\'/>");
        }
        var items = [
          {id:1,img:'images/i-77.png',href:'#'}
          ,{id:2,img:'images/i-88.png'}
          ,{id:3,img:'images/i-99.png'}
        ];

        ReactDOM.render(React.createElement(Lunbo, null), document.getElementById("lunbo"));
    </script>
  </body>
</html>
