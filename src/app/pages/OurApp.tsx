import { app, imageModels, reel, specs, videoModels } from "../content/site";
import { img } from "../utils/img";
import Btn from "../components/Btn";
import Reveal from "../components/Reveal";
import Split from "../components/Split";
import { Cta, Lead, Media } from "../components/ui";

const ModelList = ({ items }: { items: { name: string; tag?: string }[] }) => (
  <ul className="models">
    {items.map((m) => (
      <li key={m.name}>
        <span>{m.name}</span>
        {m.tag && <small>{m.tag}</small>}
      </li>
    ))}
  </ul>
);

export default function OurApp() {
  return (
    <>
      <section className="split-hero sec">
        <div className="split-hero__text">
          <Reveal as="p" className="kicker">The app</Reveal>
          <Split as="h1" className="h1" parts={[["Video and images, made in one place"]]} />
          <Reveal as="p" className="body body--lg" delay={250}>
            PixVerse turns a sentence or a photo into a short video or a still image. Two tabs, eighteen models and one prompt box.
          </Reveal>
          <Reveal className="split-hero__cta" delay={350}>
            <Btn href={app.url}>Download on the App Store</Btn>
          </Reveal>
        </div>
        <Media bg="/images/bg-1.webp" phone="/images/phone-prompt.webp" alt="PixVerse Video tab with an empty prompt box" eager />
      </section>

      <section className="reel-sec sec">
        <div className="reel-sec__head">
          <Lead muted="Inside the app" />
        </div>
        <div className="reel" tabIndex={0} aria-label="App screens">
          {reel.map((s, i) => (
            <figure className="reel__shot" key={s.label}>
              <img src={img(s.src)} alt={`PixVerse screen: ${s.label}`} width={600} height={1301} loading={i < 2 ? "eager" : "lazy"} decoding="async" />
              <figcaption>{s.label}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="tabs2 sec">
        <Reveal className="tabs2__col">
          <h2 className="h2">Video tab</h2>
          <p className="body">Text to video and photo to video. Nine models to choose from in Select AI Model.</p>
          <ModelList items={videoModels} />
        </Reveal>
        <Reveal className="tabs2__col" delay={120}>
          <h2 className="h2">Image tab</h2>
          <p className="body">Stills from a prompt or a reference photo. Nine image models in the same list.</p>
          <ModelList items={imageModels} />
        </Reveal>
      </section>

      <section className="specs sec">
        <Lead className="specs__lead" muted="The details" />
        <dl className="specs__table">
          {specs.map(([k, v]) => (
            <div key={k}>
              <dt>{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </dl>
      </section>

      <Cta />
    </>
  );
}
