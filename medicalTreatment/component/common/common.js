//common function
if(location.toJsonMap == null) {
	location.toJsonMap = function() {
		var searchString = this.search.substr(1)
		var arr = searchString.split('=')
		var map = {}
		for(var i = 0; i < arr.length; i = i + 2) {
			var key = arr[i]
			var val = arr[i + 1]
			map[key] = val
		}

		return map
	}
}

//extend mui.openWindow

if(!mui.createOpenWindow) {
	mui.createOpenWindow = function(options, params, callback) {
		if(!window.plus) throw "must wait until plus ready"
		if(!params) params = {}
		if(!callback) callback = function() {}

		var wv = plus.webview.getWebviewById(options.id)
		if(!wv) {
			var newWebview = mui.openWindow(options)
			newWebview.addEventListener('loaded', function() {
				if(params.name != null) {
					setTimeout(function() {
							mui.fire(newWebview, params.name, params.data)
						}, 100) // 放到window对象队列的最后面，确保plusready 执行后在执行fire，避免fire 在事件还未注册成功之前就发生
				}
				console.log('loaded occur')
				callback(newWebview, 'loaded')

			})

			newWebview.addEventListener('plusready', function() {
				console.log('plusready occur')
			})
		} else {
			if(params.name != null) {
				mui.fire(wv, params.name, params.data)
			}
			plus.webview.show(wv)
			callback(wv)
		}

	}
}

//register filter
Vue.filter('dateFormat', function(val) {
	if(!(val instanceof Date)) return val
	return val.toLocaleDateString() + ' ' + val.getHours() + ':' + val.getMinutes()
})

var hashChangeMap = {

}

location.hash = ''

mui(window).on('hashchange', function(evt) {
	var path = location.hash.split('-')[0]
	var param = location.hash.split('-')[1] ? location.hash.split('-')[1] : ''

	if(hashChangeMap[path] != null) {
		//location.href=hashChangeMap[path]+param
	}
})

// for development
//mui.plusReady=mui.ready

module.exports = {}