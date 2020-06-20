<template>
	<div class="TopBar">
		<v-app-bar color="primary" fixed>
			<div v-if="isMenuShow">
				<v-app-bar-nav-icon></v-app-bar-nav-icon>
			</div>
			<img id="LOGO_PIC" src="../../assets/img/LOGO.svg" height="45px">
			<v-toolbar-title id="TITLE_TEXT">
				<div v-if="isFullTitleTextShow">THE SOFTWARE DEVELOPMENT ASSOCIATION</div>
				<div v-if="!isFullTitleTextShow">EATI</div>
			</v-toolbar-title>
      <v-spacer />
			<v-btn text><div class="TITLE_OPT_TEXT">加入我们</div></v-btn>
			<v-btn text><div class="TITLE_OPT_TEXT">工程</div></v-btn>
		</v-app-bar>
	</div>
</template>

<style>
	.TopBar{
		
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
		@Prop() isMenuShow: boolean;
		isFullTitleTextShow: boolean = false;
		screenWidth: number = 0;
		screenHeight: number = 0;

		@Mounted()
		onMounted() : void{
			var PaHaGa = this;
			function adjustWH() : void {
				PaHaGa.screenWidth = document.body.clientWidth;
				PaHaGa.screenHeight = document.body.clientHeight;
			}

			adjustWH();
			window.onresize = adjustWH;
		}

		@Watch('screenWidth')
		onScreenWidthChanged(val: number, oldVal: number){
			this.isFullTitleTextShow = val > 700;
		}

}
</script>