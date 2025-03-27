export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-6">CRUD API Backend</h1>
      <p className="text-xl mb-4">Your API is running successfully!</p>
      <div className="mt-6 grid gap-4 text-left">
        <h2 className="text-2xl font-semibold">Available Endpoints:</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <code className="bg-gray-100 p-1 rounded">/api/health</code> - Check API health
          </li>
          <li>
            <code className="bg-gray-100 p-1 rounded">/api/items</code> - GET all items, POST new item
          </li>
          <li>
            <code className="bg-gray-100 p-1 rounded">/api/items/[id]</code> - GET, PUT, DELETE specific item
          </li>
        </ul>
      </div>
    </main>
  )
}

