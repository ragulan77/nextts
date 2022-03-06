import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

import { Launches } from '../components/launch/Launch'

const client = new ApolloClient({
  uri: 'https://api.spacex.land/graphql/',
  cache: new InMemoryCache(),
})

const IndexPage = () => (
  <ApolloProvider client={client}>
    <h1>Last 3 SpaceX launches:</h1>
    <p>here the list of the last 3 launches with link to a detail page please :)</p>
    <Launches />
  </ApolloProvider>
)

export default IndexPage
