import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { AddPost, getPosts } from "../redux/Reducer/PostReducer";
import { useNavigate } from "react-router-dom";
import { nanoid } from "@reduxjs/toolkit";

const AddPosts = () => {
    const [PostData, SetPostData] = useState<{id:string|number,title:string, body:string}>({
        id:0,
        title:'',
        body:''
    });
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const FillFormElement = (e:React.FormEvent<HTMLInputElement | HTMLTextAreaElement>):void =>{
        SetPostData({
            ...PostData,
            id:nanoid(),
            [e.currentTarget.name] : e.currentTarget.value
        })

    }
    let FormSubmit = (e:React.FormEvent) =>{
        e.preventDefault();
        dispatch(AddPost(PostData))
        navigate('/')
    }
  return (
   <>
        <div className="w-full max-w-[400px] m-auto py-10 px-3">
           <form onSubmit={FormSubmit} className="post-form border-2 border-gray-100 rounded-sm p-4">
            <h2 className="text-lg font-bold">Add Post</h2>

            <div className="py-3">
                <div>
                    <label htmlFor="title"className=" font-semibold" >Title</label>
                    <input onChange={(e)=>FillFormElement(e)} type="text" name="title" value={PostData.title} id="title" className="" /> 
                </div>
                <div>
                    <label htmlFor="body"className=" font-semibold" >Body</label>
                    <textarea onChange={(e)=>FillFormElement(e)} name="body" id=""  className=" min-h-[200px]" defaultValue={PostData.body}></textarea>
                </div>
                <div className="flex justify-end">
                    <button type="submit" className="p-2 border-white border-2 rounded-sm bg-blue-500">Add Post</button>
                </div>
            </div>
           </form>
        </div>
   </>
  )
}

export default AddPosts