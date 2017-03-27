import React from 'react'
import { mount } from 'enzyme'
import { expect } from 'chai'
import PaginationList from '../../components/PaginationList'
import PaginationButton from '../../components/PaginationButton'

describe('<PaginationList />', () => {

  const changePage = (e, page) => { e.preventDefault(); console.log(page) }

  it('should not display any number buttons with 0 pages prop', () => {
    const wrapper = mount(<PaginationList pages={0} currentPage={0} changePage={changePage} />)

    expect(wrapper.find('a')).to.have.length(2)
  })

  it('should display page buttons according to props', () => {
    const wrapper = mount(<PaginationList pages={8} currentPage={0} changePage={changePage} />)

    expect(wrapper.find(PaginationButton)).to.have.length(8)
  })

  it('should update buttons with new pages on props update', () => {
    const wrapper = mount(<PaginationList pages={8} currentPage={0} changePage={changePage} />)
    
    expect(wrapper.find(PaginationButton)).to.have.length(8)
    wrapper.setProps({ pages: 10 })
    expect(wrapper.find(PaginationButton)).to.have.length(10)
  })

  it('should add an active button to currentPage', () => {
    const wrapper = mount(<PaginationList pages={8} currentPage={4} changePage={changePage} />)

    expect(wrapper.find('.is-current')).to.have.length(1)
  })
})