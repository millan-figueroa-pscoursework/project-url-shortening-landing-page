export default function StatsSection() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* heading */}
        <div className="text-center max-w-xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">
            Advanced Statistics
          </h2>
          <p>
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>

        {/* cards */}
        <div className="mt-16 relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-2 bg-teal-400 -z-10" />
          <div className="md:hidden absolute left-1/2 -translate-x-1/2 top-10 bottom-0 w-2 bg-teal-400 -z-10" />
          <div className="grid gap-10 md:grid-cols-3">
            {/* Card 1 */}
            <div className="relative bg-white rounded-lg shadow-md p-8">
              <h3 className="mt-10 text-xl font-bold text-gray-800">
                Brand Recognition
              </h3>
              <p>
                Boost your brand recognition with each click. Generic links
                don’t mean a thing. Branded links help instil confidence in your
                content.
              </p>
            </div>

            {/* Card 2 */}
            <div className="relative bg-white rounded-lg shadow-md p-8 md:mt-8">
              <h3 className="mt-10 text-xl font-bold text-gray-800">
                Detailed Records
              </h3>
              <p>
                Gain insights into who is clicking your links. Knowing when and
                where people engage with your content helps inform better
                decisions.
              </p>
            </div>

            {/* Card 3 */}
            <div className="relative bg-white rounded-lg shadow-md p-8 md:mt-16">
              <h3 className="mt-10 text-xl font-bold text-gray-800">
                Fully Customizable
              </h3>
              <p>
                Improve brand awareness and content discoverability through
                customizable links, supercharging audience engagement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
