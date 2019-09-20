
import API from '@/api';
import axios from 'axios'
const baseUrl = `${API}/favorites/`


const state = {
  limit: 10,
  count: 1,
  next: null,
  previous: null,
  data: [],
  isLoading: false,
  error: null,
}

const getters = {
  data: state => state.data,
  isLoading: state => state.isLoading,
  error: state => state.error,
  previous: state => state.previous,
  next: state => state.next,
  limit: state => state.limit,
  count: state => state.count,
}

const getPayload = (payload) => {
  const {
    id,
    title,
    description,
    category_detail: {
      ranking,
      category_name,
    }
  } = payload
  return { id, title, description, ranking, category_name }
}

const mapError = (error) => {
  const { response } = error
  if (response && response.data) {
    return Object.entries(response.data)
      .map(([key, value]) => {
        return value[0].replace('This field', key)
      }).join(', ')
  }
  return 'An error occured'
}

const reOrder = (array, { category_detail }) => {
  return array.map((data) => {
    const { category_detail: objCategoryDetail } = data;
    if (objCategoryDetail.category_name === category_detail.category_name) {
      data.category_detail = category_detail
    }
    return data
  })
}

const actions = {
  async addFavorite({ commit, state, dispatch }, payload) {
    commit('setState', { isLoading: true })
    try {
      payload = getPayload(payload)
      const { data } = await axios.post(baseUrl, payload)
      const newData = [data, ...state.data]
      newData.splice(10)
      commit('reOrderState', { data: newData, isLoading: false, responseData: data })
      dispatch('closeFormModal')
    }
    catch (error) {
      commit('setState', { error: mapError(error), isLoading: false })
    }
  },
  async getAllFavorite({ commit }, query = "page=1") {
    commit('setState', { isLoading: true })
    try {
      const { data } = await axios.get(`${baseUrl}?${query}`)
      let { results, ...rest } = data
      commit('setState', { data: results, ...rest, isLoading: false })
    }
    catch (error) {
      commit('setState', { error, isLoading: false })
    }
  },
  async updateFavorite({ commit, state, dispatch }, payload) {
    try {
      commit('setState', { isLoading: true })
      payload = getPayload(payload)
      const { data: responseData } = await axios.put(
        `${baseUrl}${payload.id}/`,
        payload,
      )
      const newData = state.data.map((data) => {
        if (data.id === responseData.id) return responseData;
        return data;
      })
      commit('reOrderState', { data: newData, isLoading: false, responseData })
      dispatch('closeFormModal')
    }
    catch (error) {
      commit('setState', { error: mapError(error), isLoading: false })
    }
  },
  closeFormModal({ dispatch }) {
    dispatch(
      'form/setState',
      { open: false, data: {} },
      { root: true }
    )
  },
  clearError({ commit }) {
    commit('setState', { error: null })
  }
}

const mutations = {
  setState(state, payload) {
    Object.assign(state, payload);
  },
  reOrderState(state, payload) {
    const { responseData, ...rest } = payload
    rest.data = reOrder(rest.data, responseData)
    Object.assign(state, rest);
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
