/* 	JQuery 翻譯工具class
 		Program: Jay HSU
 		Date: 2015/04/20
*/

$.JTranslator = function (options) {
		var defaults = {
			$root: '', //根目錄 ex:'domain.com'
			$defaultOption: "en",
			$langSwitchNode: "a",
			$langVar: {tw:"/ch/",en:"/eng/"}, //定義統一導向判斷參數 
			$customPage: {} //客製導向參數{跟目錄後網址:跟目錄後導向,...} ex: '/eng/about.html':'/eng/network.html'
		};
		
		options = $.extend(defaults, options);
		
		//init selector
		fnSetCurrentOptions(
								options.$langSwitchNode,
								window.location.href,
								options.$defaultOption,
								options.$langVar
							);
		
		$("a").click(function(){
				if ($(this).attr('lg') !== undefined){
					$lang = $(this).attr("lg");//取得按鈕判斷值
					newlocation = fnURLrewrite(
													window.location.href,
													options.$root,
													options.$langVar,
													options.$customPage,
													$lang,
													options.$langVar[$lang]
												);
					//console.log(newlocation);
					if (newlocation != "#") {
						window.location = newlocation;
						return false;
					}
				}
		})

		$("select.langSwitch").on('change',function(){
			if ($(this).val() != "#"){
				$lang = $(this).val();//取得按鈕判斷值
				newlocation = fnURLrewrite(	window.location.href,
											   	options.$root,
											   	options.$langVar,
											   	options.$customPage,
											   	$lang,
											   	options.$langVar[$lang]
											);
				if (newlocation != "#") {
					window.location = newlocation;
					return false;
				}
			}
		})

		function fnSetCurrentOptions($node,$url,$defaultOption,$langVar){
			var updateSelect = false;

			if ($node == 'select') {
				//如果語言選項是下拉選單
				for (var $k in $langVar) {
					//console.log($k);
					if ($url.indexOf($langVar[$k]) != -1) {
						$("option[value='"+$k+"']","select.langSwitch").prop("selected", true);
						updateSelect = true;
					}
				}

				//如果沒有選項做為初始，則以預設值來設定
				if (!updateSelect){
					$("option[value='"+$defaultOption+"']","select.langSwitch").prop("selected", true);
				}
			}else{
				//如果語言選項是一般連結或按鈕
				for (var $k in $langVar) {
					if ($url.indexOf($langVar[$k]) != -1) {
						$($node+'[lg='+$k+']').addClass("active");
						updateSelect = true;
					}
				}
				//如果沒有選項做為初始，則以預設值來設定
				if (!updateSelect){
					$($node+'[lg='+$k+']').addClass("active");
				}
			}
		}

		function fnURLrewrite($url,$root,$langVar,$customPage,$reqLang,$reqLangVar){
			//1. 檢查客製導向規則
			for (var $k in $customPage) {
				$rootPath = $url.split($root)[0]+$root;
				$checkPath = $url.split($root)[1];

				for (var $v in $customPage[$k]) {
					if ($customPage[$k][$reqLang] != "#") {
						//如果轉址為"#",不做任何動作
						if ($checkPath === $customPage[$k][$v]){
							return $rootPath+$customPage[$k][$reqLang];
						}else if ($checkPath === "/"+$customPage[$k][$v]){
							return $rootPath+"/"+$customPage[$k][$reqLang];
						}
					}else{
						return "#";
					}
				}
			}
			
			//2. 檢查統一導向規則
			for (var $k in $langVar) {
				if ($url.indexOf($langVar[$k]) != -1) {
					if ($k != $reqLang) {
						return $url.replace($langVar[$k],$reqLangVar);
					}else{
						return $url;
					}
				}
			}
			
			//3. 無批對則返回原網址
			return $url;
		}
}
