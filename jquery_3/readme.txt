1. 返回顶部 
	$("html,body").animate({scrollTop: 0}, 300)
	$("html,body").scrollTop(0)

2. scroll 事件 scrollTop/scrollLeft值变化就会触发


3. $(function() {})   $(document).ready(function(){})  
						底层事件DOMContentLoaded
   $(selector)      获取元素
   $(element)       将原生对象转换成jquery对象
   $("<div></div>") 创建元素

4. jQuery工具函数
	$.trim(str) 去掉字符串首尾空格
	$.parseJSON() 将json字符串转换成对象
	$.each(arr, fn)  遍历数组
	$.map(arr, fn)   返回数组
	$.type() 类型检测
	$.fn.extend() 给元素扩展方法功能

	$.extend()  给jquery扩展工具函数
		;$.extend({
			capitalize: function(str) {
				str = $.trim(str.toLowerCase());
				return str[0].toUpperCase() + str.substring(1);
			}
		})

5.zepto.js 移动端的jquery精简版
	http://www.css88.com/doc/zeptojs_api/ 接口文档
	zepto.js 将功能分成多个模板，只保留	
	核心模块；包含许多方法
	通过on()& off()处理事件
	XMLHttpRequest 和 JSONP 实用功能
	序列化 & 提交web表单

	使用.animte() 添加模块fx
	要使用.fadeIn()/fadeOut() 添加fx_methods	
	添加触屏事件 使用touch模块

    CDN 内容分发网络

6. BOM


7. git 