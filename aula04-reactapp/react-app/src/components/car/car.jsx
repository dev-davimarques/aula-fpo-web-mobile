import { useState } from "react";

function Car(){

    const [car, setCar] = useState({
        brand: "Ford",
        model: "Mustang",
        year: "1964",
        color: "red"
    });

    const updateColorToBlue = () => {
        setCar(previousState => {
            return {...previousState, color: "blue"}
        });
    }

    // Em previousState eu posso colocar o nome que eu quiser
    const updateColorToRed = () => {
        setCar(previousState => {
            return {...previousState, color: "red"}
        });
    }

    return(
        <>
            <h1>My {car.brand}</h1>
            <p>
                It is a {car.color} {car.model} from {car.year}
            </p>
            <button type="button" onClick={updateColorToBlue}>Blue</button>
            <button type="button" onClick={updateColorToRed}>Red</button>
        </>
    );  
}

export default Car;