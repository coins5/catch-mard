import { Component } from 'react'
import CardsGrid from './components/cards_grid'
import { getGifs } from './shared/images_service'

class App extends Component {
  state = {
    gifs_urls: []
  }

  componentDidMount() {
    this.getData()
  }

  getData() {
    getGifs({limit: 8}).then( (urls) => {
      this.setState({ gifs_urls: urls })
    })
  }

  render() {
    console.log("asdasd")
    return (
      <>
        <div>
          <button className="btn btn-primary">asdasd</button>
          {
            this.state.gifs_urls.length === 0 ?
              <span className="loading loading-spinner loading-lg"></span>
              :
              <CardsGrid gif_urls={ this.state.gifs_urls } ></CardsGrid>   
          }
        </div>
      </>
    )
  }
}

export default App
