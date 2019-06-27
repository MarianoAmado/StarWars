import React from 'react';
import ListElement from './ListElement';

import '../styles/List.css';
import Details from './Details';

class List extends React.Component {
    constructor(props) {
        super(props);

        this.state ={
            details: false,
            filter: false,
            selected: 0
        };
        console.log(props);
        
        this._enClick = this._enClick.bind(this);
        this._clickFilter = this._clickFilter.bind(this);
    }    

    _enClick(key){
        this.setState({details: !this.state.details, selected:key});
    }

    _clickFilter() {
        this.setState({ filter: !this.state.filter });
    }
    
    render() {
        const { details, filter } = this.state;

        if (this.props.characters) {
            if (!details) {
                return(
                    <div className="ListContainer">
                        <div 
                            className={`Button ${filter ? 'btnSelected' : ''}`}
                            onClick={() => this._clickFilter()}
                        >Filtrar por favoritos</div>
                        <div className="List">
                            {this.props.characters.map((character, i) => {
                                const { name, gender, birth_year, fav } = character;

                                if (!filter || filter == fav) {
                                    return (
                                        <ListElement
                                            name={name}
                                            gender={gender}
                                            date={birth_year}
                                            fav={fav}
                                            key={i}
                                            selected={i}
                                            onClick={this._enClick}
                                            _remove={this.props._remCharacter}
                                        />
                                    );
                                } else return(<div></div>);
                            })}
                        </div>
                        <div className="Pages">
                            { this.props.previous &&
                                <div
                                    className="anterior"
                                    onClick={() => this.props._previousPage()}    
                                >{'< Anterior'}</div> }
                            { this.props.next &&
                                <div
                                    className="siguiente"
                                    onClick={() => this.props._nextPage()}
                                >{'Siguiente >'}</div>}
                        </div>
                    </div>
                
                );
            } else {
                const character = this.props.characters[this.state.selected];
                return (
                    <Details
                        name={character.name}
                        gender={character.gender}
                        date={character.birth_year}
                        fav={character.fav}
                        films={character.films.length}
                        mass={character.mass}
                        height={character.height}
                        onClick={this._enClick}
                        id={this.state.selected}
                        _setFav={this.props._setFav}
                        _saveChanges={this.props._saveChanges}
                    />
                );
            }
        } else return(null);
    }
}

export default List;