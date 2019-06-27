import React from 'react';

import '../styles/Details.css';

class Details extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            edit: false,
            changed: false,
            modal: false
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

    _volver() {
        const { edit, name, films, mass, height} = this.state;

        if (edit) {
            if (this.props.name != name || this.props.height != height || this.props.films != films || this.props.mass != mass) {
                //si hay cambios sin guardar:
                this.setState({modal: true});
            }
        } else {
            this.props.onClick(0);
        }
    }

    render() {
        const { gender, date, fav, id, _setFav } = this.props;

        const { edit, name, films, mass, height, modal } = this.state;

        const styleStar = { backgroundPositionY: fav ? -837 : -420 };

        return(
            <div className="Details">
            {modal &&
                <div className="modalBg">
                    <div className="Modal">
                        <h3>Seguro que queres volver?</h3>
                        <h4>Dejaste cambios sin guardar</h4>
                        <div className="botones">
                            <div 
                            className="Button dark"
                            onClick={() => {this.setState({modal: false})}}
                            >No
                            </div>
                            <div 
                            className="Button"
                            style={ {borderColor: '#1b1b1b'}}
                            onClick={() => this.props.onClick(0)}
                            >Volver</div>
                        </div>
                    </div>
                </div>
            }
                <div className="Details-return" onClick={() => this._volver()}>{'< volver al listado'}</div>
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
                                this.props._saveChanges({
                                    name: name,
                                    height: height,
                                    films: films,
                                    mass: mass,
                                    id: id
                                });
                            }
                            this.setState({edit: !edit});
                        }}
                >{edit ? 'Guardar cambios' : 'Editar'}</div>
            </div>
        );
    }
}

export default Details;