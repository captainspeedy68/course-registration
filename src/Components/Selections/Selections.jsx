import Selection from "../Selection/Selection";
import PropTypes from 'prop-types';
// import { useState } from "react";

const Selections = ({selections, remainingTime, price}) => {


    return (
        <div className="md:w-1/3 h-fit shadow-lg rounded-xl p-5">
            <h1 className="text-[#2F80ED] text-lg font-bold py-2">Credit Hour Remaining {20 - remainingTime}hr</h1>
            <hr />
            <h3 className="font-bold text-xl pt-2 pb-3">Course Name</h3>
            {
                selections.map((selection, index) => <Selection key={selection.id} selection={selection} index={index + 1} ></Selection>)
            }
            <hr />
            <h3 className="py-3 text-xs font-medium">Total Credit Hour: {remainingTime}</h3>
            <hr />
            <h3 className="py-3 text-xs font-medium">Total Price : {price} USD</h3>
        </div>
    );
};

Selections.propTypes = {
    selections: PropTypes.array,
    remainingTime: PropTypes.number,
    price: PropTypes.number
}


export default Selections;