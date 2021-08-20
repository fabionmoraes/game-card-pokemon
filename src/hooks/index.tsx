import React from 'react';

import { StartProvider } from './start';

const AppProvider: React.FC = ({ children }) => (
  <StartProvider>{children}</StartProvider>
);

export default AppProvider;
