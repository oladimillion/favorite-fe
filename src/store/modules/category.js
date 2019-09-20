
import API from '@/api'
import axios from 'axios'
const baseUrl = `${API}/categories/`


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
  async getCategory({ commit }) {
    commit('setState', { isLoading: true })
    try {
      const { data } = await axios.get(baseUrl)
      commit('setState', { data, isLoading: false })
    }
    catch (error) {
      commit('setState', { error, isLoading: false })
    }
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
