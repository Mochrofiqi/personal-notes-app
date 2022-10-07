import React from "react";
import { getActiveNotes } from '../utils/local-data';
import SearchCatatan from "../components/SearchCatatan";
import ListCatatan from "../components/ListCatatan";
import { useSearchParams } from "react-router-dom";
import PropsTypes from 'prop-types';
import ButtonTambah from "../components/Button/ButtonTambah";

function HomePageWrapper(){
    const [searchParams, setSearchParams] = useSearchParams();
    const kata = searchParams.get("kata");
    
    function changeSearchParams(kata){
        setSearchParams({kata});
    }
    return <HomePage kata={kata} onSearch={changeSearchParams} />
}

class HomePage extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            catatans: getActiveNotes(),
            kata: props.kata || "",
        };
        this.onSearchHadler = this.onSearchHadler.bind(this);
    }

    onSearchHadler(kata) {
        this.setState(() => {
          return {
            kata,
          };
        });
        this.props.onSearch(kata);
      }

    render(){
        const catatans = this.state.catatans.filter((catatan) => {
            return catatan.title.toLocaleLowerCase().includes(
                this.state.kata.toLowerCase()
            )
        });

        return(
            <section className="homepage">
                <h2>Catatan Aktif</h2>
                <SearchCatatan kata={this.state.kata} onSearch={this.onSearchHadler} />
                <ListCatatan catatans={catatans}  />  
                <ButtonTambah />      
            </section>
        );
    }
}

HomePage.propsTypes = {
    kata: PropsTypes.string.isRequired,
    onSearch: PropsTypes.func.isRequired,
}

export default HomePageWrapper;