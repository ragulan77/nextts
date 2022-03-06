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
