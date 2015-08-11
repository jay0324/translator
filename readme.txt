使用方法: 

範例的網站架構為:
繁體中文命名方式: /ch/繁體頁面.html
english命名方式: /en/英文頁面.html
簡體中文命名方式: 外部連結

不在命名方式內的例外頁面

頁一:
繁體頁面: http://translator/example/other/other_tw.html
英文頁面: http://translator/example/other/other.html

頁二:
繁體頁面: http://translator/example/other1_tw.html
英文頁面: http://translator/example/other1.html

===============================================================================
1. HTML: 在要使用此切換器的連結上放入lg的判斷值,判斷內的值在js中進行定義

<a lg="tw" href="#">繁體中文</a>
<a lg="en" href="#">English</a>
<a href="外部連結">簡體中文</a>

===============================================================================
2. JS: 再使用以下的代碼來定義轉向規則
$root: str, //根目錄 ex:'domain.com'
$langVar: object, //定義統一導向判斷參數
$customPage: object //客製導向參數

下面示範例:
$.JTranslator({
								$root: 'example', 				//根目錄
								$langVar: {
														tw:"/tw/",		//a tag 的lg參數值'tw'的命名判斷值
														en:"/en/"			//a tag 的lg參數值'en'的命名判斷值		
													},  
								$customPage: {						//非命名規則的頁面導向
															page1:{			//導向頁面一
																			tw:'other/other_tw.html',		//導向頁面一的lg參數值'tw'的導向頁面 (根目錄後的url, 此值為範例的話, 該頁面完整URL為: http://translator/example/other/other_tw.html)
																			en:'other/other.html'				//導向頁面一的lg參數值'en'的導向頁面
																		},
															page2:{
																			tw:'other1_tw.html',
																			en:'other1.html'
																		}
							})