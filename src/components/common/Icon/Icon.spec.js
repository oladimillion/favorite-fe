import { shallowMount } from '@vue/test-utils'
import Icon from '@/components/common/Icon'

describe('Icon', () => {
  const wrapper = shallowMount(Icon, {
    propsData: {
      name: 'loading cog',
    }
  })
  it('render without crashing', () => {
    expect(wrapper.find('i')).toBeDefined()
    expect(wrapper.props().name).toBe('loading cog')
  })
})