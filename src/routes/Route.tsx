import React from 'react';
import {
  Route as ReactDOMRoute,
  RouteProps as ReactDOMRouteProps,
  Redirect,
} from 'react-router-dom';

import { useStart } from '../hooks/start';

interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const { start } = useStart();

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        return isPrivate === start ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : '/start',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default Route;
