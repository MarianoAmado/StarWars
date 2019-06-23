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

        if (!details) {
            return(
                <div className="ListContainer">
                    <div className="Button" onClick={() => this._clickFilter()}>Filtrar por favoritos</div>
                    <div className="List">
                        {this.props.characters.map((character, i) => {
                            const { name, gender, date, fav } = character;
                            if (!filter || filter == fav) {
                                return (
                                    <ListElement
                                        name={name}
                                        gender={gender}
                                        date={date}
                                        fav={fav}
                                        key={i}
                                        selected={i}
                                        onClick={this._enClick}
                                    />
                                );
                            } else return(<div></div>);
                        })}
                    </div>
                </div>
            
            );
        } else {
            const character = this.props.characters[this.state.selected];
            return (
                <Details
                    name={character.name}
                    gender={character.gender}
                    date={character.date}
                    fav={character.fav}
                    onClick={this._enClick}
                />
            );
        }
    }
}

export default List;