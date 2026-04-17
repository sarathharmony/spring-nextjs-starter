async function getBackendStatus() {
  try {
    const r = await fetch('http://localhost:3000/api/health', { cache: 'no-store' });
    if (!r.ok) throw new Error(String(r.status));
    return await r.json();
  } catch (e) {
    return { status: 'unreachable', error: String(e) };
  }
}
export default async function Page() {
  const status = await getBackendStatus();
  return (
    <main style={{ fontFamily: 'system-ui', padding: 32 }}>
      <h1>rust-nextjs-kit</h1>
      <p>Spring Boot (Java + Maven) backend + Next.js frontend parent-app kit.</p>
      <pre>{JSON.stringify(status, null, 2)}</pre>
    </main>
  );
}
