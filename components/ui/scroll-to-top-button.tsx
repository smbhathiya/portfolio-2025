import { IconArrowUp } from "@tabler/icons-react";

export function ScrollToTopButton() {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <button
      onClick={handleClick}
      className="fixed bottom-8 right-8 z-50 bg-primary/70 text-white rounded-full shadow-lg p-4 hover:bg-primary/90 transition-colors flex items-center justify-center"
      aria-label="Scroll to top"
    >
      <IconArrowUp className="h-6 w-6" />
    </button>
  );
}
