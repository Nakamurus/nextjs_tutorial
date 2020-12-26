import styles from './main.module.css';
// Recommended over css-in-js
function Heading(props) {
    return (
        <div>
            <h1 className={styles.red}>{props.heading}</h1>
        </div>
    );
}

export default function Home() {
    return (
        <div>
            <Heading heading="Heading"/>
            <h1>Green</h1>
        </div>
    );
}