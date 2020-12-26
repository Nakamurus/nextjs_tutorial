function Heading(props) {
    const color = Math.random() > 0.5 ? 'red' : 'blue';
    return (
        <div>
            <h1>{props.heading}</h1>
            <style jsx>
                {`
                    h1 {color: ${color};}
                `}
            </style>
        </div>
    );
}

export default function Home() {
    return (
        <div>
            <Heading heading="Heading"/>
            <h1>Here</h1>
        </div>
    );
}