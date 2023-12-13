import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getPosts } from "../redux/Slices/PostSlice";

const Home = (): JSX.Element => {
    const posts = useSelector(getPosts);
    const postComponent: React.ReactNode = posts.map(post => (
        <div className="p-3" key={post.id}>
            <div className="border-2 border-gray-100 p-4 rounded-md">
                <h1 className="text-2xl font-bold underline">{post.title}</h1>
                <div className="py-2 text-justify">
                    <p>{post.body}
                    </p>
                </div>
            </div>
        </div>


    ))
    return (
        <div className="container m-auto p-4">
            <div className="pb-10 flex flex-wrap justify-end">
                <Link to={"/add"} className="p-2 border-white border-2 rounded-sm bg-blue-500">Add Post</Link>
            </div>
            {postComponent}
        </div>
    )
}
export default Home;