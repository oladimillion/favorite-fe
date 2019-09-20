
const state = {
  data: {},
  open: false,
};

const getters = {
  data: state => state.data,
  open: state => state.open,
};

const actions = {
  setState({ commit, dispatch }, payload) {
    const { id } = payload.data
    if (id) {
      dispatch(
        'auditLog/getAuditLogByFavoriteId',
        (new URLSearchParams({ favorite: id })).toString(),
        { root: true }
      )
    } else {
      dispatch('auditLog/resetState', {}, { root: true });
    }
    commit('setState', payload)
  },
  updateState({ commit }, payload) {
    commit('setState', payload)
  }
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
  mutations,
};
