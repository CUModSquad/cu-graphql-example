import * as React from 'react';
import * as ReactDom from 'react-dom';
import { useConfig } from 'camelot-unchained/lib/graphql/react';

import App from './components/App';

// configure GraphQL globally
useConfig({
  url: (window as any).env.graphQLHost(),
  stringifyVariables: true,
});

ReactDom.render(<App />, document.getElementById('app'));
