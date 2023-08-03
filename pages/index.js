import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Logo from '../public/logo.png'
import TitlePhoto from '../public/titlephoto.png'
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import PhotoGallery from '../components/photogallery/photogallery';

export default function Home() {

  
 const photoblok1 = [
    { src: "/img/img1.jpg", ratio: 3/2},
    { src: "/img/img2.jpg", ratio: 3/2},
    { src: "/img/img4.jpg", ratio: 3/2},   
]

 const photoblok2 = [
    { src: "/img/img3.jpg", ratio: 1/1},
    { src: "/img/img7.jpg", ratio: 1/1},
    { src: "/img/img9.jpg", ratio: 1/1},   
]

 const photoblok3 = [
    { src: "/img/img5.jpg", ratio: 3/2},
    { src: "/img/img6.jpg", ratio: 3/2},
    { src: "/img/img8.jpg", ratio: 3/2},   
]


  console.log(photoblok1);
  return (
    <div className={styles.container}>
      <Head>
        <title>Січеславці</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={styles.title}>
            <Image 
              src={TitlePhoto} 
              alt='групове фото козаків Січеславців'
              className={styles.logo}  
            />
          </div>
          <div className={styles.title}>
              <Image 
                src={Logo} 
                alt='клуб козацького бою Січеславці'
                className={styles.logo}  
              />
          </div>

        <p className={styles.description}>
          <Link 
            href="http://facebook.com/sicheslavci" 
            target="_blank"
            className={styles.sociallink}
            >
                <FaFacebook/>
          </Link>
          <Link 
            href="http://instagram.com/sicheslavci"
            target="_blank"
          >
              <FaInstagram/>
          </Link>
        </p>

        <div className={styles.grid}>
          
          <PhotoGallery images={photoblok1} />
          <PhotoGallery images={photoblok2} />
          <PhotoGallery images={photoblok3} />
        </div>
      </main>

      <footer>
       
          Powered by{' '} Mustache development
        
      </footer>

      <style jsx>{`
        main {
          padding: 2rem 0;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
