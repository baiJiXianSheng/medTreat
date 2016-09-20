
exports.takePic = function(callback) {
	if(!window.plus) throw "must wait until plus ready!"

	var cmr = plus.camera.getCamera()
	cmr.captureImage(function(url) {
		plus.io.resolveLocalFileSystemURL(url, function(entry) {
			entry.file(function(file) {
				callback && typeof callback == 'function' && callback(file, entry)
			}, function(e) {
				mui.toast('error when reading file data' + e.message)
			})
		}, function(e) {
			mui.toast('error when get file entry :' + e.message)
		})
	}, function(e) {
		console.log(e.message)
	}, {
		format: 'jpg',
		index: 1
	})

}