import { SellingPoint } from "./SellingPoint";
import { ConfirmationMessage } from "./ConfirmationMessage";
import { ContactForm } from "./ContactForm";

interface LeadFormProps {
  readonly isSubmitted: boolean;
  readonly firstName: string;
  readonly setFirstName: (name: string) => void;
  readonly onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export function LeadForm({
  isSubmitted,
  firstName,
  setFirstName,
  onSubmit,
}: LeadFormProps) {
  return (
    <section className="relative">
      <div
        className="absolute inset-0 bg-primary-lightest"
        style={{ height: "70%" }}
      ></div>

      <div className="relative z-10">
        <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden mx-4 md:mx-auto">
          <div className="bg-primary-light grid md:grid-cols-3 gap-4 md:gap-8 p-6 rounded-t-2xl text-center justify-items-center">
            <SellingPoint text="US-based agents" />
            <SellingPoint text="No pushy salespeople" />
            <SellingPoint text="No spam calls, EVER." />
          </div>

          {isSubmitted ? (
            <ConfirmationMessage firstName={firstName} />
          ) : (
            <ContactForm
              firstName={firstName}
              setFirstName={setFirstName}
              onSubmit={onSubmit}
            />
          )}

          <div className="text-center p-2 border-t border-neutral-medium w-full">
            <p className="text-sm text-neutral-dark">
              Support Hours: Mon - Fri: 9am-6pm CST
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
