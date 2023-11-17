const app = Vue.createApp({
data(){
  return{
    result: 0,
  }
},
watch:{
  resultfr(){
    console.log("5 secs waiting progress");
    const that = this;
    setTimeout(function(){
      that.result=0;
    },5000)
  }
},
computed:{
  resultfr(){
    if(this.result < 37){
      return "Not there yet";
    }
    else if(this.result == 37){
      return this.result;
    }
    else{
      return "Too much!"; 
    }
  }
},
methods: {
  numberAdder(num){
    this.result +=num;
  }
},

})
app.mount("#assignment");