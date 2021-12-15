import config from './config'
import { ApolloServer } from 'apollo-server-express'
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core'
import express from 'express'
import http from 'http'
import schema from './graphql/schema'
import depthLimit from 'graphql-depth-limit';
import compression from "compression";

async function startApolloServer(port: number) {
    const app = express()
    const httpServer = http.createServer(app)
    const server = new ApolloServer({
        schema,
        plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
        validationRules: [depthLimit(7)],
    })
    await server.start()
    server.applyMiddleware({ app, ...compression })

    await new Promise<void>(resolve => httpServer.listen({ port }, resolve));
    console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`);
}

async function main() {
    const port = parseInt(config.port!);
    try {
        startApolloServer(port)
    } catch (err) {
        console.error('Error starting the node server', err)
    }
}

void main()