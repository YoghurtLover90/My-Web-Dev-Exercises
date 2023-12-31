const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: "",
      //fullName: ""
    };
  },
  watch:{
    counter(value){
      if(value >= 50){
        const that = this;
        setTimeout(function(){
          that.counter = 0;
        },2000);
      }
    }
    /* name(value){
      console.log("Firstname");
      if(value === ""){
        this.fullName = "";
      }
      else
      {
        this.fullName = value + " " + this.lastName;
      }
      
    },
    lastName(value){
      console.log("Lastname");
      if(value === ""){
        this.fullName = "";
      }
      else
      {
        this.fullName = this.name + " " + value;
      }
    } */
  },
  computed: {
    fullName(){
      
      if(this.name === "" || this.lastName === ""){
        return "";
      }
      return this.name + " " + this.lastName;
    }
  },
  methods: {
    outputFullname(){
      
    },
    resetInput(){
      this.name = "";
      this.lastName="";
    },
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    }
  }
});

app.mount('#events');
