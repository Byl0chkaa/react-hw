import {coursesAndDurationArray} from "C:/Users/sakal/Desktop/Курси/react/arrays.ts"
import type {CourseModel} from "../../models/CourseModel.ts";
import CourseComponent from "../course-component/CourseComponent.tsx";
import "./Courses-component.css"


export const CoursesComponent = () => {

    return (
        <div>
            {
                coursesAndDurationArray.map((course: CourseModel, index) => {
                    return <CourseComponent course={course} key={index}/>;
                })
            }
        </div>
    );
};
