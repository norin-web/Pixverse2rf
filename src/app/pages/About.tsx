import { principles, site } from "../content/site";
import { img } from "../utils/img";
import Reveal from "../components/Reveal";
import Split from "../components/Split";

export default function About() {
  return (
    <>
      <section className="about-hero sec">
        <img className="about-hero__bg" src={img("/images/bg-3.webp")} alt="" decoding="async" />
        <div className="about-hero__in">
          <Reveal as="p" className="kicker">About</Reveal>
          <Split as="h1" className="h1 h1--xl" parts={[["We make it simple to turn an idea into moving pictures"]]} />
          <Reveal as="p" className="body body--lg about-hero__sub" delay={300}>
            PixVerse for iPhone is published by {site.operator} from Madrid, under an authorization from the PixVerse brand rights holder. One app, one prompt box and the models people ask for most.
          </Reveal>
        </div>
      </section>

      <section className="approach sec">
        <p className="lead approach__label"><span>Our approach</span></p>
        <div className="approach__text">
          <Reveal as="p" className="mid-lead">
            <span>Most AI video tools ask you to learn a new interface for every model.</span>{" "}
            <b>We put them behind one prompt box instead.</b>
          </Reveal>
          <Reveal as="p" className="body body--lg" delay={120}>
            You describe what you want, pick a model if you care which one, and get the result right under your prompt. Video or image, the way you work stays the same.
          </Reveal>
        </div>
      </section>

      <section className="principles sec">
        {principles.map((p, i) => (
          <Reveal className="principle" key={p.title} delay={i * 100}>
            <h2>{p.title}</h2>
            <p className="body">{p.text}</p>
          </Reveal>
        ))}
      </section>
    </>
  );
}
