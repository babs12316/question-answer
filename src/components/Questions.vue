<template>
<div class="home">
    <h2>Customer Alliance Form </h2>
    <form @submit.prevent="handleSubmit">
        <div class="question">
            <div class="qnumber">1.</div>
            <div class="qtext">How do you feel today? </div>
            <div id="options">
                <div v-on:click="selected(1,'How can we improve?','How do you feel today?','1')" :class="{ active : active_el == 1 }" class="circle">1</div>
                <div v-on:click="selected(2,'How can we improve?','How do you feel today?','2')" :class="{ active : active_el == 2 }" class="circle">2</div>
                <div v-on:click="selected(3,'What have we done better!','How do you feel today?','3')" :class="{ active : active_el == 3 }" class="circle">3</div>
                <div v-on:click="selected(4,'What have we done better!','How do you feel today?','4')" :class="{ active : active_el == 4 }" class="circle">4</div>
                <div v-on:click="selected(5,'What have we done better!','How do you feel today?','5')" :class="{ active : active_el == 5 }" class="circle">5</div>
            </div>
            <div v-if="!isHidden">
                <textarea cols="30" v-model="feedback" />
            </div>
   </div>   
  
      <div class="question" id="qdesktop" >
        <div class="qnumber">2.</div>
        <div class="qtext">Your age </div>
       <div id="ansoptions">
         <span v-on:click="ageselected('Your age','&lt;20')">&lt;20</span>
         <span v-on:click="ageselected('Your age','20-29')">20&#45;29</span>
         <span v-on:click="ageselected('Your age','30-39')">30&#45;39</span>
         <span v-on:click="ageselected('Your age','40-49')">40&#45;49</span>
         <span v-on:click="ageselected('Your age','50-59')">50&#45;59</span>
         <span v-on:click="ageselected('Your age','60-69')">60&#45;69</span>
         <span v-on:click="ageselected('Your age','70-79')">70&#45;79</span>
         <span v-on:click="ageselected('Your age','80+')">80+</span>
       </div>
      </div>
        <div class="question" id="qmobile" >
        <div class="qnumber">2.</div>
        <div class="qtext">Your Mobile </div>
       <div id="ansoptions-mobile">
         <div>
         <span >&lt;20</span>
         <span>20&#45;29</span>
         </div>
         <div>
         <span>30&#45;39</span>
         <span>40&#45;49</span>
         </div>
         <div>
         <span>50&#45;59</span>
         <span>60&#45;69</span>
         </div>
         <div>
         <span>70&#45;79</span>
         <span>80+</span>
         </div>
       </div>
      </div>
      <div class="question">
        <div class="qnumber">3.</div>
        <div class="qtext">Your password </div>
          <input id="fpass1" v-model="$v.passwordValue.$model" type="password">
          <p class="error" v-if="!$v.passwordValue.required">The password field is required</p>
          <p class="error" v-if="!$v.passwordValue.strongPassword">Passwords needs to have a letter, a number</p></div>
          <div class="question">
            <div class="qnumber">4.</div>
            <div class="qtext">Your email </div>
              <input id="femail" v-model="$v.emailValue.$model" type="email">
              <p class="error" v-if="!$v.emailValue.required">this field is required</p>
              <p class="error" v-if="!$v.emailValue.email">Needs to be a valid email.</p>
            </div>
         <div> <button class="submit" type="submit" >Submit!</button> </div>
          <div id="result"  v-if="!isResultHidden">
            <span id="qselected">{{qselected}}</span><br/>
            <span id="ansselected">{{ansselected}}</span><hr/>
            <span>Date of experience<br/>{{new Date().toLocaleString()}}</span>
          </div>
     </form>
        <p v-if="errors" class="error">The form above has errors,
          <br>please correct all errors
        </p>
        <p v-else-if="formTouched && uiState === 'submit clicked'" class="error">The form above is empty,
          <br>Please fill all required fields!
        </p>
        <p v-else-if="uiState === 'form submitted'" class="success">Your form is submitted!</p>
        </div>
</template>

