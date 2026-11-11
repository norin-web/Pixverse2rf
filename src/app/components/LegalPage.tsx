import { Fragment, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { Link } from "react-router";
import { site } from "../content/site";
import { legalUpdated, type LegalDoc } from "../content/legal";
import Btn from "./Btn";
import Reveal from "./Reveal";

type Section = { id: string; title: string; blocks: string[] };

// turn plain email addresses into mailto links, text otherwise untouched
const linkify = (text: string) =>
  text.split(/(\S+@\S+\.[a-z]{2,})/i).map((part, i) => (/@/.test(part) ? <a key={i} href={`mailto:${part}`}>{part}</a> : part));

const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

/** Split the verbatim text into an intro and "## " sections; wording is never changed. */
function parse(body: string) {
  const intro: string[] = [];
  const sections: Section[] = [];
  for (const block of body.split(/\n{2,}/)) {
    if (block.startsWith("## ")) {
      const title = block.slice(3);
      sections.push({ id: slug(title), title, blocks: [] });
    } else if (sections.length) sections[sections.length - 1].blocks.push(block);
    else intro.push(block);
  }
  return { intro, sections };
}

function Block({ text }: { text: string }): ReactNode {
  if (text.startsWith("### ")) return <h3>{text.slice(4)}</h3>;
  if (text.startsWith("- "))
    return (
      <ul>
        {text.split("\n").map((li, j) => <li key={j}>{linkify(li.replace(/^- /, ""))}</li>)}
      </ul>
    );
  // all-caps clauses get a quiet grey plate so they don't shout across the page
  const caps = text.length > 40 && text === text.toUpperCase();
  return (
    <p className={caps ? "legal-caps" : undefined}>
      {text.split("\n").map((line, i) => (
        <Fragment key={i}>
          {i > 0 && <br />}
          {linkify(line)}
        </Fragment>
      ))}
    </p>
  );
}

export default function LegalPage({ doc }: { doc: LegalDoc }) {
  const { intro, sections } = useMemo(() => parse(doc.body ?? ""), [doc.body]);
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const bodyRef = useRef<HTMLDivElement>(null);
  const other = doc.key === "privacy" ? { to: "/terms", label: "Terms of Use" } : { to: "/privacy", label: "Privacy Policy" };

  // active section = last heading above the upper third; progress = share of the text read
  useEffect(() => {
    const onScroll = () => {
      let cur = 0;
      sections.forEach((s, i) => {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top < innerHeight * 0.35) cur = i;
      });
      setActive(cur);
      const b = bodyRef.current;
      if (b) {
        const r = b.getBoundingClientRect();
        setProgress(Math.min(1, Math.max(0, (innerHeight * 0.35 - r.top) / Math.max(1, r.height - innerHeight * 0.4))));
      }
    };
    onScroll();
    addEventListener("scroll", onScroll, { passive: true });
    addEventListener("resize", onScroll);
    return () => {
      removeEventListener("scroll", onScroll);
      removeEventListener("resize", onScroll);
    };
  }, [sections]);

  const go = (id: string) => {
    const el = document.getElementById(id);
    if (el) scrollTo({ top: el.getBoundingClientRect().top + scrollY - 140, behavior: "smooth" });
  };
  const n = (i: number) => String(i + 1).padStart(2, "0");

  return (
    <>
      <section className="doc-head sec">
        <nav className="doc-tabs" aria-label="Legal documents">
          <Link to="/privacy" className={`doc-tab${doc.key === "privacy" ? " is-on" : ""}`} aria-current={doc.key === "privacy" ? "page" : undefined}>
            Privacy Policy
          </Link>
          <Link to="/terms" className={`doc-tab${doc.key === "terms" ? " is-on" : ""}`} aria-current={doc.key === "terms" ? "page" : undefined}>
            Terms of Use
          </Link>
        </nav>
        <h1 className="h1">{doc.title}</h1>
        <dl className="doc-meta">
          <div><dt>Last updated</dt><dd>{doc.body ? legalUpdated : "Coming soon"}</dd></div>
          {sections.length > 0 && <div><dt>Sections</dt><dd>{sections.length}</dd></div>}
          <div><dt>Questions</dt><dd><a href={`mailto:${site.email}`}>{site.email}</a></dd></div>
        </dl>
      </section>

      <section className="glance sec">
        <p className="glance__label">At a glance</p>
        <div className="glance__grid">
          {doc.glance.map(([h, t], i) => (
            <Reveal className="glance__card" key={h} delay={i * 80}>
              <b>{h}</b>
              <span>{t}</span>
            </Reveal>
          ))}
        </div>
        <p className="note">A short summary for convenience. The full text below is what applies.</p>
      </section>

      <section className={`reader sec${sections.length ? "" : " reader--empty"}`}>
        {sections.length > 0 && (
          <>
            <div className="reader__bar" aria-hidden="true">
              <div><span>Section {n(active)}</span><span>of {sections.length}</span></div>
              <i style={{ ["--k" as string]: progress }} />
            </div>
            <aside className="reader__scale" aria-label="Sections">
              <i className="reader__track" style={{ ["--k" as string]: progress }} />
              <ol>
                {sections.map((s, i) => (
                  <li key={s.id}>
                    <button className={i === active ? "is-on" : i < active ? "is-read" : ""} onClick={() => go(s.id)} aria-label={s.title} title={s.title}>
                      <i aria-hidden="true" />
                      <b>{n(i)}</b>
                    </button>
                  </li>
                ))}
              </ol>
            </aside>
          </>
        )}

        <div className="reader__text" ref={bodyRef}>
          {!doc.body && (
            <p className="reader__empty">
              The full {doc.title} will be published here soon. Until then, write to{" "}
              <a href={`mailto:${site.email}`}>{site.email}</a> with any question about it.
            </p>
          )}
          {intro.map((t, i) => <p className="reader__intro" key={i}>{linkify(t)}</p>)}
          {sections.map((s, i) => (
            <section className="lsec" id={s.id} key={s.id}>
              <h2>{i + 1}. {s.title}</h2>
              {s.blocks.map((b, j) => <Block key={j} text={b} />)}
            </section>
          ))}
        </div>
      </section>

      <section className="mailband sec">
        <div>
          <h2 className="h3">Questions about {doc.key === "privacy" ? "this policy" : "these terms"}?</h2>
          <p className="body">Write to <a className="link" href={`mailto:${site.email}`}>{site.email}</a> and we will get back to you.</p>
        </div>
        <Btn to={other.to} variant="dark" arrow>Read the {other.label}</Btn>
      </section>
    </>
  );
}
