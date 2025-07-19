import successCheck from "../assets/success-check.png";

interface ConfirmationMessageProps {
  readonly firstName: string;
}

export function ConfirmationMessage({ firstName }: ConfirmationMessageProps) {
  return (
    <>
      <div className="text-center pt-5 pb-2">
        <img
          src={successCheck}
          alt="Success checkmark"
          className="w-12 h-12 mx-auto"
        />
      </div>
      <div className="max-w-sm mx-auto">
        <h1 className="text-primary-dark text-2xl font-bold rounded text-center text-3xl m-2">
          Thanks, {firstName}! <br />
          We'll be in touch soon.
        </h1>
        <p className="text-center p-2 w-full text-primary-dark mt-2 max-w-sm mx-auto">
          Don't want to wait for us to call? <br />
          Call us now to speak to a licensed agent.
        </p>
        <h1 className="text-center p-2 w-full text-primary-dark mb-8 text-3xl underline text-primary-medium font-semibold">
          555-867-5309
        </h1>
      </div>
    </>
  );
}
