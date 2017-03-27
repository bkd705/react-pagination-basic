import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import PaginationButton from '../../components/PaginationButton'

describe('<PaginationButton />', () => {

  it('should render an anchor tag', () => {
    const wrapper = shallow(<PaginationButton value="2" />)

    expect(wrapper.find('a')).to.have.length(1)
  })

  it('should display a value from props', () => {
    const wrapper = shallow(<PaginationButton value="4" />)
    const anchor = <a className="pagination-link">4</a>

    expect(wrapper.contains(anchor)).to.be.true
  })

  it('should apply is-current class with active prop', () => {
    const wrapper = shallow(<PaginationButton value="2" active />)
    const anchor = <a className="pagination-link is-current">2</a> 

    expect(wrapper.contains(anchor)).to.be.true
  })
})