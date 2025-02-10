import { useState } from "react";

 function useAccordion() {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggle = () => setIsOpen(!isOpen);

  return { isOpen, toggle };
}
export default useAccordion;