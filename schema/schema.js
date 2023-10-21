const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLInt , GraphQLSchema} = graphql;
// const _ = require("lodash");  /* Replaced with axios*/
const axios = require('axios');

/* hardcoded */
// const users = [
//   { id: "23", firstName: "Bill", age: 20 },
//   { id: "47", firstName: "Kushal", age: 21 },
// ];

const UserType = new GraphQLObjectType({
  name: "User",
  fields: {
    id: { type: GraphQLString },
    firstName: { type: GraphQLString },
    age: { type: GraphQLInt },
  },
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLString } } /* arg required for user*/,
      resolve(parentValue, args) {
        /* a function who does the searches in the db and provide you the response*/
        // return _.find(users, { id: args.id }); /* commented after not using lodash for hardcoded response*/
        return axios.get(`http://localhost:3000/users/${args.id}`)
        .then(resp => resp.data);
      },
    },
  },
});

module.exports = new GraphQLSchema({
    query: RootQuery
})
