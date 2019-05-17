//dependencies
import React,{Component,Fragment} from 'react';

//assets
import './css/SearchBox.css';
class SearchBox extends Component{
    render(){
        return(
            <Fragment>
                <div className="search_box">
                    <input className="field_search" type="text" name="search_input" id="search_input"/>
                    <input className="search_button" type="button" value="Buscar"/>
                </div>
            </Fragment>
        );
    }
}
export default SearchBox;

