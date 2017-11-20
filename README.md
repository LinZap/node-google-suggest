# Node Google Suggest 

Google suggest 提供能夠查詢關鍵字的相關關鍵字，當然也可以作為是否為關鍵字的判斷。


# Usage

### 安裝必要套件
```
git clone https://github.com/LinZap/node-google-suggest.git
cd node-google-suggest
npm install
```

### 查詢關鍵字

```
node bin\suggest.js "信用卡"
```
輸出
```js
[ '信用卡',
  '信用卡繳稅',
  '信用卡 機場接送',
  '信用卡繳牌照稅',
  '信用卡推薦',
  '信用卡 現金回饋',
  '信用卡安全碼',
  '信用卡繳費',
  '信用卡卡號',
  '信用卡優惠',
  '信用卡 機場接送',
  '信用卡 比較',
  '信用卡 推薦',
  '信用卡 現金回饋',
  '信用卡 繳稅',
  '信用卡 電影',
  '信用卡 行李箱',
  '信用卡 牌照稅',
  '信用卡 安全碼',
  '信用卡 機場停車' ]
```

# API
當然也可以在您的程式中使用
### install
```
npm install node-google-suggest --save
```
### Example
```js

var keyword = "Netfix"
var suggest = require('node-google-suggest')

suggest(keyword,function(err,res){

	if(!err && res.length)
		console.log(res)
	else
		console.log('no result')

})

```

# License
MIT License
