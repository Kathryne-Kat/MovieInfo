import { Outlet } from 'react-router-dom';

export const Layout = data => {
  <>
    <Section />
    <main>{<Outlet />}</main>;
  </>;
};
