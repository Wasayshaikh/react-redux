import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getPosts } from "../redux/Slices/PostSlice";

const Home = (): JSX.Element => {
    const posts = useSelector(getPosts);
    const postComponent: React.ReactNode = posts.map(post => (
        <div className="p-3" key={post.id}>
            <div className="border-2 text-[#111111] border-[#f2f2f2] bg-[#f7f5f5] p-4 rounded-lg shadow-lg shadow-gray-300">
                <h1 className="text-2xl font-bold">{post.title}</h1>
                <div className="py-2 text-justify">
                    <p>{post.body}
                    </p>
                </div>
            </div>
        </div>


    ))
    return (
        <div className="container lg:max-w-[1200px] m-auto p-4">
            <div className="pb-10 px-3 flex flex-wrap justify-center md:justify-between items-center">
                <h2 className=" text-xl text-center font-semibold w-full md:w-auto py-2 md:py-0">Your Posts</h2><Link to={"/add"} className="p-2 border-[#f2f2f2] hover:shadow-lg shadow-gray-300 border-2 rounded-md bg-[#f7f5f5]">Add New Post</Link>
            </div>
            {postComponent}
        </div>
    )
}
export default Home;