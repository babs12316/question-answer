<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Customer Alliance Form </h2>
   <div class="question">  
   <div class="qnumber">1.</div>
    <div class="qtext">How do you feel today? </div>
    <div id="options">
      <div v-on:click="selected" class="circle">1</div>
     <div v-on:click="selected"   class="circle">2</div>
     <div v-on:click="selected" class="circle">3</div>
      <div v-on:click="selected" class="circle">4</div>
      <div v-on:click="selected" class="circle">5</div>
      </div>
      <div v-if="!isHidden" >
      <textarea cols="30" placehoder="value">
        Tell us how can we improve?
</textarea>
      </div>
   </div>   
      <div class="question" v-responsive="'hidden-xs'">
        <div class="qnumber">2.</div>
        <div class="qtext">Your age </div>
       <div id="aoptions">
         <span>&lt;20</span>
         <span>20&#45;29</span>
         <span>30&#45;39</span>
         <span>40&#45;49</span>
         <span>50&#45;59</span>
         <span>60&#45;69</span>
         <span>70&#45;79</span>
         <span>80+</span>
       </div>
      </div>
      <div class="question">
        <div class="qnumber">3.</div>
        <div class="qtext">Your password </div>
         <input type="password" />
      </div>
      <div class="question">
        <div class="qnumber">4.</div>
        <div class="qtext">Your email </div>
         <input type="text" />
      </div>
  <div><button class="submit">Submit</button></div>
  </div>
  
  
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
  return {
     isHidden: true
    };
 },
  methods:{
   selected: function () {
      alert("hello");
      this.isHidden = false;
      this.isActive = !this.isActive;
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.circle {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    font-size: 15px;
    font-weight: bold;
    color: rgba(209,209,209,1);
    line-height: 50px;
    text-align: center;
    background: rgba(238,238,238,1);
    float: left;
    margin-top: 1%;
    margin-right: 1%;
}
.qtext{
  font-size: 20px;
  font-weight: 500;
  color:slategrey;
  margin-bottom: 10px;
}
textarea{
  border-radius: 5px;
  display: inline-flex;
  margin-top: 1%;
}
.qnumber{
  font-size: 20px;
    color: #4166b4;
    font-weight: bold;
}
.question{
  margin-top: 1%;
  float: left;
    width: 100%;
}
.circle:focus{
  background:rgba(162,225,220);
}
#options{
  display: inline-flex;
}
#aoptions{
  border:1px solid #ccc;
  padding:10px;
  display: inline-block;
  border-radius: 5px;
}
#aoptions span{
  border-right:1px solid #ccc;
  padding: 10px;
}
#aoptions span:last-child{
  border-right:none;
} 
input{
  padding: 10px;
    border-radius: 7px;
    width: 35%;
}
.submit{
  background-color: #46c4ba;
    color: #fff;
    box-shadow: none;
    width: 100px;
    height: 50px;
    border-radius: 10px;
    margin-top: 50px;
    font-size: 18px;
    
}

</style>
