import React from 'react'
import { connect } from 'react-redux'
import { Segment, Input } from 'semantic-ui-react'

import { searchVideo } from '../../store/modules/search/actions'

// import { Container } from './styles';

class SearchBar extends React.Component {
  constructor(props) {
    super(props)

    // on load
    this.props.searchYT('DDR A Firma')
  }

  searchInput = (e) => {
    if (e.keyCode === 13) {
      const wordToSearch = e.target.value
      console.log(wordToSearch)
      this.props.searchYT(wordToSearch)
    }
  }

  render() {
    return (
      <div className="search-bar">
        <Segment inverted color="red">
          <Input
            icon="search"
            onKeyDown={(e) => this.searchInput (e)}
            size="large"
            placeholder="Search..."
          />
        </Segment>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    searchYT: (word) => dispatch(searchVideo(word))
  }
}

export default connect(null, mapDispatchToProps)(SearchBar)