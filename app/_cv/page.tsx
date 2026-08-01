import type { Metadata } from "next";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import CVContent from "../components/CVContent";

export const metadata: Metadata = {
  title: "CV — Milan, UI/UX Designer",
  description:
    "Curriculum vitae of Milan — UI/UX designer with 4+ years of experience in product design, design systems, and user research.",
};

export default function CVPage() {
  return (
    <>
      <Nav />
      <main>
        <CVContent />
      </main>
      <Footer />
    </>
  );
}
