import Navbar from './Navbar';
import Meta from './Meta';
import Footer from './Footer';

const Layout = ({ childern }) => {
  return (
    <>
      <Meta />
      <Navbar />
      <main>
        {childern}
      </main>
      <Footer />
    </>
  )
}

export default Layout