import Post from "../Post";
import axios from "axios";
import { useEffect, useState } from "react";
const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get("/api/get");
      setPosts(data);
    };
    getData();
  }, []);
  const postData = async () => {
    try {
      await axios.post("/api/post", {
        thumbnail:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Elon_Musk%2C_Tesla_Factory%2C_Fremont_%28CA%2C_USA%29_%288765031426%29.jpg/1024px-Elon_Musk%2C_Tesla_Factory%2C_Fremont_%28CA%2C_USA%29_%288765031426%29.jpg",
        author: {
          name: "Henry",
          image:
            "https://vcdn-sohoa.vnecdn.net/2022/01/19/HDKJF44H75JTTLUAFCCPRDZ5LI-2427-1642564662.jpg",
        },
        description: "Elon Reeve Musk is an entrepreneur and business magnate",
        slug: "elon-musk-photo",
        url: "https://vi.wikipedia.org/wiki/Elon_Musk",
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <button onClick={postData}>Post</button>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 md:p-6">
        {posts.map((post, key) => (
          <Post key={key} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
