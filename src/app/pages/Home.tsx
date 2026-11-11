import { app, facts, features, homeFaq, steps } from "../content/site";
import { img } from "../utils/img";
import { useReveal } from "../utils/useReveal";
import Btn from "../components/Btn";
import Reveal from "../components/Reveal";
import Split from "../components/Split";
import { Cta, Fact, Faq, Lead, Media, Phone } from "../components/ui";
import { Link } from "react-router";

const StepIcon = ({ kind }: { kind: string }) =>
  kind === "app" ? (
    <img className="step__app" src={img("/images/app-icon.png")} alt="" width={40} height={40} />
  ) : (
    <span className="step__ring" aria-hidden="true">
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        {kind === "clip" ? (
          <path d="M21.4 11.1l-9.2 9.2a6 6 0 0 1-8.5-8.5l9.2-9.2a4 4 0 0 1 5.7 5.7l-9.2 9.2a2 2 0 0 1-2.8-2.8l8.5-8.5" />
        ) : (
          <path d="M12 3v12M7 10l5 5 5-5M5 21h14" />
        )}
      </svg>
    </span>
  );

const Step = ({ s, className = "" }: { s: (typeof steps)[number]; className?: string }) => (
  <div className={`step ${className}`}>
    <StepIcon kind={s.icon} />
    <p>{s.text}</p>
  </div>
);

/** Reference "trade-offs" diagram reused as the three-step start: lines draw in on view. */
function HowTo() {
  const { ref, shown } = useReveal<HTMLDivElement>("-120px");
  return (
    <section className="how sec">
      <Lead className="how__lead" muted="From an idea to a finished clip." strong="Three steps, all inside one chat." />
      <div ref={ref} className={`diagram${shown ? " is-in" : ""}`}>
        <svg className="diagram__lines" viewBox="0 0 1278 560" fill="none" aria-hidden="true">
          <path pathLength={1} d="M0 300H236M556 300H744M760 284V190Q760 150 800 150H884M760 316V410Q760 450 800 450H884M1204 150H1278M1204 450H1278M396 268V100Q396 60 436 60H1278" />
        </svg>
        <span className="diagram__diamond" aria-hidden="true" />
        <Step s={steps[0]} className="step--a" />
        <Step s={steps[1]} className="step--b" />
        <Step s={steps[2]} className="step--c" />
      </div>
      <ol className="steps-v">
        {steps.map((s, i) => (
          <Reveal as="li" key={s.text} delay={i * 90}>
            <Step s={s} />
          </Reveal>
        ))}
      </ol>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <section className="hero sec">
        <div className="hero__copy">
          <Reveal as="p" className="hero__kicker">AI Video Generator for iPhone</Reveal>
          <Split as="h1" className="hero__title" parts={[["Type one sentence."], ["\n"], ["Watch it move."]]} />
          <Reveal className="hero__actions" delay={350}>
            <Btn href={app.url}>Download on the App Store</Btn>
            <p className="note">Free on the App Store. Requires iOS {app.minIOS} or later.</p>
          </Reveal>
        </div>
        <div className="hero__stage">
          <img className="hero__band" src={img("/images/hero-band.webp")} alt="" width={1600} height={650} decoding="async" />
          <Phone src="/images/phone-chat.webp" alt="PixVerse chat with a generated video ready to play" size="lg" eager />
        </div>
      </section>

      <section className="manifesto sec">
        <Reveal as="p" className="big-lead">
          <span>A short clip used to take a camera, a location, an edit and a free weekend.</span>{" "}
          <b>Now it takes one sentence or one photo.</b>
        </Reveal>
        <Reveal as="p" className="big-lead" delay={120}>
          <span>PixVerse does</span> <b>the rest.</b>
        </Reveal>
      </section>

      <HowTo />

      <section className="features sec">
        <Lead className="sec__intro" muted="So what can you make with it?" />
        {features.map((f, i) => (
          <div className={`row${i % 2 ? " row--flip" : ""}`} key={f.title}>
            <Reveal className="row__text">
              <h2 className="h2">{f.title}</h2>
              <p className="body">{f.text}</p>
            </Reveal>
            <Media bg={f.bg} phone={f.phone} alt={`PixVerse screen: ${f.title}`} />
          </div>
        ))}
      </section>

      <section className="facts sec">
        {facts.map((f, i) => (
          <Fact key={f.text} n={f.n} text={f.text} delay={i * 80} />
        ))}
      </section>

      <section className="faq-sec sec">
        <Lead className="sec__intro sec__intro--line" muted="Straight answers" />
        <Faq items={homeFaq} />
        <Link to="/support" className="more">
          More questions are answered on the Support page
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
        </Link>
      </section>

      <Cta />
    </>
  );
}
