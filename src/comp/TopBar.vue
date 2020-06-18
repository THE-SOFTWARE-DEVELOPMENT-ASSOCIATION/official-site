<template>
	<div class="TopBar">
		<v-app-bar color="primary">
			<div v-if="ShowMenu">
				<v-app-bar-nav-icon></v-app-bar-nav-icon>
			</div>
			<img id="LOGO_PIC" src="../../assets/img/LOGO.svg" height="45px">
			<v-toolbar-title id="TITLE_TEXT">THE SOFTWARE DEVELOPMENT ASSOCIATION</v-toolbar-title>
      <v-spacer />
			<v-btn text><div class="TITLE_OPT_TEXT">加入我们</div></v-btn>
			<v-btn text><div class="TITLE_OPT_TEXT">工程</div></v-btn>
		</v-app-bar>
	</div>
</template>

<style>
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
import {Component,Vue,Prop} from 'vue-property-decorator';

@Component
export default class TopBar extends Vue{
		@Prop() ShowMenu: boolean;
}
</script>