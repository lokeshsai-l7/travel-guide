import {Component} from 'react'
import GuideCard from '../GuideCard/index'
import LoadingCircle from '../Loader/index'
import {MainContainer, HeadingEl, GuideList} from './styledComponents'

class HomePage extends Component {
  state = {travelGuidesList: [], isLoading: true}

  componentDidMount() {
    this.getTravelGuideList()
  }

  getTravelGuideList = async () => {
    const response = await fetch('https://apis.ccbp.in/tg/packages')
    const data = await response.json()

    const formattedData = data.packages.map(eachItem => ({
      id: eachItem.id,
      description: eachItem.description,
      imageUrl: eachItem.image_url,
      name: eachItem.name,
    }))

    this.setState({travelGuidesList: formattedData, isLoading: false})
  }

  render() {
    const {travelGuidesList, isLoading} = this.state
    console.log(travelGuidesList)
    return (
      <MainContainer>
        <HeadingEl>Travel Guide</HeadingEl>
        {isLoading ? (
          <LoadingCircle />
        ) : (
          <GuideList>
            {travelGuidesList.map(eachItem => (
              <GuideCard key={eachItem.id} guideCard={eachItem} />
            ))}
          </GuideList>
        )}
      </MainContainer>
    )
  }
}

export default HomePage
