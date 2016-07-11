$(function(){
	$.JTranslator({
		$root: '/test/',	//根目錄
		$langSwitchNode: "select",			//語言選單種類
		$langVar: {
			tw:"/tw/",						//'tw'的命名判斷值
			en:"/en/",						//'en'的命名判斷值
			cn:"/cn/"						//'cn'的命名判斷值
		},
		$customPage: {						//非命名規則的頁面導向
			page1:{
				tw:'tw/hydraulic-cylinder.htm',
				en:'hydraulic-cylinder.htm',
				cn:'cn/hydraulic-cylinder.htm'
			},
			page2:{
				tw:'tw/pneumatic-cylinder.htm',
				en:'pneumatic-cylinder.htm',
				cn:'cn/pneumatic-cylinder.htm'
			}
		}
	})
})
