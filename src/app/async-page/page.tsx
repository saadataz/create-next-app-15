import { headers } from "next/headers";

export default async function page() {
  const headersList = await headers();
  const userAgent = headersList.get("user-agent");
  return (
    <div>
      <h1>Async Page</h1>
      <p>User-Agent: {userAgent}</p>
    </div>
  );
}
