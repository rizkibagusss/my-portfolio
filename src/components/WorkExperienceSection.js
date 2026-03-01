export default function WorkExperienceSection() {
  return (
    <section className="py-24">
      <h2 className="text-xl font-medium">Work Experience</h2>

      <div className="mt-10 space-y-6">
        {/* Card */}
        <div className="border border-neutral-200 dark:border-neutral-300 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
            {/* Left */}
            <div>
              <h3 className="text-lg font-medium leading-snug">
                IT Infrastructure and Operational
              </h3>
              <p className="mt-1 text-neutral-500">PT Lion Mentari Airlines</p>
            </div>

            {/* Right (Year) */}
            <span className="text-neutral-500 text-sm sm:text-base">
              2025 - Now
            </span>
          </div>
        </div>

        {/* Card */}
        <div className="border border-neutral-200 dark:border-neutral-300 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
            <div>
              <h3 className="text-lg font-medium leading-snug">IT Support</h3>
              <p className="mt-1 text-neutral-500">PT Digtive Global Media</p>
            </div>

            <span className="text-neutral-500 text-sm sm:text-base">
              2023 - 2024
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

{
  /* Card */
}
{
  /* <div className="border border-neutral-200 rounded-2xl p-6 flex justify-between items-start">
          <div>
            <h3 className="font-medium">Front-end Developer</h3>
            <p className="mt-1 text-neutral-500">Freelance</p>
          </div>

          <span className="text-neutral-500">2017 - Present</span>
        </div> */
}
