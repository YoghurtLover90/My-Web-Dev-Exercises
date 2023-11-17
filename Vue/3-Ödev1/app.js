const app = Vue.createApp({
    data(){
        return{
            myName: "Yoğurt Yoğurtoğlu",
            myAge: 1452,
            randomNumber: Math.random(), 
            myImg: "https://tr.wikipedia.org/static/images/icons/wikipedia.png",

        }
    },
    methods: {
        AgeP5(){
            return this.myAge + 5;
        }
    }
});
app.mount("#assignment");