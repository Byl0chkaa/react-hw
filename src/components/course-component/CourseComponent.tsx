import type {FC} from "react";
import type {CourseModel} from "../../models/CourseModel.ts";
import "./Course-component.css"

type PropsType = { course: CourseModel }

const CourseComponent: FC<PropsType> = ({course}) => {
    return (
        <ul>
            <li>
                {course.title} {course.monthDuration}
            </li>
        </ul>
    );
};

export default CourseComponent;