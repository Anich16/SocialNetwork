import React, {Component} from "react";
import style from "./FriendsPage.module.css";
import PageController from "./PageController/PageController";

class FriendsPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            search: "",
            pageNumber: 1,
            defaultPageSize: 10
        };
        this.onSearchChange = this.onSearchChange.bind(this);
        this.setPageNumber = this.setPageNumber.bind(this);
        this._filterId = null;
    }


    componentDidMount() {

        this.props.getFriends(this.state.pageNumber, this.state.defaultPageSize);
    }

    onSearchChange (e) {
        let value = e.target.value;
        this.setState({search: value});
        clearTimeout(this._filterId);
            this._filterId = setTimeout(()=>{
                this.props.setFilter(value)
            }, 1000);
    }

    setPageNumber(newPageNumber){
        this.setState({pageNumber:newPageNumber});
        this.props.getFriends(newPageNumber, this.state.defaultPageSize)

    }

    render() {
        return (
            <div>
                {!this.props.friends.length && <div>Friends not found</div> }
                <div className={style.searchBlock}>
                    <input type="text" className={style.search}
                           placeholder="To find a friend"
                           value={this.state.search}
                           onChange={this.onSearchChange}/>
                </div>
                <div className={style.friendsList}>
                    {
                        this.props.friends.map(f => <div className={style.item} key={f.id}>
                            <div className={style.photoBlock}>
                                <img
                                    src={f.photos.small != null ? f.photos.small : "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Google_Contacts_logo_vector.svg/1200px-Google_Contacts_logo_vector.svg.png"
                                    }
                                    alt="Photo" className={style.photo}/>
                                { f.followed === false ? <button className={style.button}
                                                                 onClick={() => {
                                                                     this.props.follow(f.id)
                                                                 }
                                                                 }>Follow</button> :
                                    <button className={style.button}
                                            onClick={() => {
                                                this.props.unfollow(f.id)
                                            }
                                            }>Unfollow</button>}

                            </div>
                            <div className={style.info}>
                                <p className={style.text}>{f.name}</p>
                                <p className={style.text}>{f.status != null ? f.status : "No Status"}</p>
                            </div>
                        </div>)
                    }
                </div>
                <div>
                    <PageController pageSize={this.state.defaultPageSize}
                                    pageNumber={this.state.pageNumber}
                                    itemsCount={this.props.totalCount}
                                    changePage={(newPageNumber)=> this.setPageNumber(newPageNumber)}/>
                </div>
            </div>
        )
    };

}

export default FriendsPage;