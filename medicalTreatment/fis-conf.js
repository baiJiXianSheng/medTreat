// default settings. fis3 release

// Global start
fis.hook('commonjs');
fis.hook('relative');

fis.set('project.ignore', ['dist/**', 'fis-conf.js', 'node_modules/**'])

//fis.match('(*{_aio.js,_map.js,_aio.css})',{
//	release:'jrctpublic/aio/$1'
//})

fis.match('::package', {
	postpackager: fis.plugin('loader', {
		allInOne: false
	})
})

fis.match('/component/**.js', {
	isMod: true
})

fis.media('pro').match('::package', {
	postpackager: fis.plugin('loader', {
		allInOne: true
	})
})

fis.media('pro').match('*.{js,css}', {
	useHash: false
});

fis.media('pro').match('::image', {
	useHash: false
});

fis.media('pro').match('*.js', {
	optimizer: fis.plugin('uglify-js')
});

fis.match('*.min.js', {
	optimizer: null
})

fis.media('pro').match('*.css', {
	optimizer: fis.plugin('clean-css')
});

fis.media('pro').match('/js/**.js', {
	packTo: '/pkg/header.js'
});

fis.media('pro').match('/component/common/common.js', {
	packTo: '/pkg/header.js'
});

fis.media('pro').match('/js/mod.js', {
	packOrder: 1
});

fis.media('pro').match('/js/vue.js', {
	packOrder: 2
});

fis.media('pro').match('/js/mui.min.js', {
	packOrder: 3
});

fis.media('pro').match('/component/common/common.js', {
	packOrder: 4
});

fis.media('pro').match('/css/*.css', {
	packTo: '/pkg/header.css'
});

fis.match('*.min.css', {
	optimizer: null
})

fis.match('**', {
	relative: true
})

fis.media('dev').match('*', {
	deploy: fis.plugin('local-deliver', {
		to: '../medTreat/'
	})
})

fis.media('pro').match('*', {
	deploy: fis.plugin('local-deliver', {
		to: '../medTreat/'
	})
})

//fis.media('pro').match('*',{
//	deploy:fis.plugin('local-deliver',{
//		to:''
//	})
//})

//fis.media('pro').match('*.png', {
//optimizer: fis.plugin('png-compressor')
//});