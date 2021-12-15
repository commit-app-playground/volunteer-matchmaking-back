import { gql } from 'apollo-server-express';

const typeDefs = gql`
    scalar Date

    enum UserType {
        VOLUNTEER
        ORGANIZATION
    }

    enum RemoteOption {
        REMOTEONLY
        NOTREMOTE
        OPENTOBOTH
    }

    enum DaysOfTheWeek {
        SUNDAY
        MONDAY
        TUESDAY
        WEDNESDAY
        THURSDAY
        FRIDAY
        SATURDAY
    }

    type User {
        _id: ID!
        email: String!
        type: UserType!
        createdAt: Date
        updatedAt: Date
    }

    type VolunteerProfile {
        _id: ID!
        name: String!
        description: String!
        remoteOptions: RemoteOption!
        availableDays: [DaysOfTheWeek]
        interestedCauses: [String]
        skills: [String]
        availableHoursPerWeek: Int
        createdAt: Date
        updatedAt: Date
    }

    type Organization {
        _id: ID!
        name: String!
        description: String!
        createdAt: Date
        updatedAt: Date
    }

    type Project {
        _id: ID!
        name: String!
        description: String!
        organization: Organization!
        remoteOptions: RemoteOption!
        causes: [String!]
        startDate: Date!
        endDate: Date
        isRecurring: Boolean!
        recurringDays: [DaysOfTheWeek]
        requiredSkills: [String]
        createdAt: Date
        updatedAt: Date
    }

    type Auth {
        userId: ID!
        token: String!
        expiration: Int!
    }

    input CreateUserInput {
        email: String!
        password: String!
        type: UserType!
    }

    input UpdateUserInput {
        email: String
        password: String
        type: UserType
    }

    input CreateVolunteerProfileInput {
        userId: ID!
        name: String!
        description: String!
        remoteOptions: RemoteOption!
        availableDays: [DaysOfTheWeek]
        interestedCauses: [String]
        skills: [String]
        availableHoursPerWeek: Int
    }

    input UpdateVolunteerProfileInput {
        name: String
        description: String
        remoteOptions: RemoteOption
        availableDays: [DaysOfTheWeek]
        interestedCauses: [String]
        skills: [String]
        availableHoursPerWeek: Int
    }

    input CreateProjectInput {
        organizationId: ID!
        name: String!
        description: String!
        remoteOptions: RemoteOption!
        causes: [String!]
        startDate: Date!
        endDate: Date
        isRecurring: Boolean!
        recurringDays: [DaysOfTheWeek]
        requiredSkills: [String]
    }

    input UpdateProjectInput {
        name: String
        description: String
        remoteOptions: RemoteOption
        causes: [String]
        startDate: Date
        endDate: Date
        isRecurring: Boolean
        recurringDays: [DaysOfTheWeek]
        requiredSkills: [String]
    }

    input CreateOrganizationInput {
        name: String!
        description: String!
    }

    input UpdateOrganizationInput {
        name: String
        description: String
    }


    type Query {
        users: [User!]
        user(userId: ID!): User
        login(email: String!, password: String!): Auth!
        volunteerProfile(profileId: ID!): VolunteerProfile
        volunteerProfiles: [VolunteerProfile!]
        project(projectId: ID!): Project
        projects: [Project!]
        organization(organizationId: ID!): Organization
        organizations: [Organization!]
        projectMatchForVolunteer(profileId: ID!): [Project]
    }

    type Mutation {
        createUser(userInput: CreateUserInput!): Auth!
        updateUser(userId: ID!, userInput: UpdateUserInput): User
        deleteUser(userId: ID!): Boolean!
        createVolunteerProfile(profileInput: CreateVolunteerProfileInput!): VolunteerProfile!
        updateVolunteerProfile(profileId: ID!, profileInput: UpdateVolunteerProfileInput!): VolunteerProfile
        deleteVolunteerProfile(profileId: ID!): Boolean!
        createProject(projectInput: CreateProjectInput!): Project!
        updateProject(projectId: ID!, projectInput: UpdateProjectInput!): Project
        deleteProject(projectId: ID!): Boolean!
        createOrganization(orgInput: CreateOrganizationInput!): Organization!
        updateOrganization(orgId: ID!, orgInput: UpdateOrganizationInput!): Organization
        deleteOrganization(orgId: ID!): Boolean!
    }


`;

export default typeDefs;