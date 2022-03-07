import { gql } from '@apollo/client'

export const GET_LAST_THREE_LAUNCHES = gql`
  query GetLastThreeLaunches {
    launches(sort: "launch_date_unix", order: "desc", limit: 3) {
      id
      mission_name
      launch_date_unix
      rocket {
        rocket_name
      }
      links {
        video_link
      }
    }
  }
`

export const GET_ALL_LAUNCHES_ID = gql`
  query GetAllLaunchesId {
    launches {
      id
    }
  }
`

export const GET_LAUNCH_BY_ID = gql`
  query GetLaunchById($id: ID!) {
    launch(id: $id) {
      id
      mission_name
      launch_date_unix
      rocket {
        rocket_name
      }
      links {
        video_link
      }
    }
  }
`
