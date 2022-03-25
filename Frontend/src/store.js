import Vue from 'vue';
import Vuex from 'vuex';
import cartStore from '@/components/common/models/cartStore';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        cartStore,
    },
    plugins: [createPersistedState()]
});
