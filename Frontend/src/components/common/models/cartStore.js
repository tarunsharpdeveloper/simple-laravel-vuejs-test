
const state = {
    overlay: false,
    lastListId: 3,
    lastCardId: 5,
    currentData: null,
    lists: [
        
      ],
      cards: [
       
    ],
};

const mutations = {
    createNewList(state, payload) {
      state.lastListId++;
      const list = {
        id: state.lastListId,
        name: payload,
      };
      state.lists.push(list);
    },

    createNewCardList(state, payload) {
      let list = {};
      for(let i=0; i<payload.length; i++){
        list = {
          id: payload[i].id,
          name: payload[i].name,
        };

        state.lists.push(list);
      }

      
    },
    createNewCard(state, payload) {
      state.id++;
      const card = {
        listId: payload.listId,
        id: payload.id,
        name: payload.name,
        description: payload.description
      };
      state.cards.push(card);
    },
    toggleOverlay(state) {
      state.overlay = !state.overlay;
    },
    openForm(state, payload) {
      console.log("payload = ", JSON.stringify(payload));
      state.currentData = payload;
    },
    saveCard(state, payload) {
      state.cards = state.cards.map((card) => {
        if (card.id === payload.id) {
          return Object.assign({}, card, payload);
        }
        return card;
      });
    },
    deleteCard(state, payload) {
      const indexToDelete = state.cards
        .map((card) => card.id)
        .indexOf(payload.id);
      state.cards.splice(indexToDelete, 1);
    },

    deleteList(state, payload) {
        const indexToDelete = state.lists
          .map((list) => list.id)
          .indexOf(payload);

        state.lists.splice(indexToDelete, 0);
      },
    
    resetList(state){
      state.lists = [];
    }
    
  };

  const actions = {
    createList(context, payload) {
      context.commit("createNewList", payload);
    },
    createCard(context, payload) {
      context.commit("createNewCard", payload);
    },
    toggleOverlay(context) {
      context.commit("toggleOverlay");
    },
    openForm(context, payload) {
      context.commit("openForm", payload);
    },
    saveCard(context, payload) {
      context.commit("saveCard", payload);
    },
    deleteCard(context, payload) {
      context.commit("deleteCard", payload);
    },
    deleteList(context, payload){
      context.commit("deleteList", payload);
    },
    createNewCardList(context, payload){
      context.commit('createNewCardList', payload);
    },
    resetallList(context){
      context.commit('resetList');
    }
    
  };

  const getters = {
    lastListId(state) {
      return state.lastListId;
    },
    lastCardId(state) {
      return state.lastCardId;
    },
    lists(state) {
      return state.lists;
    },
    cards(state) {
      return state.cards;
    },
    overlay(state) {
      return state.overlay;
    },
    currentData(state) {
      return state.currentData;
    },
  };

export default {
    state,
    mutations,
    actions,
    getters
};
