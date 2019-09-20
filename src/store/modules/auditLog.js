
import API from '@/api';
import axios from 'axios'
const baseUrl = `${API}/auditlog/`


const state = {
  data: [],
  isLoading: false,
  error: null,
}

const getters = {
  data: state => state.data,
  isLoading: state => state.isLoading,
  error: state => state.error,
}

const actions = {
  async getAuditLogByFavoriteId({ commit }, query) {
    commit('setState', { isLoading: true })
    try {
      const { data } = await axios.get(`${baseUrl}?${query}`)
      commit('setState', { data, isLoading: false })
    }
    catch (error) {
      commit('setState', { error, isLoading: false })
    }
  },
  resetState({ commit }) {
    commit('setState', { data: [], isLoading: false, error: null })
  },
}

const mutations = {
  setState(state, payload) {
    Object.assign(state, payload);
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
