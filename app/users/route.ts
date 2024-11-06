interface Users {
  id: number;
  name: string;
}
export const users: Users[] = [
  { id: 1, name: "Arnel" },
  { id: 2, name: "Andres" },
];

export async function GET() {
  return Response.json(users);
}

export async function POST(request: Request, response: Response) {
  const user = await request.json();
  const newUser: Users = {
    id: users.length + 1,
    name: user.name,
  };

  users.push(newUser);
  return new Response(JSON.stringify(newUser), {
    headers: {
      "Content-Type": "application.json",
    },
    status: 201,
  });
}
