import '../styles/style.scss';
import NavBar from '../components/navigation';
import Footer from '../components/footer';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
