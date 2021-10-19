import { useState } from "react";
import { useEffect } from "react";

const useBlogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch("./blogDatabase.json")
            .then((res) => res.json())
            .then((data) => setBlogs(data));
    }, []);

    return blogs;
};

export default useBlogs;
