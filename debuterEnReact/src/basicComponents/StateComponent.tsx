import React from "react";

class StateComponent extends React.Component {
    state = {
        titre: "State Titre"
    }

    render() {
        setTimeout(() => {
            this.setState({ titre: "newTitre" })
        }, 2000);
        return (
            <h2>
                {this.state.titre}
            </h2>
        )
    }
}

export default StateComponent;
