import { useId, useState, type ReactNode } from "react";
import { app } from "../content/site";
import { img } from "../utils/img";
import { useCountUp } from "../utils/motion";
import { useReveal } from "../utils/useReveal";
import Btn from "./Btn";

/** Real app screen in a plain black frame — no plate, no tilt, no hover motion. */
export function Phone({ src, alt, size = "md", eager }: { src: string; alt: string; size?: "lg" | "md"; eager?: boolean }) {
  return (
    <div className={`phone phone--${size}`}>
      <img src={img(src)} alt={alt} width={600} height={1301} loading={eager ? "eager" : "lazy"} decoding="async" />
    </div>
  );
}

/** Blurred frame from the app's samples with a phone in front, fades in on view. */
export function Media({ bg, phone, alt, eager }: { bg: string; phone: string; alt: string; eager?: boolean }) {
  const { ref, shown } = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className={`media${shown ? " is-in" : ""}`}>
      <img className="media__bg" src={img(bg)} alt="" loading={eager ? "eager" : "lazy"} decoding="async" />
      <Phone src={phone} alt={alt} eager={eager} />
    </div>
  );
}

/** Two-tone lead line: muted first part, white second part. */
export function Lead({ muted, strong, className = "" }: { muted: ReactNode; strong?: ReactNode; className?: string }) {
  return (
    <p className={`lead ${className}`}>
      <span>{muted}</span>
      {strong && <> <b>{strong}</b></>}
    </p>
  );
}

export function Fact({ n, text, delay = 0 }: { n: string; text: string; delay?: number }) {
  const { ref, shown } = useReveal<HTMLDivElement>();
  const shownN = useCountUp(n, shown);
  return (
    <div ref={ref} className={`fact rv${shown ? " is-in" : ""}`} style={{ transitionDelay: delay ? `${delay}ms` : undefined }}>
      <b className="fact__n" aria-label={n}>{shownN}</b>
      <p>{text}</p>
    </div>
  );
}

const Chevron = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M6 9l6 6 6-6" />
  </svg>
);

/** Accordion: one answer open at a time, the first one open by default. */
export function Faq({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState(0);
  const base = useId();
  return (
    <div className="faq">
      {items.map((it, i) => {
        const on = open === i;
        const id = `${base}-${i}`;
        return (
          <div className={`faq__item${on ? " is-open" : ""}`} key={it.q}>
            <h3>
              <button aria-expanded={on} aria-controls={id} onClick={() => setOpen(on ? -1 : i)}>
                <span>{it.q}</span>
                <Chevron />
              </button>
            </h3>
            <div className="faq__a" id={id} role="region" hidden={!on}>
              <p>{it.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/** Closing download block on a blurred frame. */
export function Cta() {
  return (
    <section className="cta">
      <img className="cta__bg" src={img("/images/cta-bg.webp")} alt="" loading="lazy" decoding="async" />
      <div className="cta__in">
        <h2 className="cta__title">Your first clip is one sentence away</h2>
        <Btn href={app.url} variant="white">Download on the App Store</Btn>
        <p className="cta__note">Free to download. Premium adds every model and HD quality.</p>
      </div>
    </section>
  );
}
