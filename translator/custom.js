$(document).ready(function(){
		$.JTranslator({
			$root: 'example', //�ڥؿ� ex:'domain.com'
			$langVar: {tw:"/tw/",en:"/en/"}, //�w�q�Τ@�ɦV�P�_�Ѽ� 
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
