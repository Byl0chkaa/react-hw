import type {FC, ReactNode} from "react";
import type {CharacterModel} from "../../models/CharacterModel.ts";
import "./Character-component.css"

type PropsType = { character: CharacterModel, children: ReactNode}

const CharacterComponent: FC<PropsType> = ({character, children}) => {
    return (
        <div>
            <h2 className='heading'>Name: {character.name} {character.surname}</h2>
            <h2 className='heading'>Age: {character.age}</h2>
            <img src={character.photo} alt={character.photo}/>
            <h2>Info: {children}</h2>
        </div>
    );
};

export default CharacterComponent;