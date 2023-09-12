import { useEffect, useState } from "react";
import "./ScrollButton.css";
import { AiFillCaretUp } from "react-icons/ai";

export default function ScrollButton() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
  }, []);
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 250) setVisible(true);
    else setVisible(false);
  };

  const backToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <button
      className="home-btn"
      style={{
        opacity: visible ? "1" : "0",
        visibility: visible ? "visible" : "hidden",
      }}
      onClick={() => backToTop()}
    >
      <AiFillCaretUp size={30} color="#fff" />
    </button>
  );
}
