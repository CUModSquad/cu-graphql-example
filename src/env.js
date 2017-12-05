window.env = {
  apiHost: 'https://hatcheryapi.camelotunchained.com/',
  apiVersion: 1,
  debug: true,
  signalRHost: () => window.env.apiHost + 'signalr',
  graphQLHost: () => window.env.apiHost + 'graphql',
};
