import { shallowMount } from '@vue/test-utils'
import store from '@/store'
import router from '@/router'
import ItemTable from '@/components/ItemTable'
import AppPadding from '@/components/common/AppPadding'
import Icon from '@/components/common/Icon'

jest.mock('axios')

describe('ItemTable', () => {
  const wrapper = shallowMount(ItemTable, {
    router,
    store,
  })
  store.commit('favorites/setState', {
    data: [
      {
        id: 1,
        title: 'bowling',
        description: 'this is bowling',
        category_detail: {
          ranking: 1,
          category_name: 'sport',
        },
      }
    ],
    next: 'http://localhost:7000/api/v1/favorites/?page=3',
    previous: 'http://localhost:7000/api/v1/favorites/?page=1',
  })

  it('render without crashing', () => {
    expect(wrapper.find(AppPadding)).toBeDefined()
    expect(wrapper.find(Icon)).toBeDefined()
    wrapper.vm.getQuery()
    wrapper.vm.toggleModal({}, 'test')
    const count = wrapper.vm.pageCount
    expect(count).toEqual(1)
    const detailButton = wrapper.findAll('button.detail__btn');
    const editButton = wrapper.findAll('button.edit__btn');
    const nextButton = wrapper.find('button.next__btn');
    const prevButton = wrapper.find('button.prev__btn');
    detailButton.trigger('click')
    editButton.trigger('click')
    nextButton.trigger('click')
    prevButton.trigger('click')
  })
})


