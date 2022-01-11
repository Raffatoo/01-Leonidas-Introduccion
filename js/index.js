const $video = document.querySelector('#video')
const $backward = document.querySelector('#backward')
const $play = document.querySelector('#play')
const $pause = document.querySelector('#pause')
const $forward = document.querySelector('#forward')

$backward.addEventListener('click', handleBackward)
$play.addEventListener('click', handlePlay)
$pause.addEventListener('click', handlePause)
$forward.addEventListener('click', handleForward)

function handleBackward() {
  $video.currentTime = $video.currentTime - 10
  console.log('le diste click al botón de Backward', $video.currentTime)
}

function handlePlay() {
  $video.play()
  $play.hidden = true
  $pause.hidden = false
  console.log('le diste click al botón de Play')
}

function handlePause() {
  $video.pause()
  $play.hidden = false
  $pause.hidden = true
  console.log('le diste click al botón de Pause')
}

function handleForward() {
  $video.currentTime = $video.currentTime + 10
  console.log('le diste click al botón de Forward', $video.currentTime)
}

const $progress = document.querySelector('#progress')
$video.addEventListener('loadedMetadata', handleLoaded)
$video.addEventListener('timeupdate', handleTimeUpdate)

function handleLoaded() {
  $progress.max = $video.duration
  console.log('ha cargado mi video', $video.duration)
}

function handleTimeUpdate() {
  $progress.value = $video.currentTime
  //console.log('tiempo actual', $video.currentTime);
}

$progress.addEventListener('input', handleInput)

function handleInput() {
  $video.currentTime = $progress.value
  console.log($progress.value)
}