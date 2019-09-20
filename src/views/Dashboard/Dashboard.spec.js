import { shallowMount } from '@vue/test-utils'
import Dashboard from '@/views/Dashboard'
import Navbar from '@/components/Navbar'
import ActionBar from '@/components/ActionBar'
import ItemTable from '@/components/ItemTable'
import Form from '@/components/Form'
import Detail from '@/components/Detail'

describe('Dashboard', () => {
  const wrapper = shallowMount(Dashboard)
  it('render without crashing', () => {
    expect(wrapper.find(Navbar)).toBeDefined()
    expect(wrapper.find(ItemTable)).toBeDefined()
    expect(wrapper.find(ActionBar)).toBeDefined()
    expect(wrapper.find(Form)).toBeDefined()
    expect(wrapper.find(Detail)).toBeDefined()
  })
})