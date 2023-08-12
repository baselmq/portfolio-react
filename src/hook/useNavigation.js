import { useNavigate } from "react-router-dom";

const useNavigation = () => {
  const navigate = useNavigate();

  const navigateAndScroll = (path, sectionId) => {
    navigate(path);
    setTimeout(() => {
      const section = document.querySelector(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // Adjust the delay as needed for smooth scrolling to work
  };

  return navigateAndScroll;
};

export default useNavigation;
