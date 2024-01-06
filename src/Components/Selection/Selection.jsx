import PropTypes from 'prop-types';

import './Selection.css'
const Selection = ({selection, index}) => {
    const {title} = selection;
    return (
        <div className='pb-2'>
            <h3 className='font-normal text-sm selection-text'>{index}. {title}</h3>
        </div>
    );
};
Selection.propTypes = {
    selection: PropTypes.object.isRequired
}

export default Selection;