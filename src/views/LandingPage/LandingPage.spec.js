import { shallowMount } from '@vue/test-utils'
import LandingPage from '@/views/LandingPage'
import Icon from '@/components/common/Icon'

describe('LandingPage', () => {
  const wrapper = shallowMount(LandingPage, { stubs: ['router-link'] })
  it('render without crashing', () => {
    expect(wrapper.find(Icon)).toBeDefined()
    expect(wrapper.find("router-link")).toBeDefined()
  })
})