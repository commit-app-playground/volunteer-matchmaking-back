import { gql } from 'apollo-server-express';

const typeDefs = gql`
    scalar Date

    type User {
        _id: ID!
        email: String!
        password: String!
        type: String!
        createdAt: Date
        updatedAt: Date
    }

    type Volunteer {
        _id: ID!
        user: User!
        name: String!
        description: String!
        remoteOnly: Boolean!
    }

    type Project {
        name: String!
        description: String!
        remote: Boolean!
        createdAt: Date
        updatedAt: Date
    }

    type Auth {
        userId: ID!
        token: String!
        expiration: Int!
    }

    input CreateUserData {
        email: String!
        password: String!
        type: String!
    }

    input UpdateUserData {
        email: String
        password: String
        type: String
    }

    type Query {
        users: [User!]!
        user(userId: ID!): User!
        login(email: String!, password: String!): Auth!
    }

    type Mutation {
        createUser(userData: CreateUserData!): Auth!
        updateUser(userId: ID!, userData: UpdateUserData): User!
    }


`;

export default typeDefs;