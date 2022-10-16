// Write your code here

const DestinationItem = props => {
  const {DestinationDetails} = props
  const {id, imgUrl, name} = DestinationDetails

  return (
    <li>
      <img src={imgUrl} />
      <p>{name}</p>
    </li>
  )
}

export default DestinationItem
