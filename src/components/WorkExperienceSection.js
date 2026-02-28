export default function WorkExperienceSection() {
  return (
    <section className="py-24">
      <h2 className="text-xl font-medium">Work Experience</h2>

      <div className="mt-10 space-y-6">
        {/* Card */}
        <div className="border border-neutral-200 rounded-2xl p-6 flex justify-between items-start">
          <div>
            <h3 className="font-medium">IT Infrastructure and Operational</h3>
            <p className="mt-1 text-neutral-500">PT Lion Mentari Airlines</p>
          </div>

          <span className="text-neutral-500">2025 - Now</span>
        </div>

        {/* Card */}
        <div className="border border-neutral-200 rounded-2xl p-6 flex justify-between items-start">
          <div>
            <h3 className="font-medium">IT Support</h3>
            <p className="mt-1 text-neutral-500">PT Digtive Global Media</p>
          </div>

          <span className="text-neutral-500">2023 - 2024</span>
        </div>

        {/* Card */}
        {/* <div className="border border-neutral-200 rounded-2xl p-6 flex justify-between items-start">
          <div>
            <h3 className="font-medium">Front-end Developer</h3>
            <p className="mt-1 text-neutral-500">Freelance</p>
          </div>

          <span className="text-neutral-500">2017 - Present</span>
        </div> */}
      </div>
    </section>
  );
}
