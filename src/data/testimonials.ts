export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  review: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Bharat Patel",
    role: "Software Engineer",
    company: "Bank of America",
    review:
      "It is around a year since I have started my journey of learning Core Java, Advance, Hibernate and Spring.If any non-programmer want to learn Java then this place is the right option. There are many Java training institutes in city, however the thing which makes Mikado Solutions and Sanjay Sir exceptional is Quality of Teaching and connection with the students. It is sheer hardwork and excellence of Sanjay Sir to help each student to excel in career.",
  },

  {
    id: 2,
    name: "Akshaya Mulay",
    role: "Backend Developer",
    company: "Accenture",
    review:
      "Got to know about mikado from a friend and it was one of the best decisions i ever made during the starting phase of my career.Sanjay sir’s way of teaching is just top notch and also he has a very interactive way of teaching which results into detailed learning.Superb learing experience and great atmosphere ! 🙂"},

  {
    id: 3,
    name: "Saurabh Dubey",
    role: "Java Developer",
    company: "Morgan Stanley",
    review:
      "It had been around 2.7 year in industry as a java developer now i can say that taking admission here for java training was the best decision taken ever … Sanjay sir’s java knowledge is vast and the way of explaining things is exceptionally great. I have completed core and advanced java in mikado and before the completion of my course i got placed.",
  },
];