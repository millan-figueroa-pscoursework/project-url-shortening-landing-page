export default function BoostCTA() {
  return (
    <section
      className="bg-violet-900 px-6 py-16 text-center text-white sm:px-10"
      style={{ backgroundImage: "url('images/bg-boost-desktop.svg')" }}
    >
      <div className="mx-auto max-w-3xl">
        <h2 className="text-2xl font-bold sm:text-3xl">
          Boost your links today
        </h2>

        <button
          className="
            mt-6 inline-flex items-center justify-center
            rounded-full bg-teal-400 hover:bg-teal-300 px-10 py-3
            text-sm font-bold tracking-wide text-white
            shadow-md transition
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-cyan-300
            focus-visible:ring-offset-2
            focus-visible:ring-offset-violet-900
          "
        >
          Get Started
        </button>
      </div>
    </section>
  );
}
