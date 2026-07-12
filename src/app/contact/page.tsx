import type { Metadata } from "next";
import { MinimalHomeLink } from "@/components/layout/MinimalHomeLink";
import { Reveal } from "@/components/ui/Reveal";
import { siteContact } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a conversation about your next commission or collaboration.",
};

const fieldClass =
  "mt-1 w-full border-b border-line bg-transparent py-1.5 text-[15px] text-foreground outline-none focus:border-foreground";

export default function ContactPage() {
  return (
    <div className="flex min-h-[calc(100dvh-4.5rem)] flex-col px-6 pb-6 pt-6 md:px-12 lg:px-20">
      <MinimalHomeLink />

      <div className="mx-auto flex w-full max-w-xl flex-1 flex-col justify-center py-4 md:py-6">
        <Reveal>
          <div className="mb-5 text-center md:mb-6">
            <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-[40px]">
              Contact
            </h1>
            <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-secondary md:text-[15px]">
              Share a brief overview of your project. I typically respond
              within three business days.
            </p>
          </div>

          <form
            className="glass rounded-[18px] p-5 md:p-6"
            action={`mailto:${siteContact.email}`}
            method="POST"
            encType="text/plain"
          >
            <div className="grid gap-4 md:grid-cols-2">
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
                  className={fieldClass}
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
                  className={fieldClass}
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
                  className={`${fieldClass} placeholder:text-secondary/60`}
                />
              </div>

              <div>
                <label
                  htmlFor="type"
                  className="text-xs font-medium text-secondary"
                >
                  Project type
                </label>
                <select id="type" name="type" className={fieldClass}>
                  <option value="installation">Installation</option>
                  <option value="website">Digital platform</option>
                  <option value="app">Application</option>
                  <option value="consulting">Consulting</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label
                  htmlFor="message"
                  className="text-xs font-medium text-secondary"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={2}
                  required
                  placeholder="Project overview, timeline, and scope."
                  className={`${fieldClass} resize-none placeholder:text-secondary/60`}
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-4 w-full rounded-full bg-link py-2.5 text-[14px] font-medium text-white transition-colors hover:bg-link-hover"
            >
              Send
            </button>
          </form>
        </Reveal>
      </div>
    </div>
  );
}
