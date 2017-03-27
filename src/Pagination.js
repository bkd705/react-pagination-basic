import React, { Component } from 'react';
import PaginationList from './components/PaginationList'

class Pagination extends Component {
  constructor(props) {
    super(props)

    this.state = {
      numOfPages: 0,
      currentPage: 0
    }
  }

  componentDidMount() {
    this.fetchItems()
  }

  fetchItems = () => {
    this.setState({
      numOfPages: 8,
      currentPage: 0,
    })
  }

  changePage = (e, newPage) => {
    e.preventDefault()

    this.setState(prevState => ({
      currentPage: newPage
    }))
  }

  render() {
    return (
      <div className="pagination--container">
        <PaginationList pages={this.state.numOfPages} currentPage={this.state.currentPage} changePage={this.changePage} />
      </div>
    );
  }
}

export default Pagination;
