import Container from "./Container";
import { Link } from "react-router-dom";
import { footerCourses } from "../../data/footerCourses";
export default function Footer() {
  return (
    <footer className="bg-[#2E2E38] text-white">
      <Container>
        <div className="grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <img  src="/images/LogoFull.jpg" width="50%" height="10%" alt="Mikado Solutions" />
            <p className="mt-4 text-slate-400">
              Transforming careers through industry-focused
              training in Java, Spring Boot, Microservices,
              Full Stack Development, Python and Data Science.
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold">
              Company
            </h4>

            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  to="/about"
                  className="text-slate-400 transition hover:text-white"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="text-slate-400 transition hover:text-white"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-lg font-semibold">
              Popular Courses
            </h4>

            <ul className="mt-4 space-y-3">
              {footerCourses.map((item) => (
                <li key={item.course_add}>
                  <Link
                    to={`/courses/${item.course_add}`}
                    onClick={() =>
                      window.scrollTo({
                        top: 0,
                        behavior:"auto",
                      })
                    }
                    className="text-slate-400 transition hover:text-white"
                  >
                    {item.course}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold">
              Contact
            </h4>

            <ul className="mt-4 space-y-3 text-slate-400">
              <li>📧 info@mikadosolutions.com</li>
              <li>📞 +91 9321253357</li>
              <li>📍 Mumbai, Maharashtra, India</li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-slate-700 py-6">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-slate-400 md:flex-row">
            <p>
              © {new Date().getFullYear()} Mikado Solutions.
              All Rights Reserved.
            </p>

            <div className="flex gap-6">
              <a
                href="#"
                className="hover:text-white"
              >
                LinkedIn
              </a>

              <a
                href="#"
                className="hover:text-white"
              >
                YouTube
              </a>

              <a
                href="#"
                className="hover:text-white"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}