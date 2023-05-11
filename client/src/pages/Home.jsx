import React from "react";
import { useSelector } from "react-redux";
import HomeCard from "../components/HomeCard";

const Home = () => {

    const { posts } = useSelector(state => state.posts);
    return (
        <div className="flex items-center m-5 flex-wrap">
            {posts?.map(function (post, i) {
                return (<HomeCard key={i}  />);
            })}
        </div>
    )
};

export default Home;