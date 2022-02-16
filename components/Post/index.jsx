import Link from "next/link";

const Post = ({ post }) => {
  return (
    <Link href={`/post/${post.slug}`}>
      <div className="border group cursor-pointer overflow-hidden">
        <img
          src={post.thumbnail}
          alt={post.title}
          className="h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out"
        />
        <div className="flex justify-between p-5 bg-white">
          <div>
            <p>{post.title}</p>
            <p>
              {post.description} by {post.author.name}
            </p>
          </div>
          <div>
            <img
              src={post.author.image}
              alt={post.author.name}
              className="h-8 w-12 rounded-full"
            />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Post;
