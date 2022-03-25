<template>
  <div id="app">
      <main class="list-container">
    <OverLay />
    <PopupTest />

    <section class="list-wrapper">
      <span>
    
      <draggable
        :options="{ group: 'lists' }"
        group="lists"
        ghostClass="ghost"
        class="list-draggable"
      >
        <div class="list-card" v-for="(list, index) in lists" :key="index">
          <label class="list-header">{{ list.name }} <a @click="removeCard(list.id,index)"><img src="@/assets/delete.png" alt="delete button" style="width:20px; margin-left: 161px;"/></a></label>
          <div class="list-content">
            <CardsList :listId="list.id" :listName="list.name" />
          </div>
          <div class="list-footer">
            <CardTest :listId="list.id" />
          </div>
        </div>
      </draggable>
  </span>
      <input
        type="text"
        class="input-new-list"
        placeholder="Create a List"
        v-model="listName"
        @keyup.enter="createList"
      />
      <div style="position: absolute; z-index: 999; text-align:center; top:300px; left:600px;" >
      <pulse-loader :loading="loading" :color="color"></pulse-loader>

      </div>
    </section>
      
  </main>
  
  </div>
</template>
<script>

import VueDraggableNext from 'vuedraggable'
import CardsList from "@/components/CardList.vue"
import CardTest from "@/components/CardTest.vue";
import OverLay from "@/components/OverLay";
import PopupTest from "@/components/PopupTest";
import cartServices from '@/services/api/Cars';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
import PacmanLoader from 'vue-spinner/src/ScaleLoader.vue'
export default {
  name: 'App',
    components: {
    draggable: VueDraggableNext,
    CardTest,
    OverLay,
    PopupTest,
    CardsList,
     PulseLoader,
     PacmanLoader
  },
  data() {
    return {
      listName: "",
      listdata:"",
      Token:"",
      date:"",
      color:"white",
      loading:false
    };
  },

  mounted: function() {
       if (this.$route.query.token) {
          let token = this.$route.query.token;
          this.token = token;
       }
      this.getListData();
    
  },
  methods: {
    createList() {

      if (this.listName !== "") {

        this.loading=true;

          let reqHeaders = {
            headers: {
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + this.token
            }
          };

            let reqPayLoad = {
                name: this.listName,
            };
        cartServices.createList(reqPayLoad, reqHeaders).then(rsp => {
            if(rsp.data.success == true && rsp.data.message == "list create successfully"){
                this.getListData();
                 this.loading=false;
            } else {
               this.loading=false;
               this.$awn.alert("User not valid");
            }
        });
        this.$store.dispatch("createList", this.listName);
        this.listName = "";
      }
    },

    getListData(){
      this.loading=true;
       let reqHeaders = {
        headers: {
          'Content-Type': 'application/json',
           Authorization: 'Bearer ' + this.token
        }
      };
        cartServices.getAllList(reqHeaders).then(rsp => {
          if(rsp.data.success == true &&
            rsp.data.message == 'list get successfully'){
               this.loading=false;
               this.listdata = rsp.data.data;
            } else {
              this.loading=false;
              this.$awn.alert("User not valid");
            }
          this.$store.dispatch('resetallList');
            setTimeout(() => {
               this.$store.dispatch("createNewCardList", this.listdata);
            }, 0);
        });
    },

    removeCard(id,index){    
              let reqHeaders = {
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: 'Bearer ' + this.token
                }
           };

            let reqPayLoad = {
                id: id
          };
        cartServices.deleteList(reqPayLoad,reqHeaders).then((rsp)=>{
            if(rsp.data.message == "list remove successfully" && rsp.data.success == true){
                  this.$store.dispatch("deleteList", index);
            }
            
            this.getListData();
            
        });
        
      }
  },
  computed: {
    lists() {
        return this.listdata;
        //return this.$store.getters["lists"];
    },
  },
};
</script>

<style>
.list-container {
  position: relative;
  display: flex;
  width: 100vw;
  height: 100vh;
  border: 1px;
  z-index: 10;
}

.list-wrapper {
  position: relative;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  min-width: 100vw;
  height: 100vh;
  padding: 20px;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  background-image: url("./assets/mainbackground.jpg"); 
  /*background-color: #3d8989; */
  gap: 20px;
  overflow-x: scroll;
  overflow-y: hidden;
}

.ghost {
  opacity: 0.5;
}

.list-draggable {
  display: flex;
  gap: 20px;
}

.input-new-list {
  display: flex;
  height: 30px;
  padding: 10px;
  border-radius: 5px;
  background-color: rgba(235, 236, 240, 0.5);
  min-width: 260px;
}

.input-new-list::placeholder {
  color: white;
}

.list-card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 300px;
  height: auto;
}

.list-header {
  position: relative;
  display: flex;
  justify-content: center;
  word-break: break-all;
  align-items: center;
  min-width: 280px;
  max-width: 280px;
  line-height: 50px;
  padding: 0px 10px 0px 10px;
  background-color: rgba(235, 236, 240, 1);
  border-radius: 10px 10px 0px 0px;
  color: rgba(24, 43, 77, 1);
  user-select: none;
}

.list-content {
  overflow-y: scroll;
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 280px;
  max-width: 280px;
  height: auto;
  background-color: rgba(235, 236, 240, 1);
  padding: 0px 10px 0px 10px;
  box-shadow: 1.5px 1.5px 1.5px 0.1px rgba(255, 255, 255, 0.1);
  color: rgba(24, 43, 77, 1);
}

.list-footer {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 280px;
  background-color: rgba(235, 236, 240, 1);
  border-radius: 0px 0px 10px 10px;
  color: white;
  border-top: 0.5px solid rgba(255, 255, 255, 0.25);
  padding: 0px 10px 10px 10px;
}
</style>