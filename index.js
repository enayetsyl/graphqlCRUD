const { ApolloServer } = require('apollo-server')
const mongoose = require('mongoose')

const MONGODB = 'mongodb+srv://graphqlTest:5A3g4VpjXxYnilW0@cluster0.ktgpsav.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

// Apollo Server
// typeDefs
// resolver

const typeDefs = require('./graphql/typeDefs')
const resolvers = require('./graphql/resolvers')

const server = new ApolloServer({
  typeDefs,
  resolvers
})

mongoose.connect(MONGODB, {useNewUrlParser: true})
.then(() => {
  console.log('Mongodb Connection Successful')
  return server.listen({port: 5000})
})
.then((res) => {
  console.log(`Server running at ${res.url}`)
})