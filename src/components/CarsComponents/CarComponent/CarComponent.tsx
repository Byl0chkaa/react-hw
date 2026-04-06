import type ICars from "../../../models/ICars.ts";
import './CarComponent.css'

interface CarComponentProps {
    car?: ICars
}

export const CarComponent = ({car}: CarComponentProps) => {
    return (
        <div className="car-card">
            <p>ID: {car.id}</p>
            <p>Brand: {car.brand}</p>
            <p>Car price: {car.price}</p>
            <p>Year of production: {car.year}</p>
        </div>
    );
};