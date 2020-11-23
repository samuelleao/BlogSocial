import 'bootstrap/dist/css/bootstrap.min.css';

import '../styles/globals.css'
import '../styles/fonts.css'
import '../styles/colors.css'

import '../styles/components/blogCard.css'
import '../styles/components/blogPosts.css'
import '../styles/components/blogCategory.css'

import '../styles/pages/home.css'


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
