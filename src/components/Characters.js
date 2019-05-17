//dependencies
import React,{Component, Fragment} from 'react';

//assets
import './global/css/Characters.css';

//components
import Character from './Character';
import Loading from './global/Loading';

class Characters extends Component{
    constructor(props){
        super(props);
        this.state = {
            loading:true,
            error:null,
            data:{
                info:{},
                results:[]
            },
            page:1
           
        };

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(){
        this.fetchCharacter(this.state.page);
    }

    fetchCharacter = async (page)=>{
        this.setState({
            loading:true,
            error:null
        });
        try{
            const resp = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`);
            const data = await resp.json();

            this.setState({
                loading:false,
                data:data
            });
        }catch(error){
            this.setState({
                loading:false,
                error:error
            });
        }
    };

    handleClick(e){
        if(e.target.name==="next" && this.state.page<25){
                this.setState({
                    page : this.state.page + 1
                });
                this.fetchCharacter(this.state.page + 1);
        }else if(e.target.name==="prev" && this.state.page>1){
                this.setState({
                    page : this.state.page - 1
                });   
                this.fetchCharacter(this.state.page - 1);
        }
    }

    render(){
        const {pages, count} = this.state.data.info;
        if(this.state.error){
            alert(`${this.state.error}`);
        }
        if(this.state.loading){
            return(
            <Fragment>
                <Loading/>
            </Fragment>);

        }else{
            return(
                <Fragment>
                        <h2 className="title_characters">Characters | {count}</h2>
                        
                        <div className="character_container">  
                        {this.state.data.results.map((character,key)=>{
                            return(
                            <div key={key}>
                            <Character character={character} />
                            </div>
                            )})
                        }
                        </div>
                        
                        <div className="pagination_box">
                            <span className="pages_count">{this.state.page} / {pages}</span>
                            <div>
                                <input className="pagination_btn btn_prev" name="prev" type="button" value="Prev" onClick={this.handleClick}/>
                                <input className="pagination_btn btn_next" name="next" type="button" value="Next" onClick={this.handleClick}/>
                            </div>
                        </div>
                </Fragment>
            );
        }
    }
}
export default Characters;

