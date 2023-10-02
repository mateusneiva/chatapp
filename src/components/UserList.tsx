import { Avatar } from "./Avatar";

function UserCard({ user }) {
  return (
    <div className="flex items-center gap-3 px-3 py-2 rounded-md transition-colors hover:bg-slate-800">
      <Avatar
        src={user.image}
        fallback={user.name}
        activity={user.activity}
        alt="user image"
        className="rounded-full w-8 h-8"
      />
      <div>
        <p className="text-sm">{user.name}</p>
        <p className="text-sm text-gray-400">{user.email}</p>
      </div>
    </div>
  );
}

export function UserList({ users }) {
  return (
    <div className="flex flex-col px-2">
      {users.map((user) => (
        <UserCard user={user} key={user.name} />
      ))}
    </div>
  );
}
