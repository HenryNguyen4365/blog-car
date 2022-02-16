import axios from "axios";

const Post = () => {
  const postData = async () => {
    try {
      await axios.post("/api/post", {
        author: {
          name: "Henry",
          image:
            "https://vcdn-sohoa.vnecdn.net/2022/01/19/HDKJF44H75JTTLUAFCCPRDZ5LI-2427-1642564662.jpg",
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <button onClick={postData}>Post</button>
    </div>
  );
};

export default Post;
