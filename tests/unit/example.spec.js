import { shallowMount } from '@vue/test-utils'
import EditArea from '@/components/EditArea.vue'
import PreviewArea from '@/components/PreviewArea.vue'

describe('HelloWorld.vue', () => {
  it('', () => {
    const wrapperEditArea = shallowMount(EditArea, {
      propsData: {  }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
