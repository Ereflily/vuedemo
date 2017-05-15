<template>
  <div class="chooser-component">
    <ul class="chooser-list">
      <li v-for="(item,index) in lists"
          :class="{active : nowIndexList.includes(index)}"
          @click="multCheck(index)"
      >{{ item.label }}</li>
    </ul>
  </div>
  </div>
</template>
<script>
  export default{
    props : {
      lists : {
        type : Array,
      }
    },
    data(){
      return {
        nowIndexList : [0]
      }
    },
    methods : {
      multCheck(index){
        if(this.nowIndexList.includes(index)){
          if(this.nowIndexList.length == 1)return
          this.nowIndexList = this.nowIndexList.filter((value) => {
              return value != index
          })
        }else{
          this.nowIndexList.push(index)
        }
        this.$emit('mult-choose', this.nowIndexList)
      }
    }
  }
</script>
<style scoped>
  .chooser-component {
    position: relative;
    display: inline-block;
  }
  .chooser-list li{
    display: inline-block;
    border: 1px solid #e3e3e3;
    height: 25px;
    line-height: 25px;
    padding: 0 8px;
    margin-right: 5px;
    border-radius: 3px;
    text-align: center;
    cursor: pointer;
  }
  .chooser-list li.active {
    border-color: #4fc08d;
    background: #4fc08d;
    color: #fff;
  }
</style>
