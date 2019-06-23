import React from 'react';

import '../styles/Details.css';

class Details extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            edit: false
        };

    }

    render() {
        const { name, gender, date, fav, onClick } = this.props;

        const styleStar = {
            backgroundPositionY: fav ? -420 : -837
        }

        return(
            <div className="Details">
                <div className="Details-return" onClick={() => onClick(0)}>{'< volver al listado'}</div>
                <div className="Details-content">
                    <div className="Details-name">{name}
                        <div className="star" style={styleStar}></div>
                    </div>
                    <div className="Details-info">
                        <div>{gender}</div>
                        <div>Birthday date: {date}</div>
                        <div>Amount of films: n</div>
                        <div>Height:n | Mass: n</div>
                    </div>
                </div>
                <div className="Button" onClick={() => {this.setState({edit: true})}}>Editar</div>
            </div>
        );
    }
}

export default Details;