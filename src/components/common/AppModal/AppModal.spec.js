import { shallowMount } from '@vue/test-utils'
import AppModal from '@/components/common/AppModal'

describe('AppModal', () => {
  const wrapper = shallowMount(AppModal, {
    propsData: {
      classname: 'app__modal',
      open: false,
    }
  })
  it('render without crashing', () => {
    expect(wrapper.find('header')).toBeDefined()
    expect(wrapper.props().open).toBeFalsy()
    expect(wrapper.props().classname).toBe('app__modal')
  })
})