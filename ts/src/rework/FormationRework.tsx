import './StyleInfo.css';

import BasicComponent from './basic/BasicComponent';
import TodoCompoment from './todos/TodoCompoment';
import PokemonComponent from './pokemon/PokemonComponent';

const FormationRework = () => {


    return (
        <div className="center-hor">
            <BasicComponent />
            <TodoCompoment />
            <PokemonComponent />
        </div>
    )
}

export default FormationRework;
