import store from '@/store'

jest.mock('axios')

describe('Category Store', () => {
  it('category store', () => {
    store.dispatch('category/getCategory')
    expect(store.getters['category/error']).toBe(null)
    expect(store.getters['category/isLoading']).toBe(true)
    expect(store.getters['category/data'].length).toBe(0)
  })
})