import {simpsons} from "C:/Users/sakal/Desktop/Курси/react/arrays.ts"
import type {CharacterModel} from "../../models/CharacterModel.ts";
import CharacterComponent from "../character-component/CharacterComponent.tsx";
import "./Family-component.css"

export const FamilyComponent = () => {
    return (
        <div className='characters'>
            {
                simpsons.map((simpson: CharacterModel, index) => {
                    return <CharacterComponent character={simpson} key={index}>
                        {simpson.info}
                    </CharacterComponent>
                })
            }
        </div>
    );
};

