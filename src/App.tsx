import { useState } from "react";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { LeadForm } from "./components/LeadCaptureSection";

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [firstName, setFirstName] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <>
      <Header />
      <HeroSection />
      <LeadForm
        isSubmitted={isSubmitted}
        firstName={firstName}
        setFirstName={setFirstName}
        onSubmit={handleSubmit}
      />
    </>
  );
}

export default App;
