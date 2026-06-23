import { stripe } from "@/lib/stripe";
import { redirect } from "next/navigation";
import { CircleCheckFill, Envelope } from "@gravity-ui/icons";
import Link from "next/link";

export default async function Success({ searchParams }) {
  const { session_id } = await searchParams;

  if (!session_id)
    throw new Error("Please provide a valid session_id (`cs_test_...`)");

  const {
    status,
    customer_details: { email: customerEmail },
  } = await stripe.checkout.sessions.retrieve(session_id, {
    expand: ["line_items", "payment_intent"],
  });

  if (status === "open") {
    return redirect("/");
  }

  if (status === "complete") {
    return (
      <section
        id="success"
        className="mt-30  min-h-[75vh] flex items-center justify-center px-4 py-16 bg-default-50/40"
      >
        <div className="border rounded-2xl p-9 w-full max-w-xl mx-auto text-center flex flex-col items-center gap-6">
          {/* Animated Green Check Indicator */}
          <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-success-50 text-success">
            <CircleCheckFill className="w-10 h-10" />
            <span className="absolute inset-0 rounded-full bg-success/10 animate-ping opacity-75" />
          </div>

          {/* Heading Content */}
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Payment Confirmed!
            </h1>
            <p className="text-sm font-medium text-default-500">
              Thank you for choosing HireLoop to grow your team or career.
            </p>
          </div>

          {/* Clean Transaction Target Pill */}
          <div className="w-full max-w-md flex items-center justify-center gap-2.5 px-4 py-3 rounded-xl bg-default-100 border border-default-200/60 text-sm text-default-700 font-medium break-all">
            <Envelope className="w-4 h-4 text-primary shrink-0" />
            <span>
              Sent to:{" "}
              <strong className="text-foreground">{customerEmail}</strong>
            </span>
          </div>

          {/* Formal Status Details Text */}
          <p className="max-w-md text-sm leading-relaxed text-default-500">
            We appreciate your business! A confirmation email will be sent to{" "}
            <span className="font-semibold text-foreground">
              {customerEmail}
            </span>
            . If you have any questions, please email{" "}
            <a
              href="mailto:orders@example.com"
              className="text-primary hover:underline font-medium transition-colors"
            >
              orders@example.com
            </a>
            .
          </p>

          {/* Standard Navigation Actions Container */}
          <div className="w-full max-w-xs pt-4 flex flex-col md:flex-row justify-center items-center gap-2">
            <Link
              href="/dashboard"
              className="w-full border  h-10 px-4 inline-flex items-center justify-center rounded-xl bg-primary text-primary-foreground font-semibold text-sm shadow-sm hover:opacity-90 active:scale-[0.98] transition-all"
            >
              Go to Dashboard
            </Link>
            <Link
              href="/"
              className="w-full border  h-10 px-4 inline-flex items-center justify-center rounded-xl bg-transparent text-default-600 hover:text-foreground font-medium text-sm transition-colors"
            >
              Back to Homepage
            </Link>
          </div>
        </div>
      </section>
    );
  }
}
