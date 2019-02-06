const { gql } = require('apollo-server');

const typeDef = gql`

  type Annotation {
    id: String
    context: String # http://www.w3.org/ns/anno.jsonld
    type: String # Annotation
    motivation: String # commenting
    body: [AnnotationTextualBody]
    target: String
    creator: Person
    created: String
  }

  type AnnotationTextualBody {
    type: String # TextualBody
    value: String
  }

  input AnnotationTextualBodyInput {
    value: String
  }

  type AnnotationResponse {
    success: Boolean!
    message: String
    result: Annotation
  }

  extend type Query {
    annotations: [Annotation]
    annotation(target: String!): Annotation
  }

  extend type Mutation {
    addAnnotation(
      motivation: String # commenting
      body: [AnnotationTextualBodyInput]
      target: String
      creator: PersonInput
    ): AnnotationResponse

    # TODO: WIP
    addAnnotationItem(
      motivation: String # commenting
      body: [AnnotationTextualBodyInput]
      target: String
      creator: PersonInput
    ): AnnotationResponse

    remAnnotation(id: ID!): AnnotationResponse!
  }
`;

const resolvers = {
  Query: {
    annotations: async (_, { pageSize = 20, after }, { dataSources }) => {
      return dataSources.AnnotationAPI.fetchall();
    },
    annotation: (root, args, { dataSources } ) => {
      return dataSources.AnnotationAPI.getByField('target', args.target);
    }
  },
  Mutation: {
    addAnnotation: async (root, args, { dataSources }) => {
      let newData = {
        context: 'http://www.w3.org/ns/anno.jsonld',
        type: 'Annotation',
        motivation: args.motivation || 'commenting',
        target: args.target,
        created: (new Date()).toISOString(),
        creator: {
          id: args.creator.id || null
        }
      };

      newData = dataSources.AnnotationAPI.insert(newData);

      return {
        success: true,
        result: newData
      };
    },
    remAnnotation: (root, args, { dataSources }) => {
      let message = null;
      let status = true;
      const result = dataSources.AnnotationAPI.deleteByID(args.id);

      if (result == null) {
        message = 'Data not found.';
        status = false;
      }

      return {
        success: status,
        result: result,
        message: message
      };
    }
  }
};

module.exports = { typeDef, resolvers };