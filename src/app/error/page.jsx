"use client";

export default function Error({ error, reset }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-red-50 text-center px-4">
      <h1 className="text-6xl font-bold text-red-600">Oops!</h1>

      <p className="mt-4 text-lg text-gray-700">
        Something went wrong 😢
      </p>

      <button
        onClick={() => reset()}
        className="mt-6 rounded-lg bg-red-600 px-6 py-3 text-white font-medium hover:bg-red-700 transition"
      >
        Try Again
      </button>
    </div>
  );
}
