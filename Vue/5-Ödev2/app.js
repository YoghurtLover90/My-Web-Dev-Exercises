const app = Vue.createApp({
  data(){
    return{
      text: "",
      text2: ""
    }
  },
  methods: {
    alertFunc(){
      alert("Hallo leute meine mama hat mir einfach erlaub das ich kola trinken darf");
    },
    writeFunc(event){
      this.text = event.target.value;
    },
    writeFunc2(event){
      this.text2 = event.target.value;
    }

  },
})

app.mount("#assignment");