import everwellLogo from "../assets/everwell-logo.png";

export function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-neutral-medium">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src={everwellLogo}
              alt="Everwell Logo"
              className="h-8 w-auto"
            />
          </div>

          {/* Center Phrase */}
          <div className="hidden md:block flex-1 text-center">
            <p className="text-md italic text-neutral-dark">
              Your Medicare Personal Shopper
            </p>
          </div>

          {/* Get Started Button */}
          <div className="flex-shrink-0">
            <button
              className="bg-success-dark hover:bg-success-light focus:outline-none focus:border-2 focus:border-primary-lighter text-white px-5 py-2 md:px-12 rounded-lg text-base md:text-lg transition-colors duration-200 font-semibold"
              onClick={() =>
                window.open(import.meta.env.VITE_HEALTHPILOT_URL, "_blank")
              }
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
