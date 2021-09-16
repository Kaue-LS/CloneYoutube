import { ThemeProvider } from '@material-ui/styles';
import theme from '../themes/index';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />;
      </ThemeProvider>
    </>
    // ele é como se fosse o caderno que tem um a folha em branco e as anteriores feitas
    // ele é um spread
  );
}

export default MyApp;
