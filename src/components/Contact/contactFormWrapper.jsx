import { useState } from "react";
import ContactForm from "./ContactForm";

const ContactFormWrapper = () => {
  const [formKey, setFormKey] = useState(0);
  const resetForm = () => {
    setFormKey((prev) => prev + 1);
  };
  return <ContactForm key={formKey} onReset={resetForm} />;
};

export default ContactFormWrapper;
