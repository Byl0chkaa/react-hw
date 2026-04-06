import {useForm} from "react-hook-form";
import type ICars from "../../models/ICars.ts";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../../validation/carValidator.ts";
import {addCar} from "../../services/api.service.ts";
import './CreateComponent.css'

export const CreateComponent = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<ICars>({
        mode: "all",
        resolver: joiResolver(carValidator)
    });
    const createHandler = (data: ICars) => {
        addCar(data);
    }

    return (
        <div>
            <form onSubmit={handleSubmit(createHandler)} className="form-container">
                <input type="text" {...register('brand')}/>
                <input type="number" {...register('price')}/>
                <input type="number" {...register('year')}/>
                <div className="errors-container">
                    {errors.brand?.message}
                    <span></span>
                    {errors.price?.message}
                    <span></span>
                    {errors.year?.message}
                </div>
                <button>Add car</button>
            </form>
        </div>
    );
};