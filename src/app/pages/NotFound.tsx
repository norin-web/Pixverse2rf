import Btn from "../components/Btn";

export default function NotFound() {
  return (
    <section className="notfound sec">
      <h1 className="h1">This page doesn’t exist</h1>
      <p className="body body--lg">The link may be old or mistyped.</p>
      <Btn to="/" variant="dark" arrow>Back to the home page</Btn>
    </section>
  );
}
