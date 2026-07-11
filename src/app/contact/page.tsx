import type { Metadata } from "next";
import { MinimalHomeLink } from "@/components/layout/MinimalHomeLink";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a conversation about your next commission or collaboration.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <div className="px-6 pt-8 md:px-12 lg:px-20">
        <MinimalHomeLink />
      </div>
      <section className="section-pad pb-8 pt-6 text-center">
        <Reveal>
          <h1 className="text-4xl font-semibold tracking-tight text-foreground md:text-[48px]">
            Contact
          </h1>
          <p className="mx-auto mt-4 max-w-md text-[17px] leading-relaxed text-secondary">
            Share a brief overview of your project. We typically respond within
            three business days.
          </p>
        </Reveal>
      </section>

      <section className="section-pad border-t border-line pt-12">
        <div className="container-wide grid gap-16 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="space-y-8">
              <div>
                <p className="text-xs font-medium text-secondary">Email</p>
                <a
                  href="mailto:hello@atelier.studio"
                  className="mt-2 block text-xl font-semibold text-link hover:text-link-hover"
                >
                  hello@atelier.studio
                </a>
              </div>
              <div>
                <p className="text-xs font-medium text-secondary">Location</p>
                <p className="mt-2 text-[15px] text-secondary">
                  Remote collaboration and on-site production worldwide.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <form
              className="glass rounded-[18px] p-8 md:p-10"
              action="mailto:hello@atelier.studio"
              method="POST"
              encType="text/plain"
            >
              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="text-xs font-medium text-secondary"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="mt-2 w-full border-b border-line bg-transparent py-2 text-[17px] text-foreground outline-none focus:border-foreground"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="text-xs font-medium text-secondary"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="mt-2 w-full border-b border-line bg-transparent py-2 text-[17px] text-foreground outline-none focus:border-foreground"
                  />
                </div>

                <div>
                  <label
                    htmlFor="organization"
                    className="text-xs font-medium text-secondary"
                  >
                    Organization
                  </label>
                  <input
                    id="organization"
                    name="organization"
                    type="text"
                    placeholder="Studio, museum, gallery"
                    className="mt-2 w-full border-b border-line bg-transparent py-2 text-[17px] text-foreground placeholder:text-secondary/60 outline-none focus:border-foreground"
                  />
                </div>

                <div>
                  <label
                    htmlFor="type"
                    className="text-xs font-medium text-secondary"
                  >
                    Project type
                  </label>
                  <select
                    id="type"
                    name="type"
                    className="mt-2 w-full border-b border-line bg-transparent py-2 text-[17px] text-foreground outline-none focus:border-foreground"
                  >
                    <option value="installation">Installation</option>
                    <option value="website">Digital platform</option>
                    <option value="app">Application</option>
                    <option value="consulting">Consulting</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="text-xs font-medium text-secondary"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Project overview, timeline, and scope."
                    className="mt-2 w-full resize-none border-b border-line bg-transparent py-2 text-[17px] text-foreground placeholder:text-secondary/60 outline-none focus:border-foreground"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-link py-3 text-[15px] font-medium text-white transition-colors hover:bg-link-hover"
                >
                  Send
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
