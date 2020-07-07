<template>
  <v-app id="App">
    <TopBar ShowMenu ref="topbar"></TopBar>
    <router-view></router-view>
    
  </v-app>
</template>

<style>
  

</style>

<script lang="ts">
// Libs
import {Vue, Component, Mounted, Prop} from 'vue-class-decorator'
import IAnimEl from "../plugins/animEl"
// Comps
import TopBar from "./comp/TopBar.vue"
import Welcome from "./page/Welcome.vue"
import Application from "./Application"

@Component({
  components: {
    TopBar,
    Welcome
  }
})
export default class App extends Vue
{
  @Mounted()
  onMounted() : void{
    Application.appComp = this;
    Application.topBarComp = <Vue>this.$refs['topbar'];
  }

}
</script>