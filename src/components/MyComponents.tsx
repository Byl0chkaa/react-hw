import {type FC, type ReactNode} from 'react';
type MyComponentProps = {text: string; children?: ReactNode}

const MyComponents: FC<MyComponentProps> = ({text, children}) => {
    return (
        <div className="text-3xl font-bold underline">
            <h2>{text}</h2>
            <p>{children}</p>
        </div>
    );
};

export default MyComponents;