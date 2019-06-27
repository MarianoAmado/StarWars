import React from 'react';

import '../styles/Details.css';

class Details extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            edit: false,
            changed: false
        };

    }
    
    componentDidMount() {
        this.setState({
            name: this.props.name,
            films: this.props.films,
            mass: this.props.mass,
            height: this.props.height
        });
    }
    
    _onNameChange = (e) => {
       this.setState({
           name: e.target.value
       });
    }

    _onFilmsChange = (e) => {
        this.setState({
            films: e.target.value
        });
    }

    _onHeightChange = (e) => {
        this.setState({
            height: e.target.value
        });
    }
    _onMassChange = (e) => {
        this.setState({
            mass: e.target.value
        });
    }

    render() {
        const { gender, date, fav, onClick, id, _setFav } = this.props;

        const { edit, name, films, mass, height } = this.state;

        const styleStar = { backgroundPositionY: fav ? -837 : -420 };

        return(
            <div className="Details">
                <div className="Details-return" onClick={() => onClick(0)}>{'< volver al listado'}</div>
                <div className="Details-content">
                    <div className="Details-name">
                        <input
                            className={edit ? 'edit' : ''}
                            type="text"
                            name="name"
                            value={name}
                            onChange={this._onNameChange}
                            disabled={!edit}
                        />
                        <div className="star" style={styleStar} onClick={() => _setFav(id)}></div><br/>
                    </div>
                    <div className="Details-info">
                        <div className="gender">{gender.charAt(0).toUpperCase() + gender.slice(1)}</div>
                        <div>Birthday date: {date}</div>
                        <div>
                            <label >Amount of films:</label>
                            <input
                                type="text"
                                name="films"
                                id="films"
                                value={films}
                                onChange={this._onFilmsChange}
                                disabled={!edit}
                            />
                        </div>
                        <div>
                            <label >Height: </label>
                            <input
                                type="text"
                                name="height"
                                id="height"
                                value={height}
                                onChange={this._onHeightChange}
                                disabled={!edit}
                            />
                            <label >| Mass: </label>
                            <input
                                type="text"
                                name="mass"
                                id="mass"
                                value={mass}
                                onChange={this._onMassChange}
                                disabled={!edit}
                            />
                        </div>
                    </div>
                </div>
                <div 
                    className="Button"
                    onClick={() => {
                            if (edit && (this.props.name != name || this.props.height != height || this.props.films != films || this.props.mass != mass)) {
                                    //PREGUNTAR SI GUARDAR!!
                                    //guardar
                            } else {
                                this.setState({edit: !edit});
                            }
                        }}
                >{edit ? 'Guardar cambios' : 'Editar'}</div>
            </div>
        );
    }
}

export default Details;