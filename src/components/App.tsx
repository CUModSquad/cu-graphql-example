import * as React from 'react';
import styled from 'react-emotion';
import { withGraphQL, GraphQLInjectedProps } from 'camelot-unchained/lib/graphql/react';
import { accessLevelString } from 'camelot-unchained/lib/webAPI/helpers';
import { AccessType } from 'camelot-unchained/lib/webAPI/definitions';

import { CUQuery } from '../lib/graphql/schema';

const Main = styled('div')`
  width: 100vw;
  height: 100vh;
  overflow: auto;
  color: #ececec;
`;

export interface Props extends GraphQLInjectedProps<Pick<CUQuery, 'serviceStatus'>> {
}

export interface State {
}

class App extends React.Component<Props, State> {
  public render() {
    return (
      <Main>
        {
          !this.props.graphql.data && this.props.graphql.loading && 'loading...'
        }

        {
          this.props.graphql.data && this.props.graphql.data.serviceStatus &&
          this.props.graphql.data.serviceStatus.servers &&
          this.props.graphql.data.serviceStatus.servers.map((server) => {
            return <div key={server.name as string}>{server.name} | {server.status} | {server.host} 
             | {accessLevelString(AccessType[server.accessLevel as string])} </div>;
          })
        }
      </Main>
    );
  }
}

export default withGraphQL({
  query: `
    {
      serviceStatus {
        servers {
          name
          status
          host
          accessLevel
        }
      }
    }
  `,
})(App);
