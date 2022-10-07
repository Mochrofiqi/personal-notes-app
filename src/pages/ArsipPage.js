import React from "react";
import { getArchivedNotes } from "../utils/local-data";
import CatatanKosong from "../components/CatatanKosong";
import ListCatatan from "../components/ListCatatan";
import SearchCatatan from "../components/SearchCatatan";
import { useSearchParams } from 'react-router-dom';
import PropsTypes from 'prop-types';

function ArsipPageWrapper(){
  const [searchParams, setSearchParams] = useSearchParams();
    const kata = searchParams.get("kata");
    
    function changeSearchParams(kata){
        setSearchParams({kata});
    }
    return <ArsipPage kata={kata} onSearch={changeSearchParams} />
}

class ArsipPage extends React.Component{
  constructor(props){
    super(props);

    this.state = {
        catatans: getArchivedNotes(),
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

  return (
    <section className="archives-page">
      <h2>Catatan Arsip</h2>
      <SearchCatatan kata={this.state.kata} onSearch={this.onSearchHadler} />
      {catatans.length !== 0 ? (
        <ListCatatan catatans={catatans} />
      ) : (
        <CatatanKosong />
      )}
    </section>
  );
  }
}

ArsipPage.propsTypes = {
  kata: PropsTypes.string.isRequired,
  onSearch: PropsTypes.func.isRequired,
}

export default ArsipPageWrapper;