import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";
import PropTypes from 'prop-types';

const Courses = ({handleAddToSelections}) => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch(".././../../course.json")
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])

    return (
        <div className="md:w-2/3">
            <div className=" lg:grid lg:grid-cols-3 gap-10 m-5 w-fit">
                {
                    courses.map(course => <Course key={course.id} course={course} handleAddToSelections={handleAddToSelections}></Course>)
                }
            </div> 
        </div>
    );
};
Courses.propTypes = {
    handleAddToSelections: PropTypes.object.isRequired

}

export default Courses;