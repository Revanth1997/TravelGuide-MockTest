import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import TravelList from '../TravelList'
import './index.css'
import {
  AppContainer,
  TravelGuideContainer,
  TravelGuideHeading,
  List,
} from './styledComponents'

class TravelGuide extends Component {
  state = {
    travelData: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getTravelsData()
  }

  getTravelsData = async () => {
    const response = await fetch('https://apis.ccbp.in/tg/packages')

    const data = await response.json()
    console.log(data)

    const updatedData = data.packages.map(eachData => ({
      id: eachData.id,
      description: eachData.description,
      imageUrl: eachData.image_url,
      name: eachData.name,
    }))
    console.log(updatedData)
    this.setState({travelData: updatedData, isLoading: false})
  }

  render() {
    const {travelData, isLoading} = this.state

    return (
      <AppContainer>
        <TravelGuideHeading>Travel Guide now</TravelGuideHeading>
        <ul>
          <TravelGuideContainer>
            {isLoading ? (
              <div data-testid="loader">
                <Loader
                  type="TailSpin"
                  color="#00BFFF"
                  height={50}
                  width={50}
                />
              </div>
            ) : (
              travelData.map(eachData => (
                <List key={eachData.id}>
                  <TravelList key={eachData.id} travelDetails={eachData} />
                </List>
              ))
            )}
          </TravelGuideContainer>
        </ul>
      </AppContainer>
    )
  }
}

export default TravelGuide
