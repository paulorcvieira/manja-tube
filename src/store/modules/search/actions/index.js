import youtubeSearch from 'youtube-api-v3-search'
import YT_API_KEY from '../../../../utils/yt_api_key'

const API_KEY = YT_API_KEY;

export const searchVideoRequest = () => {
  return {
    type: '@youtube/SEARCH_VIDEO_REQUEST',
    loading: true,
    error: false,
  }
}

export const searchVideoSuccess = (response) => {
  return {
    type: '@youtube/SEARCH_VIDEO_SUCCESS',
    videos: response,
    loading: false,
    error: false,
  }
}

export const searchVideoFailure = (response) => {
  return {
    type: '@youtube/SEARCH_VIDEO_FAILURE',
    msg: response,
    loading: false,
    error: true,
  }
}



export const searchVideo = (word) => {
  return dispatch => {
    dispatch(searchVideoRequest())
    youtubeSearch(API_KEY, {q: word})
      .then((data) => dispatch(searchVideoSuccess(data.items)))
      .catch((error) => dispatch(searchVideoFailure(error)))
  }
}