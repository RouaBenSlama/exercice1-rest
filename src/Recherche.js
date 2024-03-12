//import { Component } from "react";

//Fonction sans props
/*const Recherche = ({lieu}) => {
    return (
        <div>
            <h1> COMPOSANT RECHERCHE </h1>
            <h2> Je suis à {lieu} </h2>
        </div>
    );
}*/

//Fonction avec props
const Recherche = (props) => {
    return (
        <div>
            <h1> COMPOSANT RECHERCHE </h1>
            <h2> Je suis à {props.lieu} </h2>
            <button onClick={props.onPays}>CHANGER</button>
            <button onClick={props.onPays1}>CHANGER 2</button>
        </div>
    );
}

//Classe
/*export default class Recherche extends Component {
    render() {
        return (
            <div>
                <h1> COMPOSANT RECHERCHE </h1>
                <h2> Je suis à {this.props.lieu} </h2>
            </div>
        );
    }
}*/

export default Recherche;