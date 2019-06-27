import React from 'react';
import PropTypes from 'prop-types';
import '../styles/ListElement.css';

const ListElement = props => {

    const { name, gender, date, fav, selected, onClick, _remove} = props;

    const styleStar = { backgroundPositionY: fav ? -837 : -420 };
    
    return (
        <div className="ListElement">
            <div className="deleteBtn">
                <div className="cross" onClick={() => _remove(selected)}></div>
            </div>
            <div className="info" onClick={() => onClick(selected)}>
                <b>{name}</b>
                <div className="listStar" style={styleStar}></div><br/>
                {gender != 'n/a' ? gender.charAt(0).toUpperCase() + gender.slice(1) + ' | ': ''}Birth date: {date}
            </div>
        </div>
    );
}

ListElement.propTypes = {
    _enClick: PropTypes.func
};

export default ListElement;