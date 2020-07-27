import React from 'react'
import { connect } from 'react-redux'
import { Advertisement, Embed } from 'semantic-ui-react'

// import { Container } from './styles';

class VideoPlayer extends React.Component {
  render() {
    return (
      <div className="video-player">
        { !this.props.video.id ? (
          <Advertisement
            style={{ height: '433px' }}
            unit="top banner"
            test="Selecione um vídeo para reproduzir."
          />
        ) : (
          <div>
            <Embed
              id={this.props.video.id.videoId}
              placeholder='https://react.semantic-ui.com/images/image-16by9.png'
              source='youtube'
            />
            <div className="video-title">
              {this.props.video.snippet.title}
            </div>
            <div className="video-description">
              {this.props.video.snippet.description}
              {this.props.video.id.videoId}
            </div>
          </div>
        )}
        {/* {JSON.stringify(this.props.video)} */}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    video: state.player.video,
  }
}

export default connect(mapStateToProps, null)(VideoPlayer)