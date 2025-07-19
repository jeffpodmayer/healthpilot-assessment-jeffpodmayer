interface ContactFormProps {
  readonly firstName: string;
  readonly setFirstName: (name: string) => void;
  readonly onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export function ContactForm({
  firstName,
  setFirstName,
  onSubmit,
}: ContactFormProps) {
  return (
    <div className="bg-white rounded-b-2xl p-5 md:p-10">
      <form className="space-y-4" onSubmit={onSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="firstName"
              className="text-md text-primary-dark font-semibold pl-1 pb-1"
            >
              First Name
            </label>
            <input
              id="firstName"
              className="w-full px-4 py-3 border border-neutral-medium rounded-xl focus:border-primary-medium focus:border-2 focus:outline-none transition-colors placeholder:text-neutral-medium"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="text-md text-primary-dark font-semibold pl-1 pb-1"
            >
              Last Name
            </label>
            <input
              id="lastName"
              className="w-full px-4 py-3 border border-neutral-medium rounded-xl focus:border-primary-medium focus:border-2 focus:outline-none transition-colors placeholder:text-neutral-medium"
              placeholder="Last Name"
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="phone"
              className="text-md text-primary-dark font-semibold pl-1 relative pb-1"
            >
              Phone Number{" "}
              <span className="absolute -top-0 -right-2 text-error font-bold">
                *
              </span>
            </label>
            <input
              id="phone"
              type="tel"
              className="w-full px-4 py-3 border border-neutral-medium rounded-xl focus:border-primary-medium focus:border-2 focus:outline-none transition-colors placeholder:text-neutral-medium"
              placeholder="Phone Number"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="text-md text-primary-dark font-semibold pl-1 relative pb-1"
            >
              Email{" "}
              <span className="absolute -top-0 -right-2 text-error font-bold">
                *
              </span>
            </label>
            <input
              id="email"
              type="email"
              className="w-full px-4 py-3 border border-neutral-medium rounded-xl focus:border-primary-medium focus:border-2 focus:outline-none transition-colors placeholder:text-neutral-medium"
              placeholder="Email Address"
              required
            />
          </div>
        </div>

        <div className="text-center pt-4 pb-1">
          <button
            className="bg-success-dark text-white py-3 w-full md:w-auto md:px-28 rounded-full font-semibold text-base md:text-lg hover:bg-success-light focus:border-2 focus:border-primary-lighter transition-colors"
            type="submit"
            aria-label="Get started with Medicare consultation"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
