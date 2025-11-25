import illustrationWorking from "../assets/images/illustration-working.svg";

export default function Hero() {
  return (
    <section className="w-full bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center px-4 pt-10 md:pt-24 gap-10">
        {/* left text */}
        <div className="flex flex-col items-start md:w-1/2 px-10">
          <h1 className="text-3xl md:text-6xl font-bold text-gray-800 leading-tight">
            More than just shorter links
          </h1>

          <p className="mt-4 text-gray-400 text-md md:text-md max-w-md px-1">
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>

          <button className="mt-6 bg-teal-400 hover:bg-teal-300 text-white py-2 px-6 rounded-full text-lg font-semibold">
            Get Started
          </button>
        </div>

        {/* right image */}
        <div className="md:w-1/2 flex justify-center">
          <img src={illustrationWorking} className="w-full max-w-xl" />
        </div>
      </div>
    </section>
  );
}
