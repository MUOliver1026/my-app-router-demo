export default function Post({ params }: { params: { id: string } }) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className="text-4xl font-bold">Post {params.id}</h1>
        <p className="text-xl">This is a dynamic route for post {params.id}.</p>
      </main>
    );
  }