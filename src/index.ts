import config from './config'
import { ApolloServer } from 'apollo-server-express'
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core'
import express from 'express'
import http from 'http'
import resolvers from './graphql/resolvers';
import typeDefs from './graphql/schemas';

async function listen(port: number) {
    const app = express()
    const httpServer = http.createServer(app)

    const server = new ApolloServer({
        typeDefs,
        resolvers,
        plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    })
    await server.start()

    server.applyMiddleware({ app })

    return new Promise((resolve, reject) => {
        httpServer.listen(port).once('listening', resolve).once('error', reject)
    })
}

async function main() {
    const port = parseInt(config.port!);
    try {
        await listen(port)
        console.log(`Server is ready at http://localhost:${port}/graphql`)
    } catch (err) {
        console.error('Error starting the node server', err)
    }
}

void main()