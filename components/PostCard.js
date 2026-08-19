export default function PostCard({ post }) {
  return (
    <article className="bg-white rounded-lg border shadow-sm p-5">
      <p className="text-xs text-slate-400 mb-1">Post ID: {post.id}</p>
      <h2 className="font-semibold mb-2 capitalize">{post.title}</h2>
      <p className="text-sm text-slate-600 line-clamp-3">{post.body}</p>
    </article>
  );
}