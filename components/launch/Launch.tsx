import { GET_ALL_LAUNCHES_ID, GET_LAST_THREE_LAUNCHES, GET_LAUNCH_BY_ID } from './queries'
import { useQuery } from '@apollo/client'
import { unixTimestampToDate } from '../../utils/date'
import Link from 'next/link'
import { client } from '../../utils/apolloClient'

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
        <li key={launch.id}>
          <Link href={`/launches/${launch.id}`}>
            <a>
              {launch.mission_name} from {unixTimestampToDate(launch.launch_date_unix)}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export async function getAllLaunchesId(): Promise<number[]> {
  const { error, data } = await client.query({ query: GET_ALL_LAUNCHES_ID })
  if (error) {
    return []
  }
  const ids: number[] = data.launches.map((launch: Launch) => launch.id)
  return ids
}

export async function getLaunchById(id: number): Promise<Launch> {
  const { data, error } = await client.query({ query: GET_LAUNCH_BY_ID, variables: { id } })
  console.log(error)

  const launch: Launch = data.launch
  return launch
}
