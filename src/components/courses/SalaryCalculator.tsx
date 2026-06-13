import { useState } from "react";

export default function SalaryCalculator() {
  const [salary, setSalary] =
    useState(300000);

  return (
    <section className="py-24">
      <div className="container mx-auto max-w-3xl px-6">
        <h2 className="mb-12 text-center text-5xl font-bold">
          Salary Growth Calculator
        </h2>

        <div
          className="
          rounded-3xl
          bg-white
          p-10
          shadow-xl
        "
        >
          <input
            type="range"
            min="300000"
            max="2000000"
            value={salary}
            onChange={(e) =>
              setSalary(
                Number(e.target.value)
              )
            }
            className="w-full"
          />

          <div className="mt-8 text-center">
            <h3 className="text-4xl font-bold text-blue-600">
              ₹
              {salary.toLocaleString()}
            </h3>

            <p className="mt-2 text-slate-500">
              Estimated Package
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}