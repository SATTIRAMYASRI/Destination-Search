// Write your code here
import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {
    searchInput: '',
  }

  onChangedText = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state

    const filteredDestinationList = destinationsList.filter(eachPlace =>
      eachPlace.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <h1>Destination Search</h1>
        <div className="search-container">
          <input
            type="search"
            className="search-input"
            placeholder="Search"
            onChange={this.onChangedText}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            className="search-img"
            alt="search icon"
          />
        </div>
        <ul className="place-container">
          {filteredDestinationList.map(eachItem => (
            <DestinationItem placeDetails={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    )
  }
}
export default DestinationSearch
