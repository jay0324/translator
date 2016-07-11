更新: 20160711
使用方法: 
===============================================================================
1. HTML: 在要使用此切換器的連結上放入lg的判斷值,判斷內的值在js中進行定義

- 語言按鈕為a標籤
<a lg="tw" href="#">繁體中文</a>
<a lg="en" href="#">English</a>
<a lg="cn" href="#">簡體中文</a>

- 語言按鈕為select標籤
<select class="langSwitch">
	<option value="en">English</option>
	<option value="tw">繁體中文</option>
	<option value="cn">簡体中文</option>
</select>

===============================================================================
2. JS: 再使用以下的代碼來定義轉向規則

下面示範例:
$.JTranslator({
	$root: 'example', 					//根目錄 (ex: http://localhost/test/ => $root: "/test/")
	$defaultOption: "en",				//預設langVar的key
	$langSwitchNode: "a",				//語言選項的標籤類型
	$langVar: {
		tw:"/tw/",						//a tag 的lg參數值'tw'的命名判斷值,select將選項的value設定為lg的key
		en:"/en/",						//a tag 的lg參數值'en'的命名判斷值,select將選項的value設定為lg的key	
		cn:"/cn/"						//a tag 的lg參數值'cn'的命名判斷值,select將選項的value設定為lg的key	
	},  
	$customPage: {						//非命名規則的頁面導向
		page1:{							//導向頁面1
			tw:'other/other_tw.html', 	//導向頁面1的lg參數值tw頁面 (根目錄後的路徑)
			en:'other/other.html' 		//導向頁面1的lg參數值en頁面	(根目錄後的路徑)			
		},
		page2:{							//導向頁面2
			tw:'other1_tw.html',		//導向頁面1的lg參數值tw頁面 (根目錄後的路徑)
			en:'other1.html'			//導向頁面1的lg參數值en頁面 (根目錄後的路徑)
		}
	}
})

=====================================================================================================
範例的網站架構為:
繁體中文命名方式:/ch/繁體頁面.html
english命名方式: /en/英文頁面.html
簡體中文命名方式: 外部連結

不在命名方式內的例外頁面

頁一:
繁體頁面: http://translator/example/other/other_tw.html
英文頁面: http://translator/example/other/other.html

頁二:
繁體頁面: http://translator/example/other1_tw.html
英文頁面: http://translator/example/other1.html