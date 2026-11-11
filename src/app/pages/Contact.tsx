import { site } from "../content/site";
import MailForm from "../components/MailForm";
import Reveal from "../components/Reveal";
import Split from "../components/Split";

export default function Contact() {
  return (
    <section className="contact sec">
      <div className="contact__mail">
        <Reveal as="p" className="kicker">Contact</Reveal>
        <Split as="h1" className="h1" parts={[["Write to us"]]} />
        <Reveal as="p" className="body body--lg" delay={200}>
          Questions about the app, a bug, an idea or a billing issue. One address for all of it.
        </Reveal>
        <Reveal className="contact__addr" delay={300}>
          <span>Email</span>
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </Reveal>
      </div>
      <div className="contact__form">
        <MailForm
          subject="PixVerse: message from the website"
          submit="Send message"
          fields={[
            { name: "name", label: "Name", required: true, auto: "name", placeholder: "Your name", half: true },
            { name: "email", label: "Email", type: "email", required: true, auto: "email", placeholder: "you@example.com", half: true },
            { name: "topic", label: "Topic", options: ["Question about the app", "Bug report", "Idea or feedback", "Billing and subscription"] },
            { name: "message", label: "Message", textarea: true, required: true, placeholder: "Tell us what happened or what you would like to see" },
          ]}
        />
      </div>
    </section>
  );
}
