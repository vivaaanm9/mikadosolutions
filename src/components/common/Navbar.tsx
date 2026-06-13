import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import Container from "./Container";

export default function Navbar() {
  return (
    <motion.header
      initial={{
        y: -100,
      }}
      animate={{
        y: 0,
      }}
      className="
      fixed
      top-0
      z-50
      w-full
      border-b
      border-slate-200/50
      bg-white/80
      backdrop-blur-xl
    "
    >
      <Container>
        <div className="flex h-20 items-center justify-between">
          <Link
            to="/"
            className="
            float-left
            text-2xl
            font-bold
            text-blue-600
          "
          >
            <img src="/images/LogoFull.jpg" alt="Mikado Solutions" width="40%" />
          </Link>

          <nav className="hidden gap-8 lg:flex">
            <NavLink to="/">
              Home
            </NavLink>

            <NavLink to="/about">
              About
            </NavLink>

            <NavLink to="/courses">
              Courses
            </NavLink>

            <NavLink to="/placements">
              Placements
            </NavLink>

            <Link to="/contact">
              Contact
            </Link>
          </nav>      
          <motion.button
            whileHover={{
              scale: 1.05,
            }}
            className="
            rounded-xl
            bg-[#5B4B9A]
            px-6
            py-3
            text-white
          "
          >
            <Link to="/contact">
            Enroll Now
            </Link>
          </motion.button>
        </div>
      </Container>
    </motion.header>
  );
}