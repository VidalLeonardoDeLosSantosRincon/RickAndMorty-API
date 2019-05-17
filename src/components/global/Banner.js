//dependencies
import React,{Fragment} from 'react';

//assets
import './css/Banner.css';
import './css/BannerResponsive.css';
import bannerImg from './img/banner_img.jpg';

const Banner = (props)=>{
    return(
        <Fragment>
            <div className="banner" /*style={{backgroundImage:`url(${bannerImg})`}}*/>
                  <img className="banner_img" src={bannerImg} alt="banner_img"/>
            </div>
        </Fragment>
    );
};
export default Banner;
