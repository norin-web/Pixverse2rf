import { faq, site } from "../content/site";
import Btn from "../components/Btn";
import Reveal from "../components/Reveal";
import Split from "../components/Split";
import { Faq, Lead } from "../components/ui";

export default function Support() {
  return (
    <>
      <section className="page-head sec">
        <div>
          <Reveal as="p" className="kicker">Support</Reveal>
          <Split as="h1" className="h1" parts={[["How can we help?"]]} />
        </div>
        <Reveal as="p" className="body page-head__aside" delay={250}>
          Answers to the questions people ask most. Still stuck? Write to <a className="link" href={`mailto:${site.email}`}>{site.email}</a>.
        </Reveal>
      </section>

      <section className="sec sec--flush">
        <Faq items={faq} />
      </section>

      <section className="mailband sec">
        <div>
          <Lead muted="Didn't find your answer?" />
          <a className="mailband__mail" href={`mailto:${site.email}`}>{site.email}</a>
        </div>
        <Btn to="/contact" variant="dark" arrow>Write to us</Btn>
      </section>
    </>
  );
}
