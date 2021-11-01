import React, { ReactNode } from 'react';
interface PropsI {
  children?: ReactNode;
  title?: string;
  getLayout: any;
}
const Layout = ({ children }: PropsI) => {
  return <div>{children}</div>;
};

export default Layout;
