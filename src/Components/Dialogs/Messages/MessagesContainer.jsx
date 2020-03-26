import React from "react";
import {connect} from "react-redux";
import Messages from "./Messages";
let mapStateToProps = (state) => {
    return {
        messages: state.dialogsPage.messages
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
    }
};
const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;