<template>
	<div class="JoinUs" :style="{marginTop: rootMarginTop}">
		<v-container class="JOIN_TEXT">
			<v-row>
				<v-col cols="4">
					<img src="../../assets/img/LOGO.svg"
					class="LOGO"
					v-anime="{translateY: [-20, 10], easing: 'easeInOutQuad', direction:'alternate', loop: true}">
				</v-col>
				<v-col cols="8">
					<p>在这里，让我们一起制作出自己的项目！</p>
					<p>我们欢迎喜欢编程的人、想要一起制作项目的人！</p>
					<p></p>
					<h2>加入我们，一起制作软件与学习吧！</h2>
					<a target="_blank" href="//shang.qq.com/wpa/qunwpa?idkey=b84b89f2cd49d1c88e2301abd5dc25109c8e2c00e7fc926622183f4e7b02c89a"><img border="0" src="//pub.idqqimg.com/wpa/images/group.png" alt="软件开发协会新人面试" title="软件开发协会新人面试"></a>
				</v-col>
			</v-row>			
		</v-container>
		<hr>

		<v-card class="DESC2">
			<h1 v-anime="{delay: 600, opacity: [0, 1], translateY: [-35, 0], easing: 'easeOutCubic', duration: 3000}">为了集合动员起来学习的、喜爱编程的、想自己制作项目的人一起来制作项目，我社于2018年6月成立。</h1>
		</v-card>
	</div>
</template>

<style>
/*==========須據視口大小而定者==========*/
h1{
	display: block;
	margin: 0 auto;
	text-align: center;
	font-weight: 300;
	font-size: min(2.1vw, 1.8em);
}

@media screen and (max-width: 1200px){
	h1{
		font-size: clamp( 1.3em, 3.0vw, 1.5em);
	}
}

.LOGO{
	display: block;
	margin: 0 auto;
	width: 180px;
}

.JOIN_TEXT p{
	font-size: 1.4em;
	font-weight: 300;
}

@media screen and (max-width: 600px){
	.LOGO{
		width: 80%;
		margin: 0;
	}
	.JOIN_TEXT p{
		font-size: 1.1em;
	}

}

 /*==========不動者==========*/
.JOIN_TEXT{
	padding: 3em 0 2em 0;
}

hr{
	width: 100%;
	border: none;
	border-top: 1px solid #555555;
	height: 1px;
}

.DESC2{
	padding: 4em 0 5em 0;
}
</style>

<script lang="ts">
import {Vue, Component, Mounted, Prop} from 'vue-class-decorator'
import Application from "../Application"
import TopBar from "../comp/TopBar.vue"

@Component({
  components: {
  }
})
export default class JoinUs extends Vue
{

	private rootMarginTop : number = 0;

	@Mounted()
	private onMounted() : void{
		window.addEventListener('resize', this.adjust);
		this.adjust();
	}
	
	private adjust() : void{
		this.rootMarginTop = (<TopBar>Application.topBarComp).topBarHeight;
	}
}
</script>