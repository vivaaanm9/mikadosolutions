import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import CoursesPage from "./pages/CoursesPage";
import PlacementsPage from "./pages/PlacementsPage";
import JavaFullStackPage from "./courses/JavaFullStackPage";
import JavaPage from "./courses/JavaPage";
import SpringPage from "./courses/SpringPage";
import SpringBootPage from "./courses/SpringBootPage";
import MicroservicesPage from "./courses/MicroservicesPage";
import PythonPage from "./courses/PythonPage";
import DataSciencePage from "./courses/DataSciencePage";
import MainLayout from "./Layout/MainLayout";
export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/placements" element={<PlacementsPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/courses/java-full-stack" element={<JavaFullStackPage />} />
          <Route path="/courses/spring" element={<SpringPage />} />
          <Route path="/courses/java" element={<JavaPage />} />
          <Route path="/courses/spring-boot" element={<SpringBootPage />} />
          <Route path="/courses/microservices" element={<MicroservicesPage />} />
          <Route path="/courses/python" element={<PythonPage />} />
          <Route path="/courses/data-science" element={<DataSciencePage />} />
          
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}