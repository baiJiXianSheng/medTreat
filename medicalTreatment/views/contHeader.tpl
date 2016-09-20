<header class="mui-bar mui-bar-nav">
	<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"><span style="font-size:0.8em;">返回</span></a>
	<h1 class="mui-title"></h1>
	<button type="button" id="lesson" class="mui-btn mui-btn-blue mui-btn-link mui-pull-right">教程</button>
</header>
<script type="text/javascript">
	document.getElementById("lesson").addEventListener('tap', function() {
		mui.openWindow({
			url: 'lesson.html',
			id: 'lesson',
			show: {
				aniShow: 'fade-in'
			}

		})
	})
</script>