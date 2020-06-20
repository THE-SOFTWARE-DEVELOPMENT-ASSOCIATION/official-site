<template>
  <v-app id="App">
    <TopBar ShowMenu></TopBar>
    <v-card id="GIANT" ref="GIANT">
      <div id="GIANT_BG"
        v-anime-on-itst="{opacity: ['100%','10%'], easing: 'easeOutCubic', duration: '1000'}"></div>
      <div id="TITLE_TEXTS">
        <v-row justify="center">
          <v-col id="TITLE_1" class="NON-UP_DOWN_PADDING"
            v-anime="{marginTop: ['-5em', '0em'], easing: 'easeOutCubic', duration: '3000'}">
              <h1>共謀大業、共襄盛舉。</h1>
          </v-col>
        </v-row>
        <v-row justify="center" align="end">
          <v-col id="TITLE_2" ref="TITLE_2">
            <p>一起、开发软件・网站与游戏。</p>
          </v-col>
        </v-row>
      </div>
    </v-card>

    <v-container class="TEXT_CONTAINER pa-0 pt-2" color="#000000">
        <div class="SECTION">
          <v-row class="md-6" no-gutters>
            <v-col cols="7">
              <h2>运用编程并实践，开发出实际的项目</h2>
              <p>学校布置的小作业，或是结业答辩，皆以练习学过的内容为目的，而不以开发出真正的
              作品为目的。他们通常过于简陋。不是一个商品，也不是真正的「作品」。
              </p>
              <p>在这里，将编程知识实践。用心制作出自己的作品。</p>
            </v-col>
            <v-spacer></v-spacer>
            <v-col cols="4">
              图片
            </v-col>
          </v-row>
        </div>
        <div class="SECTION">
          <v-row class="md-6" no-gutters>
            <v-col cols="4">
              图片
            </v-col>
            <v-spacer></v-spacer>
            <v-col cols="7">
              <h2>团队协作开发。体验工作室开发的工作流。</h2>
              <p>无论是企业还是小型工作室，基本都是团队开发。完全不像在校内自己掌管一切，而是扮演开发团队中的一分子。</p>
              <p>在这里，认识、体验团队开发。学习并使用git workflow，实行真正与软件公司相同的工作流。</p>
            </v-col>
          </v-row>
        </div>
        <div class="SECTION">
          <v-row class="md-6" no-gutters>
            <v-col cols="7">
              <h2>使用先进、符合现代行业使用的技术链、工具链</h2>
              <p>学校中，老师教授的内容普遍落后于今日公司所用的。</p>
              <p>在这里，体验和学习使用现代化，符合行业标准的开发工具集合来进行团队合作开发。</p>
            </v-col>
            <v-spacer></v-spacer>
            <v-col cols="4">
              图片
            </v-col>
          </v-row>
        </div>
    </v-container>
  </v-app>
</template>

<style>
  @import './css/prop.css';

  /*==========須據視口大小而定者==========*/
  #GIANT{
    height: 24em;
  }

  #GIANT_BG{
    top: 0;
    height: 100%;
    width: 100%;
    position: absolute;
    background-image: url(../assets/img/hhhuzsh.jpeg);
    background-size: cover;
  }

  #TITLE_TEXTS{

    display:block;
    position: absolute;
    top: 40%;
    width: 100%;
    height: auto;
    
  }
  /**/
  @media screen and (max-width: 600px){
    #GIANT{
      height: 22em;
    }
    
  }
  @media screen and (min-width: 1170px){
    #GIANT{
      height: 32em;
    }
    #TITLE_TEXTS{
      top: 44.5%;
    }
  }

  /*==========不動者==========*/
  #TITLE_1 h1{
    font-weight: 300;
    font-size: min(9vw, 4rem);
    text-align:center;
    position: relative;
    left: 0.35em;   /*爲句號*/
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
  }
  #TITLE_2 p{
    text-align: center;
    font-size: 1.4rem;
    font-weight: 100;
    position: relative;
  }

  .TEXT_CONTAINER{
  }

  .SECTION{
    height: 30em;
    padding: 3em 1em;
  }

  .SECTION h2{
    font-weight: 300;
    font-size: 1.8em;
    margin: 0 0 1.4em 0;
  }

</style>

<script lang="ts">
import {Vue, Component, Mounted, Prop} from 'vue-class-decorator'
import TopBar from "./comp/TopBar.vue"
import IAnimEl from "../plugins/animEl"

@Component({
  components: {
    TopBar
  }
})
export default class App extends Vue{
  title2IsFirstTriggerdAnim: boolean = true;
  title2Anim = null;

  @Mounted()
  onMounted() : void{
    
    window.onresize = this.onViewChanged;

    this.title2Anim = {
      targets: this.$refs.TITLE_2,
      delay: '1500', opacity: '100%', marginTop: ['-3em', '0em'], easing: 'easeOutCubic', duration: '4000'
    };
    
    //爲TITLE_2
    new IntersectionObserver(
      (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
        entries.forEach((o) => {
          var animEl = <IAnimEl><unknown>o.target;
          if(o.isIntersecting){
            if(this.title2IsFirstTriggerdAnim){
              animEl.$animetor = this["$anime"](this.title2Anim);
              this.title2IsFirstTriggerdAnim = false;
            }else{
              this.title2Anim.delay = 0;
              animEl.$animetor = this["$anime"](this.title2Anim);
            }
            
          }else{
            if(animEl.$animetor){
              animEl.$animetor.seek(0);
              animEl.$animetor.pause();        
            }
          }
        });
      }
    ).observe(<Element>this.$refs['TITLE_2']);
    
  }

  onViewChanged() : void{

  }

}
</script>