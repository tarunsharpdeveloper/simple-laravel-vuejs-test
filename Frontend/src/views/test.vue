<template>
    <div>
        <input type="number" v-model="num1" id="num1"  /> <br/>
        <input type="number" v-model="num2" id="num2" /><br/>

      
        sum : <span class="sum" v-text="sum"></span> 
        Product : <div class="multiplication" v-text="product"> </div>
      
  </div>
</template>
<script>

// import VueDraggableNext from 'vuedraggable'
// import CardsList from "@/components/CardList.vue"
// import CardTest from "@/components/CardTest.vue";
// import OverLay from "@/components/OverLay";
// import PopupTest from "@/components/PopupTest";
// import cartServices from '@/services/api/Cars';
export default {
  name: 'App',

  data(){
        return {
            num1:'',
            num2:''
        }
    },

    methods:{
        updateNumbers(){
            this.num1 = num1
            this.num2 = num1
  
        }
    },

    computed:{
        sum(){
           return Number(this.num1) + Number(this.num2);
           
        },
        product(){
             return this.num1 * this.num2;
        }
    },
    
};
</script>
