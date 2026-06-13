export interface Course {
  id: number;
  title: string;
  slug: string;
  duration: string;
  level: string;
  students: string;
  description: string;
  technologies: string[];
}

export const courses: Course[] = [
  {
    id: 1,
    title: "Java Full Stack Development",
    slug: "java-full-stack",
    duration: "6 Months",
    level: "Beginner to Advanced",
    students: "2500+",
    description:
      "Master Java, Spring Boot, React, Microservices, Docker and Cloud.",
    technologies: [
      "Java",
      "Spring Boot",
      "React",
      "MySQL",
      "Docker",
      "AWS",
    ],
  },

  {
    id: 2,
    title: "Core Java",
    slug: "java",
    duration: "3 Months",
    level: "Beginner",
    students: "3000+",
    description:
      "Strong foundation in Java programming and OOP concepts.",
    technologies: [
      "Java",
      "Collections",
      "Multithreading",
      "Java 8",
    ],
  },

  {
    id: 3,
    title: "Spring Framework",
    slug: "spring",
    duration: "2 Months",
    level: "Intermediate",
    students: "1500+",
    description:
      "Dependency Injection, MVC, Enterprise Development.",
    technologies: [
      "Spring Core",
      "Spring MVC",
      "JPA",
    ],
  },

  {
    id: 4,
    title: "Spring Boot",
    slug: "spring-boot",
    duration: "2 Months",
    level: "Intermediate",
    students: "2000+",
    description:
      "Build production-ready REST APIs and applications.",
    technologies: [
      "Spring Boot",
      "REST",
      "Security",
      "JPA",
    ],
  },

  {
    id: 5,
    title: "Microservices",
    slug: "microservices",
    duration: "2 Months",
    level: "Advanced",
    students: "1200+",
    description:
      "Distributed systems and scalable architecture.",
    technologies: [
      "Eureka",
      "Gateway",
      "Docker",
      "Kafka",
    ],
  },

  {
    id: 6,
    title: "Python Development",
    slug: "python",
    duration: "4 Months",
    level: "Beginner",
    students: "1800+",
    description:
      "Python programming, APIs and automation.",
    technologies: [
      "Python",
      "Flask",
      "FastAPI",
      "Automation",
    ],
  },

  {
    id: 7,
    title: "Data Science",
    slug: "data-science",
    duration: "6 Months",
    level: "Intermediate",
    students: "1000+",
    description:
      "Analytics, Machine Learning and AI fundamentals.",
    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Machine Learning",
    ],
  },
];