import React from 'react';
import autoBindReact from "auto-bind/react";
import { addNote } from '../utils/local-data';
import ButtonSimpan from '../components/Button/ButtonSimpan';
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import Alert from '../components/Alert';

function TambahPageWrapper() {
  const navigate = useNavigate();
  return <TambahPage navigate={navigate} />;
}


class TambahPage extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      title: "", body: "",
    };
    autoBindReact(this);
  }

  onTitleInputHandler(event) {
    this.setState(() => ({
      title: event.target.value,
    }));
  }

  onBodyInputHandler(event) {
    this.setState(() => ({
      body: event.target.innerHTML,
    }));
  }
  
  onSubmitEventHandler(event) {
    event.preventDefault();
    addNote(this.state);
    Alert({ title: "Berhasil", message: "Catatan berhasil ditambahkan!" });
    this.props.navigate("/");
  }

  render(){
    return(
      <section className="add-new-page">
      <form onSubmit={this.onSubmitEventHandler}>
        <div className="add-new-page__input">
          <input className="add-new-page__input__title" placeholder="Judul Catatan" value={this.state.title} onChange={this.onTitleInputHandler} />
          <div className="add-new-page__input__body" contentEditable data-placeholder="Isi Catatan.." onInput={this.onBodyInputHandler} />
        </div>
        <div className="add-new-page__action">
          <ButtonSimpan />
        </div>
      </form>
    </section>
    )
  }
}

TambahPage.propsTypes = {
  navigate: PropTypes.func.isRequired,
}

export default TambahPageWrapper;