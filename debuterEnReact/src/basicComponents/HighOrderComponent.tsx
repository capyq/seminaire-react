
const HighOrderComponent = () => {
    return (
        <div>
            <HOC>
                <div>
                    <h1>Children</h1>
                </div>
            </HOC>
        </div>
    )
}

type ParentProps = {
    children: React.ReactElement
}
const HOC = (props: ParentProps) => {
    const { children } = props;
    return <div>
        <p>Adding Content Before</p>
        {children}
        <p>Adding Content After</p>
    </div>
}


export default HighOrderComponent;
