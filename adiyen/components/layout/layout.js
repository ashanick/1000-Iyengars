// This is like Main Navigation from Igenie -Nov 2021
// import { useState } from 'react';
import MainHeader from './main-header';
import FooterPage from './footer-page';
// import Nav from './nav';

function Layout(props) {
  // const [drawerIsOpen, setDrawerIsOpen] = useState(false)
  return (
    <div >
      {/* <Nav /> */}
      <MainHeader />
      {/* <NewSearch />
      <hr style={{border: '1px solid red'}}/> */}
      {/* <Hero /> */}
      <main >{props.children}</main>
      <hr style={{border: '1px solid red'}}/>
      <FooterPage />
    </div>
  );
}

export default Layout;