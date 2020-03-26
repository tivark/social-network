import React from "react";
import {connect} from "react-redux";
import DialogsList from "./DialogList";

let mapStateToProps = (state) => {
    return {
        dialogsList: state.dialogsPage.dialogs
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
    }
};

const DialogsListContainer = connect(mapStateToProps, mapDispatchToProps)(DialogsList);

export default DialogsListContainer;