$(document).ready(function(){
		$.JTranslator({
			$root: 'example', //根目錄 ex:'domain.com'
			$langVar: {tw:"/tw/",en:"/en/"}, //定義統一導向判斷參數 
			$customPage: {page1:{
													tw:'other/other_tw.html',
													en:'other/other.html'
													},
										page2:{
													tw:'other1_tw.html',
													en:'other1.html'
													}
										}
		})
})
