import { Client } from '../models/Client';
import { Project } from '../models/Project';
import { projects, clients } from '../sampleData';
import { GraphQLID, GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLSchema, GraphQLString, } from 'graphql';


const ClientType = new GraphQLObjectType({
    name: 'Client',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        phone: { type: GraphQLString }
    })
});


const ProjectType = new GraphQLObjectType({
    name: 'Project',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        status: { type: GraphQLString },
        client: {
            type: ClientType,
            resolve(parent, args) {
                return clients.find((client) => client.id === parent.clientId)
            }
        }
    })
});

export const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: () => ({
        projects: {
            type: new GraphQLList(ProjectType),
            resolve(parent, args) {
                // return projects;
                // realtime data
                return Project.find();
            }
        },
        project: {
            type: ProjectType,
            args: { id: { type: GraphQLID } },
            resolve: (parent, args) => {
                // return projects.find(project => project.id === args.id);
                // realtime data
                return Project.findById(args.id);
            }
        },
        clients: {
            type: new GraphQLList(ClientType),
            resolve(parent, args) {
                // return clients;
                // realtime data
                return Client.find();
            }
        },
        client: {
            type: ClientType,
            args: { id: { type: GraphQLID } },
            resolve: (parent, args) => {
                // return clients.find(client => client.id === args.id);
                // realtime data
                return Client.findById(parent.clientId);
            }
        }
    }),
})

export const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addClient: {
            type: ClientType,
            args: {
                name : {type: new GraphQLNonNull(GraphQLString)},
                email : {type: new GraphQLNonNull(GraphQLString)},
                phone : {type: new GraphQLNonNull(GraphQLString)},
            }
        }
    }
})

export default new GraphQLSchema({
    query: RootQuery,
    mutation
})