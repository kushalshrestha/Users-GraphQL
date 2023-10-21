const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
} = graphql;
// const _ = require("lodash");  /* Replaced with axios*/
const axios = require("axios");

/* hardcoded */
// const users = [
//   { id: "23", firstName: "Bill", age: 20 },
//   { id: "47", firstName: "Kushal", age: 21 },
// ];

const API_BASE_URL = `http://localhost:3000`;
const CompanyType = new GraphQLObjectType({
  name: "Company",
  fields: () => ({
    /* Creating arrow function to resolve circular references*/
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    users: {
      type: new GraphQLList(UserType),
      resolve(parentValue, args) {
        console.log(API_BASE_URL + `/companies/${parentValue.id}/users`)
        return axios
          .get(API_BASE_URL + `/companies/${parentValue.id}/users`)
          .then((res) => res.data);
      },
    },
  }),
});

const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: GraphQLString },
    firstName: { type: GraphQLString },
    age: { type: GraphQLInt },
    company: {
      type: CompanyType,
      resolve(parentValue, args) {
        return axios
          .get(API_BASE_URL + `/companies/${parentValue.companyId}`)
          .then((res) => res.data);
      },
    },
  }),
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
        return axios
          .get(API_BASE_URL + `/users/${args.id}`)
          .then((resp) => resp.data);
      },
    },
    company: {
      type: CompanyType,
      args: { id: { type: GraphQLString } },
      resolve(parentValue, args) {
        return axios
          .get(API_BASE_URL + `/companies/${args.id}`)
          .then((resp) => resp.data);
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
