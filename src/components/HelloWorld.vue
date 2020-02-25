<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Customer Alliance Form </h2>
   <div class="question">  
   <div class="qnumber">1.</div>
    <div class="qtext">How do you feel today? </div>
    <div id="options">
      <div v-on:click="greet" class="circle">1</div>
     <div class="circle">2</div>
     <div class="circle">3</div>
      <div class="circle">4</div>
      <div class="circle">5</div>
      </div>
      <div v-if="!isHidden" >
      <textarea cols="30" placehoder="value">
        Tell us how can we improve?
</textarea>
      </div>
   </div>   
      <div class="question">
        <div class="qnumber">2.</div>
        <div class="qtext">Your age </div>
      </div>
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
   greet: function () {
      alert("hello");
      this.isHidden = false;
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
</style>
