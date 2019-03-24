import {connect} from "react-redux";
import AvatarPhoto from "../components/Header/AvatarPhoto/AvatarPhoto";
import * as React from "react";

class AvatarPhotoContainer extends React.Component {
    render() {
        return <AvatarPhoto {...this.props} />
    }
}

let mapStateToProps =(state) => {
    return {
        isAuth: state.auth.isAuth
    }
};


AvatarPhotoContainer = connect (mapStateToProps, null) (AvatarPhotoContainer);

export default AvatarPhotoContainer;
