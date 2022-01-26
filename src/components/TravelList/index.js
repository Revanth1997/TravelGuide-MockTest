import {
  Image,
  Name,
  Description,
  DetailsContainer,
  MainContainer,
} from './styledComponents'

const TravelList = props => {
  const {travelDetails} = props
  const {imageUrl, description, name} = travelDetails
  return (
    <MainContainer>
      <DetailsContainer>
        <Image src={imageUrl} alt={name} />
        <Name>{name}</Name>
        <Description>{description}</Description>
      </DetailsContainer>
    </MainContainer>
  )
}

export default TravelList
