import Head from 'next/head'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function CharacterDesign() {
  // Taking care of the browser-specific prefixes.
 // Taking care of the browser-specific prefixes.
 function importAll(r) {
    let images = [];
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  const listOfImages = importAll(require.context('../public/Chiara_Corey_Design_Portfolio/Character_Design/', false, /\.(png|jpe?g|svg)$/));
  const images = Object.keys(listOfImages).map((key, index) => {return(
      <div key={index} className="img_gallery_container">
          <img className="gallery_image" src={'./Chiara_Corey_Design_Portfolio/Character_Design/' + key}/>
     </div>
    )})

  return (
    <div className="space-y-14 lg:space-y-24">
      <Head>
        <title>Chiara Corey</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="max-w-4xl mx-auto mt-16 antialiased">
        <div className="gallery-name">Character Design Gallery</div>
        <div className="gallery-container">
        <Carousel dynamicHeight={false}>{images}</Carousel>
        </div>
      </main>
    </div>
  )
}