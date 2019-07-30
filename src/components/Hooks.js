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
            <button aria-label="Click me" className="btn btn-primary" onClick={() => setCount(count + 1)}>
                Click me
            </button>

            <p ref={ref} tabIndex="-1">Width: {width}</p>

            <dl>
                <dt tabIndex="-1">Fruits</dt>
                <dd tabIndex="-1">Mango</dd>
                <dd tabIndex="-1">Organge</dd>
                <dd tabIndex="-1">Pineapple</dd>
                <dt tabIndex="-1">Vegetables</dt>
                <dd tabIndex="-1">Carrot</dd>
                <dd tabIndex="-1">Potato</dd>
            </dl>
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