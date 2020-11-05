"use strict";
window.iQuery && window.Rise && (function (jQuery, Rise) {
	window.post_endless_delay = 3;
	window.MobilePanelDelay = 0;
	if (window.Rise.Design.is_mobile()) {
		window.show_counters = 0;
	} else {
		window.show_counters = 0;
	}
	window.log_time('windows.footer-external_start');
	window.goals = {
		timer: 0,
		queue: [],
		params: []
	};
	window.wmtSendGoal = function (key, params) {
		key = def(key, null);
		params = def(params, {});
		if (isRobot()) return;
		if (typeof ym !== 'undefined' && gtag !== undefined) {
			if (typeof window.goals.queue !== 'undefined') {
				while (window.goals.queue.length) {
					var goal = window.goals.queue.shift();
					ym(48757586, 'reachGoal', goal.key, goal.params);
					gtag('event', goal.key, {
						'event_category': 'Цель',
						'event_label': JSON.stringify(goal.params)
					});
				}
			}
			if (key !== null) {
				if (key == 'sendParams') {
					if (Array.isArray(params)) {
						window.goals.params = window.goals.params.concat(params);
					} else {
						window.goals.params.push(params);
					}
				} else {
					ym(48757586, 'reachGoal', key, params);
					gtag('event', key, {
						'event_category': 'Цель',
						'event_label': JSON.stringify(params)
					});
				}
			}
		} else {
			if (key !== null) {
				if (key == 'sendParams') {
					if (Array.isArray(params)) {
						window.goals.params = window.goals.params.concat(params);
					} else {
						window.goals.params.push(params);
					}
				} else {
					window.goals.queue.push({
						key: key,
						params: params
					});
				}
			}
		}
	};
	if (isRobot()) return;
	Rise.MobilePanel.setLoadingDelay(window.MobilePanelDelay);
	Rise.breakLoop(function () {
		var i = 0,
			timer_id = 0;
		timer_id = window.setInterval(function () {
			if (++i > 30) {
				window.clearInterval(timer_id);
			}
			if (window.goals.params.length) {
				ym(48757586, 'params', window.goals.params);
				window.goals.params = [];
			}
		}, 2000);
	}, window.show_counters * 1000);
	Rise.breakLoop(function () {
		(function (m, e, t, r, i, k, a) {
			m[i] = m[i] || function () {
				(m[i].a = m[i].a || []).push(arguments)
			};
			m[i].l = 1 * new Date();
			k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a)
		})
		(window, document, "script", "https://cdn.jsdelivr.net/npm/yandex-metrica-watch/tag.js", "ym");
		(function () {
			var t = document.createElement("script");
			t.src = "https://www.googletagmanager.com/gtag/js?id=UA-130677506-1";
			t.type = "text/javascript";
			t.async = true;
			document.body.appendChild(t);
		})();
	});
	Rise.keep('rotator_user_ip', 'rotator');
	Rise.keep('rotator_set_goals', 'rotator');
	Rise.breakLoop(function () {
		window.log_time('windows.show_counters');
		ym(48757586, "init", {
			clickmap: true,
			trackLinks: true,
			accurateTrackBounce: true,
			params:{'ip':ip},
			triggerEvent: true,
			webvisor: !Rise.AdBlock
		});
		jQuery(document).on('yacounter48757586inited', function () {
			ym(48757586, 'getClientID', function (clientID) {
				window.yaClientID = 'id' + clientID;
				if (jQuery.cookie('client_id') != clientID) {
					jQuery.cookie('client_id', clientID, {
						expires: 30,
						path: '/'
					});
				}
				Rise.pending('rotator_user_ip', function () {
					window.wmtSendGoal('sendParams', [{
						'user_ip': window.user_ip
					}, {
						'ClientID': clientID
					}, {
						'adBlock': Rise.AdBlock
					}]);
				});
			});
		});
		Rise.pending('rotator_set_goals', function () {
			window.setTimeout(function () {
				window.ClickGo('.main');
			}, 1000);
		});
		window.dataLayer = window.dataLayer || [];
		window.gtag = function () {
			dataLayer.push(arguments);
		}
		gtag('js', new Date());
		gtag('config', 'UA-130677506-1');
		setTimeout(function () {
			gtag('event', '15sec', {
				'event_category': 'Визит без отказа'
			});
		}, 15000);
		new Image().src = "https://counter.yadro.ru/hit?t45.4;r" + escape(document.referrer) + ((typeof (screen) == "undefined") ? "" : ";s" + screen.width + "*" + screen.height + "*" + (screen.colorDepth ? screen.colorDepth : screen.pixelDepth)) + ";u" + escape(document.URL) + ";h" + escape(document.title.substring(0, 80)) + ";" + Math.random();
	}, window.show_counters * 1000);
	window.Rise.Rotator == undefined && (window.catchError(function () {
		Rise.breakLoop(function () {
			var script = document.createElement('script');
			script.src = '/assets/js/r5.1_static.js';
			document.body.appendChild(script);
			log_time('windows.show_rotator');
		}, window.show_rotator * 1000);
	}))();
	Rise.to('img-click-play', function () {
		window.wmtSendGoal('gifPlay');
	});
	Rise.to('img-click-full', function () {});
	Rise.to('tool-button-click', function () {
		window.wmtSendGoal('toolRun');
	});
	Rise.to('document-ready', function (action, $root) {
		if (typeof window.fullPathCat != 'undefined') {
			window.wmtSendGoal('sendParams', {
				fullPathCat: window.fullPathCat
			});
		}
	});
	Rise.to('post-single-use', function (action, $root) {
		var fullPathCat = $root.attr('data-fullPathCat');
		if (fullPathCat.length) {
			window.wmtSendGoal('sendParams', {
				fullPathCat: fullPathCat
			});
		}
		window.wmtSendGoal('ajaxLoadingPost', {
			'dinamicUrl': document.URL
		});
		ym(48757586, 'hit', document.URL, {
			title: document.title.substring(0, 100),
			referer: window.Rise.Page._post.referer
		});
		window.dataLayer = window.dataLayer || [];
		window.gtag = function () {
			dataLayer.push(arguments);
		}
		window.gtag('config', 'UA-130677506-1', {
			'page_title': document.title.substring(0, 100),
			'page_path': location.pathname + "#dinamic"
		});
		new Image().src = "https://counter.yadro.ru/hit?t45.4;r" + escape(document.referrer) + ((typeof (screen) == "undefined") ? "" : ";s" + screen.width + "*" + screen.height + "*" + (screen.colorDepth ? screen.colorDepth : screen.pixelDepth)) + ";u" + escape(document.URL) + ";h" + escape(document.title.substring(0, 80)) + ";" + Math.random();
	});
})(window.iQuery, window.Rise);
