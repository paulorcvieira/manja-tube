export const playVideo = (video) => {
  return {
    type: '@youtube/PLAY_VIDEO',
    video,
  }
}