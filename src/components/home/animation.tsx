import Lottie from 'react-lottie-player'

import developerJson from '../../../public/lottie/developer.json'

export default function Animation() {
  return <Lottie loop animationData={developerJson} play />
}
