<template>
  <div >
    <div  class='container' >
    <div id='app2' v-bind:class="{app2: !this.$store.state.count, app3:this.$store.state.count}">
    <div id='showtime' v-bind:class="{showtime: !this.$store.state.count, showtime2:this.$store.state.count}" >
        <show-res></show-res>
    </div>
        <form id = "form1" v-on:submit.prevent="main"> <!--v-bind:class="{ input2: !this.$store.state.count, input3:this.$store.state.count}" class="form-control form-control"-->
            <input id = "input2" autocomplete="off"  v-on:focus="show"   ref="input"   type="text" v-bind:class="{ input2: !this.$store.state.count, input3:this.$store.state.count}"   v-on:change="change" placeholder = "Enter a problem" autoFocus=true />
        </form>       
        <div  v-bind:class="{ buttons: !this.$store.state.count, buttons1:this.$store.state.count}" v-show="toshow">   
        <div class="b1 row">
            <button v-bind:class="{ int: !this.$store.state.count, int2:this.$store.state.count}"   v-on:mousedown.prevent="putText(1)" >1</button>
            <button v-bind:class="{ int: !this.$store.state.count, int2:this.$store.state.count}" v-on:mousedown.prevent="putText(2)"  >2</button>
            <button  v-bind:class="{ int: !this.$store.state.count, int2:this.$store.state.count}" v-on:mousedown.prevent="putText(3)" >3</button>
            <button v-bind:class="{ int: !this.$store.state.count, int2:this.$store.state.count}"  v-on:mousedown.prevent="putText('^')">^</button>
            <button  v-bind:class="{ int: !this.$store.state.count, int2:this.$store.state.count}" v-on:mousedown.prevent="putText2('√()')"> √(x)</button>
                    <button id ="special1" v-bind:class="{ int: !this.$store.state.count, int2:this.$store.state.count}"  v-on:mousedown.prevent="special1"  >(</button>                
                    <button id ="special2" v-bind:class="{ int: !this.$store.state.count, int2:this.$store.state.count}"  v-on:mousedown.prevent="special2"  >)</button>
                                                                                                                                                <!-- putText('π')-->
            <button v-bind:class="{ special: !this.$store.state.count, control2 :this.$store.state.count}" id= 'special10' v-on:mousedown.prevent="special10" >π</button>
          <button v-bind:class="{ special: !this.$store.state.count, control2 :this.$store.state.count}" id= 'special11' v-on:mousedown.prevent="special11">e</button>
        </div>        
                <div class="b1 row">
                    <button v-bind:class="{ int: !this.$store.state.count, int2:this.$store.state.count}" v-on:mousedown.prevent="putText('4')" >4</button>
                    <button v-bind:class="{ int: !this.$store.state.count, int2:this.$store.state.count}" v-on:mousedown.prevent="putText('5')" >5</button>
                    <button v-bind:class="{ int: !this.$store.state.count, int2:this.$store.state.count}" v-on:mousedown.prevent="putText('6')" >6</button>
                    <button v-bind:class="{ int: !this.$store.state.count, int2:this.$store.state.count}"  v-on:mousedown.prevent="putText('*')" >*</button>
                    <button  v-bind:class="{ int: !this.$store.state.count, int2:this.$store.state.count}" v-on:mousedown.prevent="putText('/')" >/</button>

                    <button id="special4"  v-bind:class="{ calc: !this.$store.state.count, calc2:this.$store.state.count}" v-on:mousedown.prevent="special5" >sin(x)</button>
                    <button id="special5"  v-bind:class="{ calc: !this.$store.state.count, calc2:this.$store.state.count}" v-on:mousedown.prevent="special6" >cos(x)</button>
                    <button id="special6"  v-bind:class="{ calc: !this.$store.state.count, calc2:this.$store.state.count}" v-on:mousedown.prevent="special7" > tan(x)</button>
                   <button id="special12"  v-bind:class="{ special: !this.$store.state.count, control2 :this.$store.state.count}" v-on:mousedown.prevent="special12" >!</button>

                   <!-- <button v-bind:class="{ special: !this.$store.state.count, control2 :this.$store.state.count}" v-on:mousedown.prevent="putText('∞')">∞</button>  -->                 

                    
                </div>
                <div class="b1 row">
                    <button v-bind:class="{ int: !this.$store.state.count, int2:this.$store.state.count}" v-on:mousedown.prevent="putText(7)" >7</button>
                    <button v-bind:class="{ int: !this.$store.state.count, int2:this.$store.state.count}" v-on:mousedown.prevent="putText(8)" >8</button>
                    <button v-bind:class="{ int: !this.$store.state.count, int2:this.$store.state.count}"  v-on:mousedown.prevent="putText(9)" >9</button>
                    <button v-bind:class="{ int: !this.$store.state.count, int2:this.$store.state.count}"  v-on:mousedown.prevent="putText('+')" >+</button>
                    <button v-bind:class="{ int: !this.$store.state.count, int2:this.$store.state.count}"  v-on:mousedown.prevent="putText('-')">-</button>
                                                                                                            <!--putText3('In()')-->
                    <button id="special100"    v-bind:class="{ calc: !this.$store.state.count, calc2:this.$store.state.count}" v-on:mousedown.prevent="special100" >In(x)</button>
                    <button   v-bind:class="{ calc: !this.$store.state.count, calc2:this.$store.state.count}" v-on:mousedown.prevent="putText5('log( ,10)')" >log(x)</button>
                    <button  v-bind:class="{ calc: !this.$store.state.count, calc2:this.$store.state.count}" v-on:mousedown.prevent="deriv">dy/dx</button>

                   <button id='delete' v-bind:class="{ control: !this.$store.state.count, control2:this.$store.state.count}"  v-on:mousedown.prevent="cancelEv">C
                    </button>
               </div>
                <div class="b1 row">
                    <button v-bind:class="{ int: !this.$store.state.count, int2:this.$store.state.count}"  v-on:mousedown.prevent="putText('.')" >.</button>
                    <button v-bind:class="{ int: !this.$store.state.count, int2:this.$store.state.count}"  v-on:mousedown.prevent="putText(0)" >0</button>
                    <button v-bind:class="{ int: !this.$store.state.count, int2:this.$store.state.count}"  v-on:mousedown.prevent="putText(',')" >,</button>
                  <button id ="special7" v-bind:class="{ int: !this.$store.state.count, int2:this.$store.state.count}"  v-on:mousedown.prevent="special3"  ><</button>             
                    <button id ="special8" v-bind:class="{ int: !this.$store.state.count, int2:this.$store.state.count}"  v-on:mousedown.prevent="special4"  >></button>

                    <button v-bind:class="{ special: !this.$store.state.count, control2 :this.$store.state.count}" v-on:mousedown.prevent="putText('∫ ')" >∫[x,y]</button> 
                    <button  v-bind:class="{ calc: !this.$store.state.count, calc2:this.$store.state.count}" v-on:mousedown.prevent="solve">Solve</button>
                    <button v-bind:class="{ special: !this.$store.state.count, control2 :this.$store.state.count}" v-on:mousedown.prevent="putText4('lim[   ')">lim</button>
                   <button  v-bind:class="{ control: !this.$store.state.count, control2:this.$store.state.count}" v-on:mousedown.prevent="cancelText" >
                        <span class="material-icons " >
                            backspace
                        </span>
                    </button>

                </div>
                <div class="b1 row">
                    <button v-bind:class="{ control: !this.$store.state.count, control2:this.$store.state.count}"   v-on:mousedown.prevent="chbuttons">
                        <span class="material-icons">
                            sync_alt
                            </span>
                    </button>
                    <button  v-bind:class="{ control: !this.$store.state.count, control2:this.$store.state.count}" v-on:mousedown.prevent="chColor" > 
                        <span class="material-icons">
                       clear_all


                        </span>
                    </button>
                  <!--  <button v-bind:class="{ int: !this.$store.state.count, int2:this.$store.state.count}"  id="special7" v-on:mousedown.prevent="putText('i')" > i </button>-->

            <button v-bind:class="{ int: !this.$store.state.count, int2:this.$store.state.count}"  v-on:mousedown.prevent="putText('x')">x</button>
            <button v-bind:class="{ int: !this.$store.state.count, int2:this.$store.state.count}"  v-on:mousedown.prevent="putText('y')">y</button>
                   <button v-bind:class="{ int: !this.$store.state.count, int2:this.$store.state.count}"  v-on:mousedown.prevent="putText('z')">z</button>

                     <button  v-bind:class="{ control: !this.$store.state.count, control2:this.$store.state.count}"  v-on:mousedown.prevent="moveCaret1">
                        <span class="material-icons">
                            keyboard_arrow_left
                        </span>
                     </button>
                     <button  v-bind:class="{ control: !this.$store.state.count, control2:this.$store.state.count}"  v-on:mousedown.prevent="hide">
                        <span class="material-icons">
                            keyboard_arrow_down
                         </span>
                     </button>
                     <button  v-bind:class="{ control: !this.$store.state.count, control2:this.$store.state.count}" v-on:mousedown.prevent="moveCaret2">
                            <span class="material-icons">
                                keyboard_arrow_right
                            </span>
                     </button>
                     <button v-bind:class="{ control: !this.$store.state.count, control2:this.$store.state.count}" v-on:mousedown.prevent="main" >
                            <span class="material-icons">
                                subdirectory_arrow_left
                            </span>
                    </button>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>  
