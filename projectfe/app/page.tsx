// app/page.tsx

async function getHealth() {
  const res = await fetch('http://localhost:4000/api/health', {
    cache: 'no-store', // important for SSR-like behavior
  });

  if (!res.ok) {
    throw new Error('Failed to fetch health');
  }

  return res.json();
}

export default async function HomePage() {
  const data = await getHealth();

  return (
    <main>
      <h1>Next.js Frontend</h1>
      <p>{data.message}</p>
    </main>
  );
}



