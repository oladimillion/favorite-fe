import Vue from 'vue'
import Vuex from 'vuex'

import detail from './modules/detail'
import favorites from './modules/favorites'
import form from './modules/form'
import auditLog from './modules/auditLog'
import category from './modules/category'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    detail,
    favorites,
    form,
    auditLog,
    category,
  },
  strict: debug,
});
