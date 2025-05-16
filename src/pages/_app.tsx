import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Provider from "@/context/Provider";
import CssBaseline from "@mui/material/CssBaseline";
import MainLayout from "@/layouts/MainLayout";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Provider>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </Provider>
    </ThemeProvider>
  );
}
