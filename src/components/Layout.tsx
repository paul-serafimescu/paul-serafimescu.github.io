import * as React from 'react';
import NavBar from './NavBar';

type LayoutProps = {};

export const Layout: React.FC<LayoutProps> = ({ children }) => (
  <>
    <NavBar />
    {children}
  </>
);
