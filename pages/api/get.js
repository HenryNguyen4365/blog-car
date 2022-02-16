import dbConnect from "../../utils/dbConnect";
import Posts from "../../models/Posts";
import { format } from "date-fns";
dbConnect();

export default async function handler(req, res) {
  const getData = async () => {
    const data = await Posts.find({}).exec();
    return data;
  };
  res.json(await getData());
}
