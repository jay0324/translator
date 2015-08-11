/* 	JQuery 翻譯工具class
 		Program: Jay HSU
 		Date: 2015/04/20
*/

$.JTranslator = function (options) {
		var defaults = {
			$root: '', //根目錄 ex:'domain.com'
			$langVar: {tw:"/ch/",en:"/eng/"}, //定義統一導向判斷參數 
			$customPage: {} //客製導向參數{跟目錄後網址:跟目錄後導向,...} ex: '/eng/about.html':'/eng/network.html'
		};
		
		options = $.extend(defaults, options);
		
		$("a").click(function(){
				if ($(this).attr('lg') !== undefined){
					$lang = $(this).attr("lg");//取得按鈕判斷值
					window.location = fnURLrewrite(window.location.href,options.$root,options.$langVar,options.$customPage,$lang,options.$langVar[$lang]);
					return false;
				}
		})

		function fnURLrewrite($url,$root,$langVar,$customPage,$reqLang,$reqLangVar){
			//1. 檢查客製導向規則
			for (var $k in $customPage) {
				$rootPath = $url.split($root)[0]+$root;
				$checkPath = $url.split($root)[1];
				for (var $v in $customPage[$k]) {
					if ($checkPath === $customPage[$k][$v]){
						return $rootPath+$customPage[$k][$reqLang];
					}else if ($checkPath === "/"+$customPage[$k][$v]){
						return $rootPath+"/"+$customPage[$k][$reqLang];
					}
				}
			}
			
			//2. 檢查統一導向規則
			for (var $k in $langVar) {
				if ($url.indexOf($langVar[$k]) != -1 && $langVar[$k] != $reqLangVar) {
					return $url.replace($langVar[$k],$reqLangVar);
				}
			}
			
			//3. 無批對則返回原網址
			return $url;
		}
}
