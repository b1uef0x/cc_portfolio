
import 'tailwindcss/tailwind.css'
import Navigation from "../components/Navigation";
import { ThemeProvider } from 'next-themes'
import Footer from "../components/Footer";
import "../styles/custom.css";
import "react-image-gallery/styles/css/image-gallery.css";
import dynamic from 'next/dynamic'
const ParticlesBg = dynamic(
    () => import('particles-bg'),
    {
        ssr: false
    }
)

function MyApp({ Component, pageProps }) {
  return <>
    <ThemeProvider attribute="class" enableSystem={true}>
    <Navigation/>
    <Component {...pageProps} />
    <Footer/>
    </ThemeProvider>
    </>
}

export default MyApp