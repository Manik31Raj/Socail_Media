import { MdDeleteForever } from "react-icons/md";
import { useContext } from "react";
import { PostList } from "../store/post-list-store";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);

  return (
    <div className="card post-card">
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletePost(post.id)}
          >
            <MdDeleteForever />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span key={tag} className="badge rounded-pill text-bg-primary hashtag">{tag}</span>
        ))}
        <div className="alert alert-success reaction" role="alert">
          This post has seen {post.userId}{post.reactions} reactions by people.
        </div>
      </div>
    </div>
  );
};
export default Post;
