
const PropsComponent = () => {
    return (
        <div>
            <InnerComponent text="Display by props" />
        </div>
    )
}

type PropsType = {
    text: string
}
function InnerComponent(props: PropsType) {
    return <h2 id='inner-component-header' >{props.text}</h2>
}

export default PropsComponent;
