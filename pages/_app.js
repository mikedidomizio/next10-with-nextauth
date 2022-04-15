import '../styles/globals.css'
import { SessionProvider } from "next-auth/react"

console.log(process.env.GITHUB_ID);
console.log(process.env.GITHUB_SECRET.substring(0, 5));
console.log(process.env.NEXTAUTH_URL);

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return <SessionProvider session={session}><Component {...pageProps} /></SessionProvider>
}

export default MyApp
