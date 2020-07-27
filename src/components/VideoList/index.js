import React from 'react'
import { connect } from 'react-redux'
import { playVideo } from '../../store/modules/player/actions'

import { List, Image } from 'semantic-ui-react'

// import { Container } from './styles';

class VideoList extends React.Component {
  renderVideo(video) {
    return (
        <List key={video.etag} animated verticalAlign="middle">
            <List.Item onClick={() => this.props.play(video)}>
              <Image src={video.snippet.thumbnails.default.url} />
              <List.Content>
                <List.Header>{video.snippet.title}</List.Header>
              </List.Content>
            </List.Item>
        </List>
    )
  }
  render() {
    return (
      <div className="video-list">
        {
          this.props.loading && (
            <div>Carregando...</div>
          )
        }
        {
          this.props.videos.map((video) => {
            console.log('Meu Vídeo: ', video)
            return this.renderVideo(video)
          })
        }
      {/* <p>{JSON.stringify(this.props)}</p> */}
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    play: (video) => dispatch(playVideo(video))
  }
}

const mapStateToProps = (state) => {
  return {
    videos: state.search.videos,
    loading: state.search.loading,
    msg: state.search.msg,
    error: state.search.error,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoList)