import { useState } from "react";

export default function URLShortenerForm() {
  const [inputValue, setInputValue] = useState("");

  const handleClick = () => {
    console.log("User input:", inputValue);
  };

  return (
    <section className="w-full">
      <div className="max-w-6xl mx-auto py-10 px-6 md:px-16">
        <div
          className="bg-purple-900 rounded-xl p-6 md:p-10 flex flex-col md:flex-row items-center gap-4 md:gap-6 bg-cover bg-no-repeat bg-right"
          style={{ backgroundImage: "url('/bg-shorten-desktop.svg')" }}
        >
          <input
            type="text"
            placeholder="Shorten a link here..."
            className="w-full md:flex-1 px-4 py-3 rounded-lg text-gray-900 text-sm outline-none bg-white"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            className="bg-teal-400 hover:bg-teal-300 text-white font-semibold py-3 px-6 rounded-lg w-full md:w-auto"
            onClick={handleClick}
          >
            Shorten It!
          </button>
        </div>
      </div>
    </section>
  );
}
