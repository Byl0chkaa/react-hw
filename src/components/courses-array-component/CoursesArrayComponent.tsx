import {coursesArray} from "../../models/arrays.ts"
import type {CoursesArrayModel} from "../../models/CoursesArrayModel.ts";
import CourseArrayComponent from "../course-array-component/CourseArrayComponent.tsx";
import "./Courses-array-component.css"

export const CoursesArrayComponent = () => {
    return (
        <div className="courses-grid">
            {
                coursesArray.map((course: CoursesArrayModel, index) => {
                    return <CourseArrayComponent course={course} key={index}/>
                })
            }
        </div>
    );
};