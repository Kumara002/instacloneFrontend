import React from "react";
// import { useEffect } from "react";
import {useState} from "react";
import "./postview.css";
import pic from "./icon@2x.jpg";
import camerpic from "./camera@2x.jpg";
import "./form.css";
import { useNavigate } from "react-router-dom";

export default function Form(){
    // const [img,setImg]=useState(null)
    const [author,setAuthor]=useState("")
    const [loc,setLocation]=useState("")
    const [description,setDescription]=useState("")
    const navigate=useNavigate()

    function handleAuthor(e){
        setAuthor(e.target.value)
    }
    function handleLocation(e){
        setLocation(e.target.value)
    }
    function handleDesc(e){
        setDescription(e.target.value)
    }
    // function uploadImg(e){
        //   setImg(e.target.files[0])
        //   console.log(e.target.files[0])
        //   console.log(e.target.value)
        // console.log(e.target)
        // let formdata=new FormData(e.target)
        // console.log(formdata)

        // let dataForm=Object.fromEntries(formdata.entries())
        // console.log(dataForm);

        // setImg(dataForm)
    // }

    // const formdata=new FormData()
    // formdata.append(file)
    // formdata.append(file.name)

async function HandlePost(e){
        await e.preventDefault()
        // console.log(author,location,description)
        // const formdata = new FormData()
        // formdata.append(img)
        // formdata.append(img.name)
        // // console.log(formdata)
        // useEffect(()=>{
        //     postData()
        // },[])
        console.log(e.target)
        let formdata= new FormData(e.target)
        console.log(formdata)

        let dataForm= Object.fromEntries(formdata.entries())
        console.log(dataForm);
        console.log(dataForm.author)

        // setImg(dataForm)
            await fetch("http://localhost:5000/form",{
            
                method:"POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name:dataForm.author,location:dataForm.location/*,postimage:dataForm.imagefile*/,description:dataForm.desc})
                // redirect:"follow"
            }).then((res)=>{
                return res.json();
            }).then((data)=>{
                console.log(data)
            }).catch((e)=>{
                console.log(e.message)
            })
            navigate("/postview")
    }

    return(
        <div>
             <header>
                <img className="icon" src={pic} alt="icon"></img>
                <p id="instaheading">InstaClone</p>
                <img className="camera" src={camerpic} alt="camera"></img>
            </header>
            <div className="box">
            <form  onSubmit={HandlePost}>
                <label htmlFor="imagefile"></label>
                <input type={"file"} name="imagefile" id="imagefile" /*accept=".jpeg,.png,.jpg" onChange={uploadImg} /*value={img}*/></input>

                <label htmlFor="author"></label>
                <input type="text" name="author" id="author" placeholder="Author" value={author} onChange={handleAuthor}></input>

                <label htmlFor="location"></label>
                <input type="text" placeholder="Location" id="location" name="location" onChange={handleLocation} value={loc}></input>

                <label htmlFor="desc"></label>
                <input type="text" placeholder="Description" id="formdesc" name="desc" onChange={handleDesc} value={description}></input>
                <button id="postbutton"><text id="posttext">Post</text></button>
                {/* <div>{img&&`${img.name}-${img.type}`}</div> */}
            </form>
            </div>
            
        </div>
    )
}


// import React from "react";
// import { useEffect,useState } from "react";
