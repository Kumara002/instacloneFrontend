import React from "react";
import moreicon from "./more_icon@2x.jpg";
import heart from "./heart@2x.jpg";
import share from "./share@2x.jpg";
import "./post.css"

export default function Post({postdata}){
    console.log(postdata)

    return(
        <div id="postoutline">
            <nav>
            <sapn id="postname">{postdata.name}</sapn>
            <span id="postloc">{postdata.location}</span>
            <img src={moreicon} alt="moreicon" id="moreicon"></img>
            </nav>
            <img src="" alt={postdata.postimage} id="postimage"></img>
            <div>
            <nav>
                <img src={heart} alt="heart pic" id="heart"></img>
                <img src={share} alt="share-pic" id="share"></img>
                <span id="date">{postdata.date}</span>
            </nav>
            <p id="likes">{postdata.likes} likes</p>
            <p id="desc">{postdata.description}</p>
            </div>
        </div>
    )
}
