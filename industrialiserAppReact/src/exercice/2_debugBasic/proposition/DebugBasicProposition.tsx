import useRenderCount from "../../../hook/useRenderCount";
import ClickerCount from "./ClickerCount";
import TickCounter from "./TickCounter";

const DebugBasicProposition = () => {
    const countRender = useRenderCount();
    return (
        <div>
            <h1> Basics </h1>
            <p>Count render : {countRender}</p>
            <TickCounter />
            <ClickerCount />
        </div>
    )
}

export default DebugBasicProposition;
