const { ApolloServer } = require('apollo-server');
// schema
const Schema = require('./schema');

// set up any dataSources our resolvers need
const AnnotationAPI = require('./datasources/annotation')
const DatasetAPI = require('./datasources/dataset');
const OrganizationAPI = require('./datasources/organization');
const PersonAPI = require('./datasources/person');

const dataSources = () => ({
  AnnotationAPI: new AnnotationAPI(),
  DatasetAPI: new DatasetAPI(),
  OrganizationAPI: new OrganizationAPI(),
  PersonAPI: new PersonAPI(),
});

let port = 4000;
let host = '127.0.0.1';
let baseUrl = '/';

let args = process.argv.slice(2);
let i;
for (i = 0; i < args.length; i++) {
  switch (args[i]) {
    default: break;
    case '--host': host = args[i+1]; break;
    case '--port': port = (+args[i+1]); break;
    case '--base-url': baseUrl = args[i+1];
  }
}

const server = new ApolloServer({
  schema: Schema,
  dataSources: dataSources,
  playground: {
    endpoint: baseUrl + 'metadata',
    settings: {
      'request.credentials': 'same-origin',
      'editor.theme': 'dark'
    }
  }
});

server.listen({
  port: port,
  path: baseUrl + 'metadata/',
  host: host
}).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
