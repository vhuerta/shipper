import { ApolloServer } from 'apollo-server'

import typeDefs from './typeDefs.js'
import resolvers from './resolvers.js'

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  introspection: true,
  resolverValidationOptions: {
    requireResolversForResolveType: false,
  },
})

server.listen().then(({ url }) => {
  console.log(`🚀 MockedAPI server ready at ${url}`)
})
