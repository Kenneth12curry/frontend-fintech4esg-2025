import React from "react";

export default function SubscribeForm() {
  return (
    <form className="flex justify-center items-center gap-2 mb-6">
      <input
        type="email"
        placeholder="Enter Your Email"
        className="border-none px-4 py-4 w-64 rounded-xl bg-gray-100"
      />
      <button
        type="submit"
        className="bg-gradient-to-r bg-purple-500 text-white font-bold px-6 py-4 rounded-xl"
      >
        Subscribe
      </button>
    </form>
  );
}