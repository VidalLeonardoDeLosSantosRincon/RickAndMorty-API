//dependencies
import React,{Component, Fragment} from 'react';

//assets
import './global/css/Character.css';

class Character extends Component{
    constructor(props){
      super(props);
    }
    render(){
        const {character} = this.props;
    
        return(
            <Fragment>
                <div className="character_box" style={{ backgroundImage: `url(${character.image})` }}>
                    <div className="character_name"> 
                        <h6>{character.name}</h6>
                    </div>
                </div>
            </Fragment>
        );
    }
}
export default Character;