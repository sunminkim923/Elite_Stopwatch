import "@/styles/globals.css";
import type { AppProps } from "next/app"; // Import the functions you need from the SDKs you need

export default function AppHome({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
