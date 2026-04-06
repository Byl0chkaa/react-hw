import {useEffect, useState} from "react";
import {getCars} from "../../../services/api.service.ts";
import {CarComponent} from "../CarComponent/CarComponent.tsx";
import type ICars from "../../../models/ICars.ts";
import './CarsComponent.css'

export const CarsComponent = () => {
    const [cars, setCars] = useState<ICars[]>([])

    useEffect(() => {
        getCars().then((cars) => {
            setCars(cars)
        })
    }, []);
    return (
        <div className="car-container">
            {
                cars.map((car) => <CarComponent key={car.id} car={car}/>)
            }
        </div>
    );
};