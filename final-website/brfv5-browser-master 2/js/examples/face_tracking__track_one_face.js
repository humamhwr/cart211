import {
  setupExample
} from './setup__example.js'
import {
  trackCamera,
  trackImage
} from './setup__example.js'
import {
  SystemUtils
} from '../utils/utils__system.js'
export const configureExample = (brfv5Config) => {
  brfv5Config.faceTrackingConfig.numFacesToTrack = 1
  brfv5Config.faceTrackingConfig.numTrackingPasses = 3
  brfv5Config.faceTrackingConfig.enableFreeRotation = true
  brfv5Config.faceTrackingConfig.maxRotationZReset = 999.0
}
export const handleTrackingResults = (brfv5Manager, brfv5Config, canvas) => {
  return true
}
const exampleConfig = {
  modelName: '68l',
  numChunksToLoad: SystemUtils.isMobileOS ? 4 : 8,
  enableDynamicPerformance: SystemUtils.isMobileOS,
  onConfigure: configureExample,
  onTracking: handleTrackingResults
}
let timeoutId = -1
export const run = () => {
  clearTimeout(timeoutId)
  setupExample(exampleConfig)
  if (window.selectedSetup === 'image') {
    trackImage('./assets/tracking/' + window.selectedImage)
  } else {
    trackCamera()
  }
}
timeoutId = setTimeout(function() {
  run()
}, 1000)
export default {
  run
}
