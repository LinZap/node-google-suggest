var keyword = process.argv[2]

if(!keyword){
	console.error('no keyword')
	process.exit()
}

var suggest = require('../index.js')


suggest(keyword,function(err,res){

	if(!err)
		console.log(res)
	else
		console.log('no result')

})