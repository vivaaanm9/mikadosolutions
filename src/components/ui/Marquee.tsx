const companies = [
  "TCS",
  "Infosys",
  "Capgemini",
  "Wipro",
  "Accenture",
  "Cognizant",
  "IBM",
  "LTIMindtree",
  "Deloitte",
  "Jio",
  "Dell",
  "JP Morgan Chase & Co",
  "Bank of America"
];

export default function Marquee() {
  return (
    <section className="overflow-hidden py-10">
      <div
        className="
        flex
        min-w-max
        animate-[marquee_20s_linear_infinite]
        gap-20
        whitespace-nowrap
      "
      >
        {[...companies, ...companies].map(
          (company, index) => (
            <span
              key={index}
              className="
              text-2xl
              font-bold
              text-slate-400
            "
            >
              {company}
            </span>
          )
        )}
      </div>
    </section>
  );
}