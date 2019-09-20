
const state = {
  data: {},
  open: false,
}

const getters = {
  data: state => state.data,
  open: state => state.open,
}

const actions = {
  setState({ commit }, payload) {
    let { category_detail } = payload.data
    category_detail = category_detail || {}
    const { ranking, category_name } = category_detail
    const newData = {
      ...payload,
      data: {
        ...payload.data,
        ranking,
        category_name,
      }
    }
    commit('setState', newData)
  },
  updateState({ commit, state }, payload) {
    const newData = { ...payload, data: { ...state.data, ...payload.data } }
    commit('setState', newData)
  },
};

const mutations = {
  setState(state, payload) {
    Object.assign(state, payload);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
