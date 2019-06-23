import React from 'react';
import PropTypes from 'prop-types';
import '../styles/ListElement.css';

const ListElement = props => {

    const { name, gender, date, fav,selected, onClick} = props;
    
    
    return (
        <div className="ListElement" onClick={() => onClick(selected)}>
            <div className="deleteBtn">
                <div className="cross"></div>
            </div>
            <div className="info">
                <b>{name} {fav ? 'Y' : 'N'}</b><br/>
                {gender} | Birth date: {date}
            </div>
        </div>
    );
}

ListElement.propTypes = {
    _enClick: PropTypes.func
};

export default ListElement;