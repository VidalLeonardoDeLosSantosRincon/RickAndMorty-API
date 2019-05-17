//dependencies
import React,{Fragment} from 'react';

//assets
import './global/css/App.css';

//components
import Characters from './Characters';
import Banner from './global/Banner';
import SearchBox from './global/SearchBox';
import Footer from './global/Footer';

const App = (props) => {
  return (
    <Fragment>
      <Banner/>
      <SearchBox/>
      <Characters/>
      
      <Footer/>
    </Fragment>
  );
};

export default App;
