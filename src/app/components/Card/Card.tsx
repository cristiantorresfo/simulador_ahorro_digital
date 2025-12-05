import Image from "next/image";
import styles from "./Card.module.scss";
import { useRouter } from "next/navigation";

export default function Card({
    title,
    image,
    children,
    rate,
}: {
    title: string;
    rate: number;
    image: string;
    children: React.ReactNode;
}) {

    const router = useRouter();

    const handleClick = () => {
        router.push(
            `/simulator?name=${encodeURIComponent(title)}&rate=${rate}`
        );
    };

    return (
        <div className={styles.card}>
            <div className={styles.imageWrapper}>
                <Image
                    src={image}
                    alt={title}
                    fill
                    className={styles.image}
                    sizes="(max-width: 768px) 100vw, 300px"
                />
            </div>

            <h3 className={styles.title}>{title}</h3>
            <div className={styles.text}>{children}</div>
            <button className={styles.button} onClick={handleClick} >Simulación</button>
        </div>
    );
}