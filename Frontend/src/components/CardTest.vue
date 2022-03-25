<template>

  <input
    class="input-card"
    type="text"
    placeholder="Create a Card"
    v-model="cardName"
    @keyup.enter="createCard"
  />

</template>

<script>
import { mapState } from "vuex";
import cartServices from '@/services/api/Cars';
export default {
  props: ["listId"],
    data() {
      return {
        cardName:"",
        description:""
      }
    },

    computed: {
       ...mapState({
         getCardIndex: state => state.cartStore,
      })
    },
  mounted: function() {
     
  },
  methods: {
    
    createCard() {
      let idnumber = 0;
      if(this.getCardIndex.cards.length == 0){
          idnumber = 1;
      } else {
          let lastIndex = this.getCardIndex.cards.length;
          idnumber = this.getCardIndex.cards[lastIndex-1].id + 1;
      }
      if (this.cardName !== "") {
        const card = {
          listId: this.listId,
          id:idnumber,
          name: this.cardName,
          description: this.description,
        };


        let reqHeaders = {
            headers: { 'Content-Type': 'application/json' }
        };

        let reqPayLoad = {
             listId: this.listId,
             name: this.cardName,
        };

      cartServices.createCard(reqPayLoad, reqHeaders).then((rsp)=>{
          if(rsp.data.message == "card create successfully" 
              && rsp.data.success == true
            ){
              
          }
      });
        
        this.$store.dispatch("createCard", card);
        this.cardName = "";
      }

      
    },
  },
};
</script>

<style>
.input-card {
  position: relative;
  background-color: white;
  min-height: 30px;
  width: 100%;
  display: flex;
  align-items: center;
  border-radius: 5px;
  padding: 10px;
  word-break: break-all;
  font-size: 16px;
}
</style>