</template>


<script>
import {bus} from '../main'
import Button from './buttons.vue'
import showRes from './showRes.vue'
import third from './3.vue'
export default {
  components: {
    'showRes':showRes,
    'third':third,
    'buttons':Button
  },
  data() {
      return {
        counter:0,
        dataToPlot:"",
        MySwitch:false,
        comToShow:'showRes',
        toPython:'',
        toshow:true,
        changeButtons:false,
        print: this.$store.state.print,
        output:this.$store.state.output
      }
  },

  mounted(){
    if(window.innerWidth <= 600){
        document.getElementById("input2").setAttribute("readonly", "true");
    }
  },
  beforeUpdate() {
      if (this.$store.state.clean === true) {this.test1()} else {
          this.test2()
      }
  },
methods: {
    test1:function(){
        let e = document.querySelectorAll('#error')
        e.forEach(x => {x.className='output1'})
        let r = document.querySelectorAll('#Print');
        r.forEach(x => {x.className='print1'})
        let o = document.querySelectorAll('#Output')
        o.forEach(x => {x.className='output1'})
    },
    test2:function(){
        let e = document.querySelectorAll('#error')
        e.forEach(x => {x.className='output'})
        let r = document.querySelectorAll('#Print');
        r.forEach(x => {x.className='print'})
        let o = document.querySelectorAll('#Output')
        o.forEach(x => {x.className='output'})
        
    },
    chColor:function(){
        var myNode = document.getElementById("messages");
        while (myNode.firstChild) {
            myNode.removeChild(myNode.firstChild);
        }
    },
    hide:function(){
        this.toshow=false;
        let i = document.getElementById("input2")
        i.blur()
    },
    show:function(){this.toshow=true},
    special1:function(){
        if (this.changeButtons===false) {this.putText('(')}
        else{this.putText('[')}
    },
    special2:function(){
        if (this.changeButtons===false) {this.putText(')')}
        else{this.putText(']')}
    },
    special3:function(){
        if (this.changeButtons===false) {this.putText('<')}
        else{this.putText('⩽')}
    },
    special4:function(){
        if (this.changeButtons===false) {this.putText('>')}
        else{this.putText('⩾')}
    },
    special5:function(){
        if (this.changeButtons===false) {this.putText4('sin()')}
        else{this.putText5('asin()')}
    },
    special6:function(){
        if (this.changeButtons===false) {this.putText4('cos()')}
        else{this.putText5('acos()')}
    },
    special7:function(){
        if (this.changeButtons===false) {this.putText4('tan()')}
        else{this.putText5('atan()')}
    },
    special10:function() {
        if (this.changeButtons===false) {this.putText('π')}
        else{this.putText('i')}
    },
    special11:function(){
        if (this.changeButtons===false) {this.putText('e')}
        else{this.putText2('|()|')}
    },
    special12:function(){
        if (this.changeButtons===false) {this.putText('{}!')}
        else{this.putText2('∞')}
    },
    special100:function(){
        if (this.changeButtons===false) {this.putText3('In()')}
        else{this.putText4('rad')}
    },
    chbuttons:function(){
        if (this.changeButtons===false) {
            this.changeButtons=true
            let x = document.querySelector('#special1')
            let x1 = document.querySelector('#special2')
            let x2 = document.querySelector('#special7')
            let x3 = document.querySelector('#special8')
            let x4 = document.querySelector('#special4')
            let x5 = document.querySelector('#special5')
            let x6 = document.querySelector('#special6')
            let x7 = document.querySelector('#special10')
            let x8 = document.querySelector('#special11')
            let x9=document.querySelector('#special12');
            let x10 = document.querySelector('#special100')
            x.innerText= '['
            x1.innerText= ']'
            x2.innerText='⩽'
            x3.innerText='⩾'
            x4.innerText='asin(x)'
            x5.innerText='acos(x)'
            x6.innerText='atan(x)'
            x7.innerText='i';
            x8.innerText='abs'
            x9.innerText='∞';
            x10.innerText='rad';

        }
        else {
            this.changeButtons=false
            let x10 = document.querySelector('#special100')
            let x = document.querySelector('#special1')
            let x1 = document.querySelector('#special2')
            let x2 = document.querySelector('#special7')
            let x3 = document.querySelector('#special8')
            let x4 = document.querySelector('#special4')
            let x5 = document.querySelector('#special5')
            let x6 = document.querySelector('#special6')
            let x7 = document.querySelector('#special10')
            let x8 = document.querySelector('#special11')
            let x9=document.querySelector('#special12');
            x.innerText= '('
            x1.innerText= ')'
            x2.innerText='<'
            x3.innerText='>'
            x4.innerText='sin(x)'
            x5.innerText='cos(x)'
            x6.innerText='tan(x)'
            x7.innerText='π'
            x8.innerText='e';
            x9.innerText="!"
            x10.innerText='In()'

        }
    },
    solve :function(){
        const chatMessages = document.querySelector('#showtime');
        let i1 = this.$refs.input.value
        let i =this.transformPython(i1)
        chatMessages.scrollTop = chatMessages.scrollHeight;
        let y= ''
        if(i1.includes('z') && i1.includes('y') && i1.includes(',')) {
            y =`solve([${i}], (x, y, z))` }
        else if(i1.includes('y') && i1.includes(',')) {y=`solve([${i}], x, y)`}
        //linsolve([x + y + z - 1, x + y + 2*z - 3 ], (x, y, z))
        else { y = `solve(${i})`}
        const params = new URLSearchParams();
        this.showAnswerPart1('solving... ')
        this.showAnswerPart1(i1)
        params.append(y,'value');
        //console.log(params)
        this.axios.post("https://flaskbro.herokuapp.com/python",y)
        .then(response => {
            if (response.data === "Couldn't regonise problem or there are no solutions, try again") {this.showAnswerPart3("Couldn't regonise problem or there are no solutions, try again")}
            else {
            let r = response.data.toString()/*.toString().split(',')*/
            r= r.replace('[',' ')
            r = r.replace(']',' ')
            r= r.replace('{',' ')
            r = r.replace('}',' ')
            r= r.toString().split(',')
            r.forEach( g => {
                g = this.transformBack(g)
                this.showAnswerPart3(g)
        })}
            //console.log(response.data)
        }).catch((err) => {
            console.log(err)
            this.showAnswerPart3("Had problem with connection to server. Please check your internet connection")
            
            })
    },
    deriv: function() {
        const chatMessages = document.querySelector('#showtime');
        chatMessages.scrollTop = chatMessages.scrollHeight;
        let r1= this.$refs.input.value
        let r =this.transformPython(r1)
        let w = `diff(${r}, x)`
        this.showAnswerPart1(`Calculating derivative of `)
        this.showAnswerPart1(r1)
        this.axios.post("https://flaskbro.herokuapp.com/python",w)
            .then(response => {
            if (response.data === "Couldn't regonise problem or there are no solutions, try again") {
                this.showAnswerPart3("Couldn't regonise problem or there are no solutions, try again")}
            else {
            let r  = response.data
            /*r = math.round(r,5)*/
            this.showAnswerPart2(r)
            }
            }).catch((err) => {
                console.log(err)
                this.showAnswerPart3("Had problem with connection to server. Please check your internet connection")

                })
        /*catch(err) {
            let l = `Derivative of `
            this.showAnswerPart1(l)
            this.showAnswerPart1(r)
            let u = "Couldn't regonise problem or there are no solutions, try again"
            this.showAnswerPart2(u)

        }*/
       
      },
      calcIntegral:function(val) {
          const params = new URLSearchParams();
          const chatMessages = document.querySelector('#showtime');
          let y1 =val
          console.log(y1)
          if (!y1.includes("[")) {
              y1+= "[]";
          }
          //Integral(x^2 ,(x,0,2)).doit()
          y1 = this.transformPython(y1)
          y1 = y1.replace('[',',(x,')
          y1 = y1.replace('∫','Integral(')
          y1 = y1.replace(']',')).doit()')
          console.log(y1)
          this.showAnswerPart1(`Calculating...`)
          this.showAnswerPart1(val)
          params.append(y1,'value');
            this.axios.post("https://flaskbro.herokuapp.com/python",y1)
            .then(response => {
            if (response.data === "Couldn't regonise problem or there are no solutions, try again") {
                this.showAnswerPart3("Couldn't regonise problem or there are no solutions, try again")}
            else {
            let r  = response.data
            //r = math.round(r,5)
            this.showAnswerPart2(r)
            }
            }).catch((err) => {
                console.log(err)
                this.showAnswerPart3("Had problem with connection to server. Please check your internet connection")

                })
      },
      calcLimit:function(val) {
          const chatMessages = document.querySelector('#showtime');
          const params = new URLSearchParams();
          let y1 =val
          y1 =this.transformPython(y1)
          y1 = y1.replace(',',',x,')
          y1 =y1.replace('lim[','Limit(');
          y1 = y1.replace(']',').doit()')
          y1 = y1.replace(/∞/g,"S.Infinity")
          this.showAnswerPart1(`Calculating...`)
          this.showAnswerPart1(val)
          params.append(y1,'value');
            this.axios.post("https://flaskbro.herokuapp.com/python",y1)
            .then(response => {
            if (response.data === "Couldn't regonise problem or there are no solutions, try again") {this.showAnswerPart3("Couldn't regonise problem or there are no solutions, try again")}
            if(response.data==='∞') {this.showAnswerPart2(response.data)}
            else {
            let r  = response.data
            //r = math.round(r,5)
            this.showAnswerPart2(r)}
        }).catch((err) => {
            console.log(err)
            this.showAnswerPart3("Had problem with connection to server. Please check your internet connection")

            })
      },
      main :function() {
        this.comToShow = 'showRes'
        const params = new URLSearchParams();
        const chatMessages = document.querySelector('#showtime');
        chatMessages.scrollTop = chatMessages.scrollHeight;
        let r= this.$refs.input.value
        let c =r 
        let u='';
        console.log(r)
        if (r == '') {}
        else if (r.includes('∫')) {this.calcIntegral(r)}
        else if (r.includes('lim')) {this.calcLimit(r)}
        else {
        r = this.transform(r)
        //console.log(r)
        try { u = math.evaluate(r);
            u = math.round(u,5)
            u=u.toString()
            u=this.transformBack(u)
            r=this.transformBack(r)
            this.showAnswerPart1(c)
            this.showAnswerPart2(u)
            //this.showAnswer(c,u)
        }
        catch(err) {u = "Couldn't regonise problem or there are no solutions, try again";
            this.showAnswerPart1(c)

            this.$refs.input.value=''
            var node1 = document.createElement("LI"); 
            node1.id='error' 
            node1.className = this.$store.state.output;
            var textnode1 = document.createTextNode(u);         
            node1.appendChild(textnode1);    
            node1.onclick=function() {
                        let g = node1.innerText
                        //console.log(g)
                        let x = g
                        let i= document.querySelector('#input2')
                        var caretPos = i.selectionStart
                        var textAreaTxt = i.value;
                        let o =textAreaTxt.slice(0, caretPos);
                        let w = textAreaTxt.slice(caretPos)
                        let r = o + x + w;
                        i.value= r,
                        this.caret = caretPos
                        i.setSelectionRange(caretPos+1,caretPos+1)
                        }            
            document.getElementById("messages").appendChild(node1);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }
       }
      },//Integral(x^2 ,(x,0,2)).doit()
      transformAngle:function(val){
        let r = val;
        r = r.replace("cos(",'cos(deg ')
        r = r.replace("cos(",'cos(deg ')
        r = r.replace("cos(",'cos(deg ')
        r = r.replace("sin(",'sin(deg ')
        r = r.replace("sin(",'sin(deg ')
        r = r.replace("sin(",'sin(deg ')
        r = r.replace("tan(",'tan(deg ')
        r = r.replace("tan(",'tan(deg ')
        r = r.replace("tan(",'tan(deg ')




        return r
      },
      transformPython:function(val) {
        let a =val
        a = a.replace(/i/g,'I')
        a = a.replace('^','**')
        a = a.replace(/In/g,'log')
        a = a.replace(/atan/g,'atan')
        a = a.replace(/asin/g,'asin')
        a = a.replace(/acos/g,'acos')
        a = a.replace('^','**')
        a = a.replace('^','**')
        a = a.replace('^','**')
        a = a.replace('^','**')
        a = a.replace('^','**')
        a = a.replace(/π/g,'math.pi')
        /*2.71828*/
        a = a.replace(/e/g, 'math.e')
        a = a.replace(/{/g,'sympy.factorial(')
        a = a.replace(/}!/g,')')
        a = a.replace(/√/g,'sympy.sqrt')
        a = a.replace(/⩾/g,'>=')
        a = a.replace(/⩽/g,'<=')
        a = a.replace(/slog/g,'sin')
        a=a.replace('|(','Abs(')
        a =a.replace(')|',')')
        a=a.replace('|(','Abs(')
        a =a.replace(')|',')')
        a=a.replace('|(','Abs(')
        a =a.replace(')|',')')
        a = a.replace('lIm','lim')

        //a = a.replace(/logtegral/g,'Integral')
        //a = a.replace(/Intmath.egral/g,'Integral')
        //a = a.replace(/Trumath.e/g,'True')
        return a 
      },
      transformLight:function(val) {
        let r = val
        if (r.includes('π'))  {
            r = r.replace(/π/g,'pi')}
        if (r.includes('√')) {
            r = r.replace(/√/g,'sqrt')
            }
        if (r.includes('In')) {
            r = r.replace(/In/g,'log')
            }
        if (r.includes('{')) {r= r.replace(/{/g,'factorial(')}
        if (r.includes('}!')) {r =r.replace(/}!/g,')')}
        r=r.replace('|(','abs(')
        r =r.replace(')|',')')
        r=r.replace('|(','abs(')
        r =r.replace(')|',')')
        r=r.replace('|(','abs(')
        r =r.replace(')|',')')

        
        return r
      },
      transform:function(val) {
        let r = val
        r=r.replace('|(','abs(')
        r =r.replace(')|',')')
        r=r.replace('|(','abs(')
        r =r.replace(')|',')')
        r=r.replace('|(','abs(')
        r =r.replace(')|',')')
       /* if (this.$store.state.addDeg===true){
            if (r.includes('sin{') || r.includes('cos{') || r.includes('tan{')){
                        r = r.replace(/sin{/g ,"sin(deg ");
                        r = r.replace(/cos{/g ,"cos(deg ");
                        r = r.replace(/tan{/g ,"tan(deg ");
                        r = r.replace(/}/g,")")
            }

        }
        else {
            if (r.includes('sin{')) {r = r.replace(/sin{/g ,"sin( "); r = r.replace(/}/g,")")}
            if (r.includes('cos{')) {r = r.replace(/cos{/g ,"cos( "); r = r.replace(/}/g,")")}
            if (r.includes('tan{')) {r = r.replace(/tan{/g ,"tan( "); r = r.replace(/}/g,")")}

            }*/
        console.log(r)
        if (r.includes('π'))  {
            r = r.replace(/π/g,'pi')
            }
        if (r.includes('√')) {
            r = r.replace(/√/g,'sqrt')
            }
        if (r.includes('In')) {
            r = r.replace(/In/g,'log')
            }
        if (this.$store.state.addDeg===true){
            if (r.includes('acos')) {
                r = r.replace(/acos/g,'(180/pi)*acos')
                }
            if (r.includes('asin')) {
                r = r.replace(/asin/g,'(180/pi)*asin')
                }
            if (r.includes('atan')) {
                r = r.replace(/atan/g,'(180/pi)*atan')
            }
        }

        if (r.includes('{')) {r= r.replace(/{/g,'factorial(')}
        if (r.includes('}!')) {r =r.replace(/}!/g,')')}
        
        console.log(r)
        return r
      },
      transformBack:function(val) {
        let q = val
        q= q.replace(/pi/g,'π')
        q=q.replace(/log/g,'In')
        q= q.replace(/sqrt/g,'√')
        q=q.replace(/Infinity/g,'∞')
        return q
      },
      showAnswerPart1:function(val1){
            const chatMessages = document.querySelector('#showtime');
            var node = document.createElement("LI");
            node.id='Print' ;
            let r = document.querySelectorAll('#Print');
    //let o = document.querySelectorAll('#Output');
            node.className=this.$store.state.print;
            //node.className='print'
            //node.className = (!this.$store.state.count) ? "print":"print1"
            var textnode = document.createTextNode(val1);         
            node.appendChild(textnode); 
                        node.onclick=function() {
                        let g = node.innerText
                        let x = g
                        let i= document.querySelector('#input2')
                        var caretPos = i.selectionStart
                        var textAreaTxt = i.value;
                        let o =textAreaTxt.slice(0, caretPos);
                        let w = textAreaTxt.slice(caretPos)
                        let r = o + x + w;
                        i.value= r,
                        this.caret = caretPos
                        i.setSelectionRange(caretPos+g.length,caretPos+g.length)
                        i.focus()
                } 
            document.getElementById("messages").appendChild(node);
            chatMessages.scrollTop = chatMessages.scrollHeight;

      },
      showAnswerPart2:function(val2){
            const chatMessages = document.querySelector('#showtime');
            this.$refs.input.value=val2
            var node = document.createElement("LI");
            node.id='Output' ;
            let o = document.querySelectorAll('#Output');
            node.className = this.$store.state.output;
            //o.className = (!this.$store.state.count) ? "output":"output1"
            var textnode = document.createTextNode(val2);         
            node.appendChild(textnode); 
            node.onclick=function() {
                        let g = node.innerText
                        //console.log(g)
                        let x = g
                        let i= document.querySelector('#input2')
                        var caretPos = i.selectionStart
                        var textAreaTxt = i.value;
                        let o =textAreaTxt.slice(0, caretPos);
                        let w = textAreaTxt.slice(caretPos)
                        let r = o + x + w;
                        i.value= r,
                        this.caret = caretPos
                        i.setSelectionRange(caretPos+g.length,caretPos+g.length)
                        i.focus()
                        } 
            document.getElementById("messages").appendChild(node);
            chatMessages.scrollTop = chatMessages.scrollHeight;
      },
        showAnswerPart3:function(val2){
            const chatMessages = document.querySelector('#showtime');
            this.$refs.input.value=''
            var node = document.createElement("LI");
            node.id='Output' ;
            let o = document.querySelectorAll('#Output');
            node.className = this.$store.state.output;
            //o.className = (!this.$store.state.count) ? "output":"output1"
            var textnode = document.createTextNode(val2);         
            node.appendChild(textnode); 
            node.onclick=function() {
                        let g = node.innerText
                        //console.log(g)
                        let x = g
                        let i= document.querySelector('#input2')
                        var caretPos = i.selectionStart
                        var textAreaTxt = i.value;
                        let o =textAreaTxt.slice(0, caretPos);
                        let w = textAreaTxt.slice(caretPos)
                        let r = o + x + w;
                        i.value= r,
                        this.caret = caretPos
                        i.setSelectionRange(caretPos+g.length,caretPos+g.length)
                        i.focus()
                        } 
            document.getElementById("messages").appendChild(node);
            chatMessages.scrollTop = chatMessages.scrollHeight;
      },

      putText:function(val) {
            //this.counter +=1
            let i= this.$refs.input
            //if (this.counter ==1) {i.focus()}
            i.focus()
            let x = val 
            var caretPos = this.$refs.input.selectionStart
            var textAreaTxt = this.$refs.input.value;
            let o =textAreaTxt.slice(0, caretPos);
            let w = textAreaTxt.slice(caretPos)
            let r = o + x + w;
            this.$refs.input.value= r,
            this.caret = caretPos
            this.$refs.input.setSelectionRange(caretPos+1,caretPos+1)
        },
        putText2: function(val) {
            this.counter +=1
            let i= this.$refs.input
            if (this.counter ==1) {i.focus()}
            let x = val 
            var caretPos = this.$refs.input.selectionStart
            var textAreaTxt = this.$refs.input.value;
            let o =textAreaTxt.slice(0, caretPos);
            let w = textAreaTxt.slice(caretPos)
            let r = o + x + w;
            this.$refs.input.value= r,
            this.caret = caretPos
            this.$refs.input.setSelectionRange(caretPos+2,caretPos+2)
        },
        putText3: function(val) {
            this.counter +=1
            let i= this.$refs.input
            if (this.counter ==1) {i.focus()}
            let x = val 
            var caretPos = this.$refs.input.selectionStart
            var textAreaTxt = this.$refs.input.value;
            let o =textAreaTxt.slice(0, caretPos);
            let w = textAreaTxt.slice(caretPos)
            let r = o + x + w;
            this.$refs.input.value= r,
            this.caret = caretPos
            this.$refs.input.setSelectionRange(caretPos+3,caretPos+3)
        },
        putText4: function(val) {
            this.counter +=1
            let i= this.$refs.input
            if (this.counter ==1) {i.focus()}
            let x = val 
            var caretPos = this.$refs.input.selectionStart
            var textAreaTxt = this.$refs.input.value;
            let o =textAreaTxt.slice(0, caretPos);
            let w = textAreaTxt.slice(caretPos)
            let r = o + x + w;
            this.$refs.input.value= r,
            this.caret = caretPos
            this.$refs.input.setSelectionRange(caretPos+4,caretPos+4)
        },
        putText5: function(val) {
            this.counter +=1
            let i= this.$refs.input
            if (this.counter ==1) {i.focus()}
            let x = val 
            var caretPos = this.$refs.input.selectionStart
            var textAreaTxt = this.$refs.input.value;
            let o =textAreaTxt.slice(0, caretPos);
            let w = textAreaTxt.slice(caretPos)
            let r = o + x + w;
            this.$refs.input.value= r,
            this.caret = caretPos
            this.$refs.input.setSelectionRange(caretPos+5,caretPos+5)
        },
        cancelText:function() {
            let i = this.$refs.input
            var textAreaTxt = i.value;
            var caretPos = this.$refs.input.selectionStart
            let o =textAreaTxt.substring(0, caretPos-1);
            let w = textAreaTxt.substring(caretPos)
            let r = o + w;
            this.$refs.input.value= r,
            this.caret= caretPos,
            this.$refs.input.setSelectionRange(caretPos-1,caretPos-1)
        },
        moveCaret1:function() {
            let i = this.$refs.input;
            this.$refs.input.setSelectionRange(i.selectionStart-1,i.selectionStart-1)
        },  
        moveCaret2:function() {
            let i = this.$refs.input;
            this.$refs.input.setSelectionRange(i.selectionStart+1,i.selectionStart+1)
        },
        space:function() {
            let i = this.$refs.input
            var textAreaTxt = i.value;
            var caretPos = this.$refs.input.selectionStart
            let o =textAreaTxt.substring(0, caretPos);
            let y = o + " ";
            let w = textAreaTxt.substring(caretPos)
            let r = y + w;
            this.$refs.input.value= r,
            this.caret=caretPos
            this.$refs.input.setSelectionRange(y.length,y.length)
        },

        cancelEv:function() {
            this.$refs.input.value= "";
        }, 
        change: function() {
        console.log('ss')
    },
  }
}
</script>
<style scoped>
    @import "./home.css";

</style>


