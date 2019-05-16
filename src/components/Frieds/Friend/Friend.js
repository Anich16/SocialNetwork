import React from "react";
import style from "./Friend.module.css";
import {withRouter} from "react-router-dom";
import * as axios from "axios";

class Friend extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            profile: null,
            editMode: false,
            me: null,
            isOwner: false
        };
        this.changeEditMode = this.changeEditMode.bind(this);
        this.onChangeContact = this.onChangeContact.bind(this);
        this.saveClick = this.saveClick.bind(this);
    }

    componentDidMount(){
        let userId = this.props.match.params.friendId;
        let profilePromise = axios.get("https://social-network.samuraijs.com/api/1.0/profile/" + userId)
            .then((profile)=>{
                this.setState({profile: profile.data})
            });
        let mePromise = axios.get("https://social-network.samuraijs.com/api/1.0/auth/me")
            .then(res => {
                this.setState({me: res.data.data})
            });
        Promise.all([profilePromise, mePromise]).then(()=> {
                let {profile, me} = this.state;
                if (!!me && !!profile && me.userId === profile.userId){
                    this.setState({isOwner: true})
                }
            }
        )
    }

    changeEditMode(){
        this.setState({editMode: true})
    }

    onChangeContact(newValue, key){
        this.state.profile.contacts[key] = newValue;
        this.forceUpdate();
    }

    saveClick(){
        let profilePromise = axios.put("https://social-network.samuraijs.com/api/1.0/profile", this.state.profile )
            .then((profile)=>{
            });
        this.setState({editMode: false});
    }

    render() {
        let {profile, isOwner, editMode} = this.state;
        if (profile) {
            return (
                <div>
                    <h2>
                        {profile.fullName}
                        {isOwner && <button type="button" onClick={this.changeEditMode}>Edit</button>}
                    </h2>
                    <div>
                        {
                            Object.keys(profile.contacts).map(key => {
                                return <div><b>{key}: </b>
                                    {editMode ? <input value={profile.contacts[key]} onChange={(e)=>{
                                                                        let newValue = e.target.value;
                                                                        this.onChangeContact(newValue, key)}
                                    }/> :
                                        <span>{profile.contacts[key]}</span>}</div>
                            })
                        }
                        {editMode && <button type="button" onClick={this.saveClick}>Save</button>}
                    </div>
                </div>
            )
        } else {
           return <div>Loading....</div>
        }
    }
}

export default withRouter(Friend);
