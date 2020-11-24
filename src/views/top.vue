<template>
  <div >
<!--href="javascript:void(0)" class="closebtn"-->
      <div id="mySidenav" v-bind:class="{sidenav: !this.$store.state.count, sidenav2:this.$store.state.count}">
        <div class='inside'>
        <button v-bind:class="{navHead: !this.$store.state.count, navHead2:this.$store.state.count}" v-on:click="third"> Plots</button>
        <button v-bind:class="{navHead: !this.$store.state.count, navHead2:this.$store.state.count}" v-on:click="home"> Calculator</button>
        <button v-bind:class="{navHead: !this.$store.state.count, navHead2:this.$store.state.count}" v-on:click="about"> About</button>
        <button v-bind:class="{navHead: !this.$store.state.count, navHead2:this.$store.state.count}"  v-on:click="changeColor"> 
            <span class="material-icons">{{this.$store.state.icon}}</span>
        </button>
        <button v-bind:class="{closebtn: !this.$store.state.count, closebtn2:this.$store.state.count}" v-on:click.prevent="closeNav">&times;</button>

      </div>
      </div>
       
        
      <div class="App">
            <nav>
                <div v-bind:class="{navUp: !this.$store.state.count, nav3:this.$store.state.count}">
                        <button id='menu'  v-on:click.prevent="openNav" v-bind:class="{nav1: !this.$store.state.count, nav2:this.$store.state.count}">
                            <span class="material-icons">menu</span>
                        </button>
                        <div class="test"> 
                        <button id='head' v-bind:class="{nav: !this.$store.state.count, nav2test:this.$store.state.count}">
                            {{this.comptowrite}}
                        </button>
                      </div>
                </div>
            </nav>
        </div>

  </div>
</template>


<script>
export default {
  components: {
    
  },
  data() {
      return{
          componentToRender:'home',
          percent:'50%',
          comptowrite:'Calculator',
          navAppear:false,
          changeToRad:true,
          angle:"DEG"
      }
  },
  mounted(){
    if(window.innerWidth <= 600){this.percent='50%'}
    else{
        this.percent='20%'
    }
  },
  methods:{
    degorrad:function(){
        if (this.changeToRad === true) {
            this.changeToRad=false;
            this.angle = 'RAD';
            this.$store.commit('changeAngleMuserment')
            this.closeNav()

        }
        else {
            this.changeToRad=true;
            this.angle = 'DEG';  
            this.$store.commit('changeAngleMuserment') 
            this.closeNav()

        }
    },
    openNav:function(){
        //if (this.navAppear===false) {
           // this.navAppear=true;
            document.getElementById("mySidenav").style.width = this.percent;
       // }
        //else {this.closeNav();this.navAppear=false}
    },
    closeNav:function(){
        document.getElementById("mySidenav").style.width = "0";
    },
    changeColor:function(){
        this.$store.commit('increment')
        this.closeNav()

    },
    home:function(){
        this.componentToRender ='home'
        this.$emit('changeComponent',this.componentToRender)
        this.comptowrite='Calculator'
        this.closeNav()

    },
    third:function(){
        this.componentToRender ='third'
        this.$emit('changeComponent',this.componentToRender)
        this.comptowrite='Plots'
        this.closeNav()

    },
    about:function(){
        this.componentToRender ='about'
        this.$emit('changeComponent',this.componentToRender)
        this.comptowrite='About'
        this.closeNav()


    },
  }
}
</script>
<style  >
    @import "./top.css";
</style>
