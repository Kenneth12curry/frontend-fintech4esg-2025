import React from "react";

export default function SubscribeForm() {
  return (
    <form className="flex justify-center items-center gap-2 mb-6">
      <input
        type="email"
        placeholder="Enter Your Email"
        className="border-none px-4 py-2 w-64 rounded-xl bg-gray-100"
      />
      <button
        type="submit"
        className=" text-white bg-[#19af58] hover:bg-primary font-bold px-6 py-2 rounded-xl"
      >
        Subscribe
      </button>
    </form>
  );
}