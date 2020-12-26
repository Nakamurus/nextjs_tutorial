import styles from './modules.module.css';

funtcion Heading(props) {
    return (
        <div>
            <h1 className={styles.red}>{props.heading}</h1>
        </div>
    );
}

export default function Home() {
    return (
        <div>
            <Heading heading="heading"/>
        </div>
    );
}