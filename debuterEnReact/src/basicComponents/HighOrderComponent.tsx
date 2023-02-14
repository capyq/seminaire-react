
const HighOrderComponent = () => {
    return (
        <div>
            <HOC>
                <div>
                    <h1 id='high-order-component-child' >Children</h1>
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
    return (
        <div id='high-order-component'>
            <p id='high-order-component-before'>Adding Content Before</p>
            {children}
            <p id='high-order-component-after'>Adding Content After</p>
        </div>
    )
}


export default HighOrderComponent;
