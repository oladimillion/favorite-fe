import { shallowMount } from '@vue/test-utils'
import AppPadding from '@/components/common/AppPadding'

describe('AppPadding', () => {
  const wrapper = shallowMount(AppPadding, {
    propsData: {
      classname: 'app__Padding',
    }
  })
  it('render without crashing', () => {
    expect(wrapper.find('slot')).toBeDefined()
    expect(wrapper.props().classname).toBe('app__Padding')
  })
})