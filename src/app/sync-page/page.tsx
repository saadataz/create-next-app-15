import { headers, UnsafeUnwrappedHeaders } from "next/headers";

export default function page() {
  const headersList = headers() as unknown as UnsafeUnwrappedHeaders;
  const userAgent = headersList.get("user-agent");
  return (
    <div>
      <h1>Async Page</h1>
      <p>User-Agent: {userAgent!}</p>
    </div>
  );
}
