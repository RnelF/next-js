type MockUser = {
  id: number;
  name: string;
};

export default async function MockUsers() {
  const res = await fetch("https://672cac311600dda5a9f96ab1.mockapi.io/users");

  const users = await res.json();

  return (
    <div
      className="grid grid-cols-4 py-10
    "
    >
      {users.map((user: MockUser) => (
        <div
          key={user.id}
          className="p-4 bg-white shadow-md rounded-lg text-gray-700"
        >
          {user.name}
        </div>
      ))}
    </div>
  );
}
