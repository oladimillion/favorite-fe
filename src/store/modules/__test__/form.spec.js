import store from '@/store'

describe('Form Store', () => {
  const data = {
    id: 1,
    title: 'title',
    description: 'description',
    category_detail: {
      ranking: 1,
      category_name: 'sport',
    }
  }
  const { category_detail, ...rest } = data

  it('form store', () => {
    store.dispatch('form/setState', { data })
    const newData = {
      ...rest,
      category_detail,
      ...category_detail,
    }
    expect(store.getters['form/data']).toEqual(newData)
    expect(store.getters['form/open']).toBe(false)
    store.dispatch('form/updateState', { data: newData })
    expect(store.getters['form/data']).toEqual(newData)
  })
})