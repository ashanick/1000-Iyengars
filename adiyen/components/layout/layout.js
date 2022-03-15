// This is like Main Navigation from Igenie -Nov 2021
// import { useState } from 'react';
import Hero from '../homepage/hero';
import NewSearch from '../users/new-search';
import MainHeader from './main-header';
// import Nav from './nav';

function Layout(props) {
  // const [drawerIsOpen, setDrawerIsOpen] = useState(false)
  return (
    <div >
      {/* <Nav /> */}
      <MainHeader />
      {/* <hr style={{border: '1px solid green'}}/> */}
      <NewSearch />
      {/* <Hero /> */}
      <main style={{margin: '1rem 5rem'}}>{props.children}</main>
    </div>
  );
}

export default Layout;