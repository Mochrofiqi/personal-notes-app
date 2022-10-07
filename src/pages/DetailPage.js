import React from "react";
import { archiveNote, deleteNote, getNote, unarchiveNote } from "../utils/local-data";
import PropTypes from "prop-types";
import autoBindReact from "auto-bind/react";
import { useNavigate, useParams } from "react-router-dom";
import { showFormattedDate } from "../utils/index.js";
import Button from "../components/Button/Button";
import HalamanKosong from "./HalamanKosong";
import Alert from "../components/Alert";

function DetailPageWrapper() {
  const { id } = useParams();
  const navigate = useNavigate();

  return <DetailPage id={id} navigate={navigate} />;
}


class DetailPage extends React.Component {
  constructor(props) {
    super(props);
      this.id = props.id;
      this.navigate = props.navigate;
    
      this.state = {
        catatan: getNote(this.id),
      };
    autoBindReact(this);
  }

  onDeleteCatatan() { 
    deleteNote(this.id);
    Alert({ title: "Berhasil", message: "Catatan berhasil dihapus!" });
    this.navigate("/");
  }

  onArchiveCatatan() {
    archiveNote(this.id);
    Alert({ title: "Berhasil", message: "Catatan berhasil diarsipkan!" });
    this.navigate("/");
  }

  onUnarchiveCatatan() {
    unarchiveNote(this.id);
    Alert({ title: "Berhasil", message: "Catatan berhasil diaktifkan!" });
    this.navigate("/");
  }

  render() {
    if (!this.state.catatan) {
      return <HalamanKosong />;
    } else {
      return (
        <section className="detail-page">
          <h3 className="detail-page__title">{this.state.catatan.title}</h3>
          <p className="detail-page__createdAt">{showFormattedDate(this.state.catatan.createdAt)}</p>
          <div className="detail-page__body">{this.state.catatan.body}</div>
          <div className="detail-page__action">
          {this.state.catatan.archived === false ? <Button onDelete={this.onDeleteCatatan} onArchive={this.onArchiveCatatan} /> 
            : <Button onDelete={this.onDeleteCatatan} onArchive={this.onUnarchiveCatatan} />}
          </div>
        </section>
      );
    }
  }
}

DetailPage.propTypes = {
  id: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired,
};

export default DetailPageWrapper;
