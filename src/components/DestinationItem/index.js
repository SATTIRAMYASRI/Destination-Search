// Write your code here
import './index.css'

const DestinationItem = props => {
  const {placeDetails} = props
  const {name, imgUrl} = placeDetails

  return (
    <li className="bg-container">
      <img src={imgUrl} className="place-img" alt={name} />
      <p className="place-heading">{name}</p>
    </li>
  )
}
export default DestinationItem
