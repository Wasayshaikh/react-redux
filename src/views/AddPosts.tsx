import { useRef, useState } from "react"
import { useDispatch } from "react-redux";
import { AddPost } from "../redux/Slices/PostSlice";
import { useNavigate } from "react-router-dom";
import { nanoid } from "@reduxjs/toolkit";

const AddPosts = () => {
    const formInputs = {
        title: useRef<HTMLInputElement | null>(null),
        body: useRef<HTMLTextAreaElement| null>(null)
    }
    const [PostData, SetPostData] = useState<{ id: string | number, title: string, body: string }>({
        id: 0,
        title: '',
        body: ''
    });
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const FillFormElement = (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        SetPostData({
            ...PostData,
            id: nanoid(),
            [e.currentTarget.name]: e.currentTarget.value
        })

    }
    let FormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (PostData.body == '' || PostData.title == '') {
           if(PostData.body == ''){
            formInputs.body.current!.style.border = "solid 1px red"
           }
           else{
            formInputs.body.current!.style.border = "none"
           }
           if (PostData.title == '') {
            formInputs.title.current!.style.border = "solid 1px red"
           }
           else{
            formInputs.title.current!.style.border = "none"
           }
        }
        else{
           
            dispatch(AddPost(PostData))
            navigate('/')
        }
       
    }
    return (
        <>
            <div className="w-full max-w-[400px] m-auto py-10 px-3">
                <form onSubmit={FormSubmit} className="post-form border-2 bg-[#e9e3dc] border-gray-100 rounded-md p-4">
                    <h2 className="text-lg font-bold">Add Post</h2>

                    <div className="py-3">
                        <div>
                            <label htmlFor="title" className=" font-semibold" >Title</label>
                            <input ref={formInputs.title} onChange={(e) => FillFormElement(e)} type="text" name="title" value={PostData.title} id="title" className="" />
                        </div>
                        <div>
                            <label htmlFor="body" className=" font-semibold" >Body</label>
                            <textarea ref={formInputs.body} onChange={(e) => FillFormElement(e)} name="body" id="" className=" min-h-[200px]" defaultValue={PostData.body}></textarea>
                        </div>
                        <div className="flex justify-end">
                            <button type="submit" className="p-2 border-gray-300 border-2 rounded-md bg-[#f2f2f2]">Add Post</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default AddPosts