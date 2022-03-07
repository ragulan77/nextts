import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { getAllLaunchesId, getLaunchById } from '../../components/launch/Launch'
import { Launch } from '../../components/launch/Launch'
import { unixTimestampToDate } from '../../utils/date'

interface Props {
  launch: Launch
}

const LaunchPage: NextPage<Props> = ({ launch }) => {
  return (
    <>
      <h1>Mission details</h1>
      <p>Mission Name : {launch.mission_name}</p>
      <p>Launched Date : {unixTimestampToDate(launch.launch_date_unix)}</p>
      <p>Rocket Name: {launch.rocket.rocket_name}</p>
      <p>Video :{launch.links.video_link}</p>
      <iframe
        width="420"
        height="315"
        src="https://www.youtube.com/embed/AnSNRzMEmCU"
        title={launch.mission_name}
      ></iframe>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const ids = await getAllLaunchesId()
  const paths = ids.map((id: number) => ({
    params: {
      id: id.toString(),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const id = parseInt(context.params!.id as string)
  const launch: Launch = await getLaunchById(id)
  return {
    props: {
      launch,
    },
  }
}

export default LaunchPage
