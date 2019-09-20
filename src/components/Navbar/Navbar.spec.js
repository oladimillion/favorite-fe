import { shallowMount } from '@vue/test-utils'
import NavBarComponent from '@/components/NavBar'
import AppPadding from '@/components/common/AppPadding'

describe('NavBarComponent', () => {
  const wrapper = shallowMount(NavBarComponent, { stubs: ['router-link'] })
  it('render without crashing', () => {
    expect(wrapper.find(AppPadding)).toBeDefined()
    expect(wrapper.find("router-link")).toBeDefined()
  })
})