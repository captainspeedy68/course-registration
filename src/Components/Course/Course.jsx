import PropTypes from 'prop-types';
// import frameLogo from '.assets/Frame.svg'
// import { FaBookOpen } from 'react-icons/go';
import { FiDollarSign } from 'react-icons/fi';
import { GoBook } from "react-icons/go";

const Course = ({ course, handleAddToSelections}) => {
    // console.log(course.id);
    const { title, image, price, course_details, credit } = course
    // console.log(title);
    return (
        <div className="shadow-lg p-5 w-fit rounded-md border border-gray-300 flex flex-col">
            <div className="mb-4">
                <img className="mx-auto" src={image} alt={`image of courses`} />
            </div>
            <h3 className="text-xl font-semibooold my-2">{title}</h3>
            <p className="text-sm font-normal text-gray-600 mb-4">{course_details}</p>

            {/*an empty div to keep the button in the bottom */}
            {/* it will fill the remaining space */}
            <div className="flex-grow"></div> 

            <div className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                    {/* <img className="w-4 h-4 mr-2" src="/public/dollar-sign 1.svg" alt="" /> */}
                    <FiDollarSign></FiDollarSign>
                    <span className="text-sm font-medium">Price:{price}</span>
                </div>
                <div className="flex items-center">
                    <GoBook></GoBook>
                    {/* <button className='text-white border-black'><FaBookOpen></FaBookOpen></button> */}
                    {/* <img className="w-4 h-4 mr-2" src="/public/Frame.svg" alt="" /> */}
                    <span className="text-sm font-medium">Credit:{credit}hr</span>
                </div>
            </div>
            <button className="block w-full mx-auto mt-6 px-4 py-2 text-white text-lg font-semibold rounded-md bg-[#2F80ED] focus:bg-blue-700 focus:outline-none" onClick={() => handleAddToSelections(course)}>
                Select
            </button>
        </div>
    );
};
Course.propTypes = {
    course: PropTypes.object.isRequired,
    handleAddToSelections: PropTypes.object.isRequired
}
export default Course;