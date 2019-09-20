import { shallowMount } from '@vue/test-utils'
import store from '@/store'
import router from '@/router'
import Detail from '@/components/Detail'
import AppModal from '@/components/common/AppModal'

jest.mock('axios')

describe('Detail', () => {
  const wrapper = shallowMount(Detail, {
    store,
    router,
  })
  store.commit('detail/setState', {
    data: {
      id: 1,
      title: 'bowling',
      description: 'this is bowling',
      category_detail: {
        ranking: 1,
        category_name: 'sport',
      },
      created_date: '2019-08-08 15:06:05.524418+01',
      modified_date: '2019-08-08 15:06:05.524418+01',
    },
  })
  it('render without crashing', () => {
    expect(wrapper.find(AppModal)).toBeDefined()

    wrapper.vm.toggleModal()
    expect(store.getters['detail/open']).toBe(false)

    const formatedDate = wrapper.vm.fromNowDateFormat('2019-08-08 15:06:05.524418+01')
    expect(typeof formatedDate).toBe('string')

    const newTitle = 'new title'
    wrapper.vm.viewAuditLog({ title: newTitle })
    expect(store.getters['detail/data'].title).toBe(newTitle)
  })
})