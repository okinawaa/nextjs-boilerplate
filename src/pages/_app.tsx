import "../styles/font-face.css";
import type { AppProps } from "next/app";
import GlobalStyle from "~/styles/Global.style";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
