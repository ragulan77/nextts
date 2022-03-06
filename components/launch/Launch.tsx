import { GET_LAST_THREE_LAUNCHES } from './queries'
import { useQuery } from '@apollo/client'

export interface Launch {
  id: number
  mission_name: string
  launch_date_unix: number
  rocket: Rocket
  links: Links
}

interface Rocket {
  rocket_name: string
}

interface Links {
  video_link: string
}

export function Launches(): JSX.Element {
  const { loading, error, data } = useQuery(GET_LAST_THREE_LAUNCHES)
  if (loading) return <p>Loading ...</p>
  if (error) return <p>Error! ${error.message}</p>

  return (
    <ul>
      {data.launches.map((launch: Launch) => (
        <li key={launch.id}>{launch.mission_name}</li>
      ))}
    </ul>
  )
}
