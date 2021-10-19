import { useState } from "react";
import { useEffect } from "react";

const useBlog = (id) => {
    const [blog, setBlog] = useState({});
    console.log(id, typeof id);

    useEffect(() => {
        fetch("/blogDatabase.json")
            .then((res) => res.json())
            .then((data) => {
                setBlog(data.find((blog) => blog.id === parseInt(id)));
            });
    }, []);

    return blog;
};

export default useBlog;
