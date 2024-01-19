import { projects, clients } from '../sampleData';
import { GraphQLID, GraphQLObjectType, GraphQLSchema, GraphQLString, } from 'graphql';


export const ClientType = new GraphQLObjectType({
    name: 'Client',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        phone: { type: GraphQLString }
    })
});

export const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: () => ({
        client: {
            type: ClientType,
            args: { id: { type: GraphQLID } },
            resolve: (parent, args) => {
                return clients.find(client => client.id === args.id);
            }
        }
    }),
})

export default new GraphQLSchema({
    query: RootQuery
})