import React from 'react';
import {connect} from "react-redux";

import NavBar from "../../components/Nav-bar/Nav-bar";
import {withRouter} from "react-router-dom";

let mapStateToProps = (state) => {
    return {
        navBar: state.navBar
    }
};

let NavBarContainer = connect (mapStateToProps) (NavBar);

export default withRouter(NavBarContainer);