import React from "react";
import { useState,useEffect} from "react";
import { Link } from "react-router-dom";
import "./postview.css"
import pic from "./icon@2x.jpg";
import camerpic from "./camera@2x.jpg";
import Post from "./Post.js";

// const value=true;
export default function Postview(){
    const [data,setdata]=useState([])
    // const [indicators,setIndicators]=useState(True)
    useEffect(()=>{
        fetchData()
    },[])
    const fetchData=async()=>{
        console.log("Hello mam why confused?")
         await fetch("http://localhost:5000/").then((response) => {
            return response.json()
          })
          .then((data) => {
            setdata(data)
          }).catch((e)=>{
             console.log(e.message)
          })
    }
    return(
        <div>
            <header>
                <img className="icon" src={pic} alt="icon"></img>
                <p id="instaheading">InstaClone</p>
            </header>
            <section>
                <Link to="/form"><img className="camera" src={camerpic} alt="camera"></img></Link>
            </section>
            {/* <div>hello:{data}</div> */}
            {console.log(data)}
            {data.map((value,index)=>{
                // console.log(value,index)
                return (
                    <div key={index}>
                        <Post postdata={value} key={index}/>
                    </div>
                )
            })}

        </div>
    )
}