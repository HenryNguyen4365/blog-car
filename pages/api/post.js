import dbConnect from "../../utils/dbConnect";
import Posts from "../../models/Posts";
import { format } from "date-fns";
dbConnect();

export default async function handler(req, res) {
  const data = req.body;
  console.log(data.author.name);
  const postData = async () => {
    await Posts.findOneAndUpdate(
      {
        created_at: format(new Date(), "MM/dd/yyyy"),
        title: "Blog",
      },
      {
        author: {
          name: data.author.name,
          image: data.author.image,
        },
      },
      { upsert: true, timestamp: { created_at: false, updated_at: true } }
    );
  };
  await postData();
}
