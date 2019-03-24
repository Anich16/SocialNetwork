import React from "react";
import style from "./PhotoPage.module.css";
import {connect} from "react-redux";
import PhotoItem from "./PhotoItem/PhotoItem.js";
import {addPhoto, addText} from "../../Redux/PhotoPageReducer";

let PhotoPage = (props) => {
    let textElement = React.createRef();

    let addText = () => {
        props.addText(textElement.current.value);
    };

    let addPhoto =()=> {
        props.addPhoto()
    };

  return <div className={style.photoBlock}>
      <div className={style.form}>
          <input type="text" value={props.newText} placeholder="Url"
                 className={style.field} onChange={addText} ref={textElement}/>
          <button type="button" className={style.button} onClick={addPhoto}>Send</button>
      </div>
      <div className={style.photoList}>
      {

          props.photoBlock.map((p)=> {
              return <PhotoItem key={p.id} imgUrl={p.imgUrl}/>
          })
      }
      </div>
  </div>
};

  let mapStateToProps = (state) => {
      return {
          photoBlock: state.photo.photoBlock,
          newText: state.photo.newText
      }
  };

  let mapDispatchToProps = (dispatch) => {
      return {
          addPhoto: () =>{
              dispatch(addPhoto())
          },
          addText: (text)=> {
              dispatch(addText(text))
          }
      }
  };

  let PhotoPageContainer = connect (mapStateToProps, mapDispatchToProps) (PhotoPage);

export default PhotoPageContainer;