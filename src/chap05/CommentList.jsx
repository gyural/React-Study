import React from "react"
import Comment from "./Comment"

const comments = [
    {
        name: "임규성",
        comment: "안녕하세요"
    },

    {
        name: "언더독",
        comment: "레볼루션 화이팅"
    },

    {
        name: "멋쟁이",
        comment: "사자처럼 화이팅"
    },
];
function CommentList(props){
    return (
        <div>
            {comments.map((el)=>{
                    return(
                    <Comment name={el.name} comment={el.comment}/>
                    );
                })}
        </div>
    );

}

export default CommentList