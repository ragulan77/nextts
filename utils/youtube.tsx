import LiteYouTubeEmbed from 'react-lite-youtube-embed'
import { Launch } from '../components/launch/Launch'

interface Props {
  launch: Launch
}

export default function Youtube(props: Props) {
  const yid = getYoutubeId(props.launch.links.video_link)
  return <LiteYouTubeEmbed id={yid} title={props.launch.mission_name} />
}

function getYoutubeId(url: string) {
  let video_id = url.split('v=')[1]
  const ampersandPosition = video_id.indexOf('&')
  if (ampersandPosition != -1) {
    video_id = video_id.substring(0, ampersandPosition)
  }
  return video_id
}
