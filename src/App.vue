<template>
  <v-app id="App">
    <TopBar ShowMenu></TopBar>
    <v-card id="GIANT">
      <v-row justify="center">
        <v-col ref="TITLE" id="TITLE" class="NON-UP_DOWN_PADDING">
            <h1>共謀大業、共襄盛舉。</h1>
        </v-col>
      </v-row>
    </v-card>
  </v-app>
</template>

<style>
  @import './css/prop.css';
  #TITLE h1{
    font-weight: 300;
    font-size: 4em;
    text-align:center;
    position: relative;
  }
</style>

<script lang="ts">
import {Vue, Component, Mounted, Prop} from 'vue-class-decorator';
import TopBar from "./comp/TopBar.vue"

@Component({
  components: {
    TopBar
  }
})
export default class App extends Vue{

  @Mounted()
  onMounted() : void{
    this.$animeJS({
      targets: this.$refs.TITLE,
      marginTop: '50px'
    });
  }
}
</script>