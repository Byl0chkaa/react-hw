import type {CoursesArrayModel} from "../../models/CoursesArrayModel.ts";
import type {FC} from "react";
import "./Course-array-component.css"

type PropsType = { course: CoursesArrayModel }

const CourseArrayComponent: FC<PropsType> = ({course}) => {
    return (
        <div className="course-card">
            <h2>CourseName: {course.title}</h2>
            <p>Course MonthDuration: {course.monthDuration}</p>
            <p>Course HourDuration: {course.hourDuration}</p>
            <p>Course Modules: {course.modules.join(', ')}</p>
        </div>
    );
};

export default CourseArrayComponent;