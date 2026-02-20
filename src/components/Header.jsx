export default function Header() {
  return (
    <div className="flex justify-between items-center p-6 border-b bg-white">
      <h2 className="text-lg font-semibold">
        Dashboard
      </h2>

      <button className="bg-black text-white px-4 py-2 rounded-lg">
        + Quick Create
      </button>
    </div>
  )
}