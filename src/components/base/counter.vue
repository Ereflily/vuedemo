<template>
  <div class="counter-component">
    <div class="counter-btn" @click="mins"> - </div>
    <div class="counter-show">
      <input type="text" v-model="num" @keyup="fixNum">
    </div>
    <div class="counter-btn" @click="add"> + </div>
  </div>
</template>
<script>
  export default{
    props : {
      max : {
        type : Number,
        default : 5
      }
    },
    data(){
      return {
        num : 1
      }
    },
    watch : {
      num(val){
        this.$emit('counter', this.num)
      }
    },
    methods : {
      add(){
        if(this.num == this.max)return
        this.num++
      },
      mins(){
        if(this.num == 1)return
        this.num--
      },
      fixNum(){
        if(typeof this.num === 'string'){
           this.num = Number(this.num.replace(/\D+/g, ''))
        }
        if(this.num > this.max)this.num = this.max
        if(this.num < 1)this.num = 1
      }
    }
  }
</script>
<style scoped>
  .counter-component {
    position: relative;
    display: inline-block;
    overflow: hidden;
    vertical-align: middle;
  }
  .counter-show {
    float: left;
  }
  .counter-show input {
    border: none;
    border-top: 1px solid #e3e3e3;
    border-bottom: 1px solid #e3e3e3;
    height: 23px;
    line-height: 23px;
    width: 30px;
    outline: none;
    text-indent: 4px;
  }
  .counter-btn {
    border: 1px solid #e3e3e3;
    float: left;
    height: 25px;
    line-height: 25px;
    width: 25px;
    text-align: center;
    cursor: pointer;
  }
  .counter-btn:hover {
    border-color: #4fc08d;
    background: #4fc08d;
    color: #fff;
  }

</style>
