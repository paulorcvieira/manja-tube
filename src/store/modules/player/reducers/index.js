const INITIAL_STATE = {
  video: {},
}

export default function playVideo(state = INITIAL_STATE, action) {
  switch(action.type) {
    case '@youtube/PLAY_VIDEO':
      return {
        video: action.video,
      }
    default: return state
  }
}