<script>
import {
    required,
    email
} from 'vuelidate/lib/validators';
export default {
    name: 'HelloWorld',
    props: {
        msg: String
    },
    data() {
        return {
            isHidden: true,
            isActive: false,
            feedback: '',
            qselected: '',
            ansselected: '',
            isResultHidden: true,
            active_el: 0,
            name: '',
            age: 0,
            submitStatus: null,
            uiState: "submit not clicked",
            formTouched: '',
            errors: false,
            passwordValue: '',
            emailValue: null

        }
    },
    validations: {
       emailValue: {
            required,
            email
        },
        passwordValue: {
            required,
            strongPassword(passwordValue) {
                return (
                    /[a-z]/.test(passwordValue) && // checks for a-z
                    /[0-9]/.test(passwordValue) // checks for 0-9

                )
            }
        }
    },
    methods: {
        selected: function (el, msg, q, ans) {
            this.isHidden = false;
            this.feedback = msg;
            this.qselected = q;
            this.ansselected = ans;
            this.isResultHidden = false;
            this.active_el = el;

        },
        ageselected: function (q, age) {
            this.qselected = q;
            this.ansselected = age;
            this.isResultHidden = false;
        },
        handleSubmit() {
            this.formTouched = !this.$v.$anyDirty;
            this.errors = this.$v.$invalid;
            this.uiState = "submit clicked";
            if (this.errors === false && this.formTouched === false) {
                this.uiState = "form submitted";
            }

        }
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.circle {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    font-size: 15px;
    font-weight: bold;
    color: rgba(209, 209, 209, 1);
    line-height: 50px;
    text-align: center;
    background: rgba(238, 238, 238, 1);
    float: left;
    margin-top: 1%;
    margin-right: 1%;
}

.circle:hover {
    cursor: pointer;
}

.qtext {
    font-size: 20px;
    font-weight: 500;
    color: slategrey;
    margin-bottom: 10px;
}

textarea {
    border-radius: 5px;
    display: inline-flex;
    margin-top: 1em;
}

.qnumber {
    font-size: 20px;
    color: #4166b4;
    font-weight: bold;
}

.question {
    margin-top: 1%;
    float: left;
    width: 100%;
}

.circle:focus {
    background: rgba(162, 225, 220);
}

#options {
    display: inline-flex;
}

#ansoptions {
    border: 1px solid #ccc;
    padding: 15px;
    display: inline-block;
    border-radius: 5px;
}

#ansoptions:hover {
    cursor: pointer;
}

#ansoptions span {
    border-right: 1px solid #ccc;
    padding: 15px;
}

#ansoptions span:last-child {
    border-right: none;
}

input {
    padding: 10px;
    border-radius: 7px;
    width: 550px;
}

.submit {
    background-color: #46c4ba;
    color: #fff;
    box-shadow: none;
    width: 100px;
    height: 50px;
    border-radius: 10px;
    margin-top: 50px;
    font-size: 18px;
}

#ansoptions-mobile div {
    margin: auto;
    margin-bottom: 5%;
    width: 200px;
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 10px;
    float: left;
}

#ansoptions-mobile span {
    padding: 11px;
}

#ansoptions-mobile span:nth-child(1) {
    padding-right: 20%;
    border-right: 1px solid #ccc;
}

#ansoptions-mobile div:nth-child(1) span:nth-child(1) {
    border-right: 1px solid #ccc;
    padding-left: 25px;
}

#ansoptions-mobile span:nth-child(2) {
    padding-left: 20%;
}

.active {
    background-color: rgba(162, 225, 220, 1);
    color: rgba(195, 165, 164, 1);
}

#result {
    float: right;
    border: 1px solid #ccc;
    margin-top: -530px;
    margin-left: 700px;
    position: fixed;
    padding: 50px;
    border-radius: 30px;
    background-color: rgba(244, 244, 244, 1);
    -webkit-box-shadow: 0px 3px 19px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 3px 19px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 3px 19px 0px rgba(0, 0, 0, 0.75);
}

#result hr {
    border-color: red;
}

.error {
    color: red;
}

#qdesktop,
#qmobile {
    display: none
}

@media (max-width: 767px) {
    input {
        width: 80%;
    }

    #qmobile {
        display: initial
    }

}

@media (max-width: 991px) {
    #result {
        display: none !important
    }
}

@media (min-width: 768px) {
    #qdesktop {
        display: initial
    }

}

@media (min-width: 484px) and (max-width: 979px) {
    #ansoptions-mobile div {
        width: 325px;
    }

    #ansoptions-mobile span:nth-child(1) {
        padding-right: 28%;
    }
}
</style>
