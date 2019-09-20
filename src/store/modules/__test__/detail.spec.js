import store from '@/store'

jest.mock('axios')

describe('Detail Store', () => {
  const data = {
    id: 1,
    title: 'title',
    description: 'description',
  }
  it('detail store', () => {
    store.dispatch('detail/setState', { data })
    expect(store.getters['detail/data']).toEqual(data)
    expect(store.getters['detail/open']).toBe(false)
    const newData = { ...data, title: 'new title' }
    store.dispatch('detail/updateState', { data: newData })
    expect(store.getters['detail/data']).toEqual(newData)
  })
})