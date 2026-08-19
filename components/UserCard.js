export default function UserCard({ user }) {
  return (
    <article className="bg-white rounded-lg border shadow-sm p-5">
      <h2 className="font-semibold mb-1">{user.name}</h2>
      <p className="text-sm text-blue-600 mb-1">@{user.username}</p>
      <p className="text-sm text-slate-600 break-all">{user.email}</p>
    </article>
  );
}