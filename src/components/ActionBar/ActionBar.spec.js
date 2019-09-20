import { shallowMount } from '@vue/test-utils'
import ActionBar from '@/components/ActionBar'
import AppPadding from '@/components/common/AppPadding'
import store from '@/store'

describe('ActionBar', () => {
  const wrapper = shallowMount(ActionBar, { store })
  it('render without crashing', () => {
    const form = wrapper.find('button.add__btn')
    form.trigger('click')
    expect(store.getters['form/open']).toBe(true)
    expect(wrapper.find(AppPadding)).toBeDefined()
  })
})