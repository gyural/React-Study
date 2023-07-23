import React from "react";
import Book from "./Book";

function Library(props){

    return(
        <div>
            <Book name="처음 만난 파이썬" numOfpages={300}/>
            <Book name="처음 만난 AWS" numOfpages={400}/>
            <Book name="처음 만난 파이썬" numOfpages={500}/>
        </div>
    )
}

export default Library
