import PostCard from "../../components/PostCard";

export const metadata = {
  title: "Server-Side Rendering | FSD Lab 9 & 10",
};

// This function runs on the SERVER before the page is sent to the browser.
async function getPosts() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!res.ok) {
      throw new Error("Request failed");
    }
    const posts = await res.json();
    // Show only the first 6 posts to keep the page short.
    return posts.slice(0, 6);
  } catch (error) {
    return null;
  }
}

// Because this page is a Server Component (no "use client"), the fetch
// happens on the server, which is how Server-Side Rendering works here.
export default async function SSRDemo() {
  const posts = await getPosts();

  return (
    <section>
      <h1 className="text-2xl font-bold mb-2">
        Server-Side Rendering (SSR)
      </h1>
      <p className="mb-6 text-slate-600">
        These posts are fetched on the server before the page is sent to the
        browser.
      </p>

      {posts ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <p className="text-red-600">Unable to load data.</p>
      )}
    </section>
  );
}
