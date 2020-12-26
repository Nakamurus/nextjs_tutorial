import '../styles/globals.css'

// executed on the both server and client side.
function MyApp({ Component, pageProps }) {
  console.log('HELLOO')
  return <Component {...pageProps} />
}

export default MyApp
