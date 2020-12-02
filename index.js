const { ApolloServer } = require('apollo-server');
const typeDefs = require ('./db/schema');
const resolvers = require('./db/resolvers');

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen().then(({ url }) => {
  console.log(`Servidor escuchando en ${url}`)
})