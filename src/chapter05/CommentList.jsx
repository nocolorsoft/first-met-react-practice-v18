import React from "react";
import Comment from "./Comment";

const comments = [
    { name: "이인제", comment: "안녕하세요, 소플입니다." },
    { name: "유재석", comment: "리액트 재미있어요~" },
    { name: "이광수", comment: "리액트 너무 어려워요ㅠ" },
]

function CommentList() {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                );
            })}
        </div>
    );
}

export default CommentList;