'use strict';
import IAnimEl from "./animEl"

var anime = require('animejs');
if (anime.default) {
  anime = anime.default;
}

const intersectionObserver = new IntersectionObserver(
	(entries, observer) => {
		entries.forEach((o) => {
			var animEl = <IAnimEl><unknown>(o.target);
			if(animEl.$animetor == null || animEl.$animetor == undefined){
				console.error("擬動畫之el無Animetor。");
				return;
			}
			if(o.isIntersecting){
				console.log("el進入視野。");
				animEl.$animetor.play();
			}else{
				console.log("el退出視野。");
				animEl.$animetor.seek(0);
				animEl.$animetor.pause();
			}
		});
	}
)

function install(Vue){
	console.log("animeOnIntersted plugin loaded.");
	Vue.directive("anime-on-itst",
		(el: Element, binding: any, vnode) => {
			var opts = Object.assign({autoplay: false}, binding.value, { targets: el });
			(<IAnimEl><unknown>el).$animetor = anime(opts);
			intersectionObserver.observe(el);
		}
	);
	Vue.prototype.$anime = anime;
}

export default{
	install: install
};