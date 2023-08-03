import styles from "../photogallery/photogallery.module.css"
import Image from 'next/image';


// const images = [
//     { src: "/img/img1.jpg", ratio: 3/2},
//     { src: "/img/img2.jpg", ratio: 3/2},
//     { src: "/img/img3.jpg", ratio: 3/2},   
// ]

export default function Photogallery({images}) {
    return (
        <div className={styles.container}>
            {images.map( (img) => (
                <Image 
                    key={img.src}
                    src={img.src} 
                    alt='клуб козацького бою Січеславці'
                    className={styles.image}  
                    width={500} // Встановлюємо початкову ширину (за бажанням)
                    height={500 / img.ratio}
                />
            ))}
        </div>
    )
}