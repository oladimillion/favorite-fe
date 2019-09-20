import store from '@/store'

jest.mock('axios')

describe('Favorite Store', () => {
  const data = {
    id: 1,
    title: 'title',
    description: 'description',
    ranking: 1,
    category_name: 'sport',
  }

  it('favorites store', () => {
    store.dispatch('favorites/getAllFavorite')
    store.dispatch('favorites/addFavorite', data)
    expect(store.getters['favorites/error']).toBe('An error occured')
    expect(store.getters['favorites/isLoading']).toBe(false)
    expect(store.getters['favorites/data'].length).toBe(0)
    store.dispatch('favorites/updateFavorite', data)
    expect(store.getters['favorites/error']).toBe('An error occured')
    expect(store.getters['favorites/isLoading']).toBe(false)
    expect(store.getters['favorites/data'].length).toBe(0)
    const newData = {
      id: 1,
      title: 'title',
      description: 'description',
      category_detail: {
        ranking: 1,
        category_name: 'sport',
      }
    }
    const responseData = {
      id: 2,
      title: 'new title',
      description: 'new description',
      category_detail: {
        ranking: 4,
        category_name: 'fashion',
      }
    }

    store.commit('favorites/setState', { data: [newData] })
    expect(store.getters['favorites/data'][0]).toBe(newData)
    store.commit('favorites/reOrderState', { data: [newData], responseData })
    expect(store.getters['favorites/data'][0]).toBe(newData)
    store.dispatch('favorites/closeFormModal')
    expect(store.getters['form/open']).toBe(false)
  })
})