import { shallowMount } from '@vue/test-utils'
import store from '@/store'
import router from '@/router'
import Form from '@/components/Form'
import AppModal from '@/components/common/AppModal'

jest.mock('axios')

describe('Form', () => {
  const wrapper = shallowMount(Form, {
    store,
    router,
  })
  store.commit('form/setState', {
    data: {
      id: 1,
      title: 'bowling',
      description: 'this is bowling',
      category_detail: {
        ranking: 1,
        category_name: 'sport',
      },
    },
  })
  it('render without crashing', () => {
    expect(wrapper.find(AppModal)).toBeDefined()
    wrapper.vm.toggleModal()
    expect(store.getters['form/open']).toBe(false)
    const titleInput = wrapper.find('input#title');
    titleInput.trigger('change')
    const descriptionInput = wrapper.find('textarea#description');
    descriptionInput.trigger('change')
    const rankingInput = wrapper.find('input#ranking');
    rankingInput.trigger('change')
    const categoryNameInput = wrapper.find('input#category_name');
    categoryNameInput.trigger('change')
    const formButtonInput = wrapper.find('button.form__btn');
    formButtonInput.trigger('click')
    wrapper.vm.submit()
    store.dispatch('form/updateState', { data: { id: 1 } })
    wrapper.vm.submit()
    wrapper.vm.onChange({
      target: {
        name: 'title',
        value: 'title',
      },
    })
  })
})