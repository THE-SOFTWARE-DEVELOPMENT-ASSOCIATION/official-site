<template>
	<div class="TopBar">
		<v-app-bar color="primary" fixed ref="bar">
			<div v-if="isMenuShow">
				<v-app-bar-nav-icon></v-app-bar-nav-icon>
			</div>
			<img id="LOGO_PIC" src="../../assets/img/LOGO.svg" height="45px">
			<v-toolbar-title id="TITLE_TEXT">
				<div v-if="isFullTitleTextShow">THE SOFTWARE DEVELOPMENT ASSOCIATION</div>
				<div v-if="!isFullTitleTextShow">EATI</div>
			</v-toolbar-title>
      <v-spacer />
			<router-link to="/join-us"><v-btn text ><div class="TITLE_OPT_TEXT">加入我们</div></v-btn></router-link>
			<v-btn text ><div class="TITLE_OPT_TEXT">工程</div></v-btn>
		</v-app-bar>
	</div>
</template>

<style>
	.TopBar{
		height: auto;
		display: block;
	}
	#LOGO_PIC{
		margin-right: 1em;
	}
	#TITLE_TEXT{
		font-size: 18px;
		font-family: "Roboto Mono";
		font-weight: 300;
	}
	.TITLE_OPT_TEXT{
		font-size: 16px;
	}
</style>



<script lang="ts">
import 'reflect-metadata'
import {Component,Vue,Prop,Watch} from 'vue-property-decorator';
import { Mounted } from 'vue-class-decorator';

@Component
export default class TopBar extends Vue{
		@Prop() public isMenuShow: boolean;
		public topBarHeight: number;
		public isFullTitleTextShow: boolean = false;

		@Mounted()
		private onMounted() : void{
			var PaHaGa = this;

			this.adjust();
			window.addEventListener('resize', this.adjust);
		}

		private adjust() : void{
			this.isFullTitleTextShow = document.body.clientWidth > 700;
			this.topBarHeight = (<Vue>this.$refs['bar']).$el.clientHeight;
		}


		
		

}
</script>