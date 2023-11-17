const app = Vue.createApp({
    data(){
        return{
            courseGoalA: "Finish the course and learn Vue ",
            courseGoalB: "<h2>SLAM the course and MASTER Vue </h2>",
            vueLink: "https://vuejs.org"
        };
    },
    methods: {
        outputGoal(){
            const randomNumber = Math.random();
            if(randomNumber < 0.5){
                return this.courseGoalA + randomNumber;
            }
            else{
                return  this.courseGoalB + randomNumber;
            }
        }
    },
});

app.mount("#user-goal");