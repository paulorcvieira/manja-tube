const INITIAL_STATE = {
  videos: [],
  loading: false,
  msg: '',
  error: false,
}

export default function search(state = INITIAL_STATE, action) {
  switch(action.type) {
    case '@youtube/SEARCH_VIDEO_REQUEST':
      return {
        videos: [],
        loading: true,
        error: false,
      }
    case '@youtube/SEARCH_VIDEO_SUCCESS':
      return {
        videos: action.videos,
        loading: false,
        error: false,
      }
    case '@youtube/SEARCH_VIDEO_FAILURE':
      return {
        videos: [],
        msg: action.msg,
        loading: false,
        error: true,
      }
    default: return state
  }
}