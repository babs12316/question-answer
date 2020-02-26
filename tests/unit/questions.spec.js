import { mount } from '@vue/test-utils'
import Questions from '@/components/Questions.vue'
import Vue from 'vue'
import Vuelidate from 'vuelidate'

Vue.use(Vuelidate)


describe('Questions', () => {
  // Now mount the component and you have the wrapper
  const wrapper = mount (Questions)

  it('has form headline', () => {
    expect(wrapper.html()).toContain('<h2>Customer Alliance Form </h2>')
  })
  
  it('has question about customer feeling', () => {
    expect(wrapper.html()).toContain('<div class="qtext">How do you feel today? </div>')
  })
  it('has question about customer age', () => {
    expect(wrapper.html()).toContain('<div class="qtext">Your age </div>')
  })

  it('has a submit button', () => {
    expect(wrapper.contains('button')).toBe(true)
  })
  it('able to setValue of input', () => {
    const textInput = wrapper.find('input[type="password"]')
    textInput.setValue('some value')
  })

  it('has age options visible', () => {
    expect(wrapper.find('#ansoptions span').isVisible()).toBe(true)
  })
  
  
 
})
