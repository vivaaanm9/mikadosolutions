export interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export const faqData: FAQ[] = [
  {
    id: 1,
    question: "Do I need prior programming knowledge?",
    answer:
      "No. Most courses start from fundamentals and gradually move to advanced concepts.",
  },

  {
    id: 2,
    question: "Do you provide placement assistance?",
    answer:
      "Yes. We provide resume building, interview preparation and placement support.",
  },

  {
    id: 3,
    question: "Are classes available online?",
    answer:
      "Yes. Both online and classroom training options are available.",
  },

  {
    id: 4,
    question: "Will I work on projects?",
    answer:
      "Yes. Every course includes industry-oriented projects and assignments.",
  },
];