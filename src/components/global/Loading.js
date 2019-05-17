//dependencies
import React,{Fragment} from 'react';

//assets
import './css/Loading.css';
import imgLoad from './img/loading.gif';

const Loading = (props) =>{
    return(
        <Fragment>
            <div className="loader">
                <img className="img_load" src={imgLoad} alt="img_loading"/>
            </div>
        </Fragment>
    );
};

export default Loading;