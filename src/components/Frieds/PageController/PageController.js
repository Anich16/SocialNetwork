import React from "react";
import style from "./PageController.module.css";
import PageButton from "./PageButton/PageButton";



let PageController = (props) =>  {

    let {pageSize, pageNumber, itemsCount} = props;
    let pagesCount = Math.ceil(itemsCount / pageSize);
    let buttons =[];

    for (let i = 1; i <= pagesCount; i++) {
        buttons.push(<PageButton key={i}
                                 onClick={()=> props.changePage(i)}
                                 selected ={i === pageNumber}>
                        {i}
                    </PageButton>)
    }

        return (
            <div className={style.buttonsBlock}>
                {buttons}
            </div>
        )

};

export default PageController;
