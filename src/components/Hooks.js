function Hooks() {
    const [count, setCount] = React.useState(0);
    const width = useWindowWidth();
    const ref = React.useRef();

    React.useEffect(() => {
        ref.current.focus(); //sample for keyboard users
    }, [count]);

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
            <ul>
                <li ref={ref} tabIndex="-1">Width: {width}</li>
            </ul>
        </div>
    )
}

function useWindowWidth() {
    const [width, setWidth] = React.useState(window.innerWidth);
    React.useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    });
    return width;
}