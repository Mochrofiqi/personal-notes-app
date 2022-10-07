import React from "react";
import PropTypes from "prop-types";
import { BiArchiveIn } from "react-icons/bi";
import { BsTrash } from "react-icons/bs";


function Button({onArchive, onDelete}){

    return(
        <>
         <button className="action" type="button" title="Arsip" onClick={onArchive}><BiArchiveIn /></button>
         <button className="action" type="button" title="Hapus" onClick={onDelete}><BsTrash /></button>
        </>
    )
}

Button.propsTypes = {
    onArchive: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
}

export default Button;