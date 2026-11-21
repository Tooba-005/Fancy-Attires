import { Gem, HeartHandshake, Scissors, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { ImageWithFallback } from "../components/ImageWithFallback";
import { SectionHeading } from "../components/SectionHeading";

export function About() {
  return (
    <main>
      <section className="page-hero">
        <div className="page-hero__shape" />
        <div className="container page-hero__content">
          <span className="eyebrow">About Fancy Attires</span>
          <h1>
            Made for the moments
            <br />
            that feel like you.
          </h1>
          <p>
            Welcome to Fancy Attires, where elegance meets style. We bring you beautiful fashion
            collections designed to make every moment special.
          </p>
        </div>
      </section>

      <section className="section story">
        <div className="container story__grid">
          <div className="story__image">
            <ImageWithFallback src="/images/about/story.jpeg" alt="The Fancy Attires story" />
            <span>
              Thoughtfully selected
              <br />
              in Pakistan
            </span>
          </div>
          <div className="story__copy">
            <SectionHeading
              eyebrow="Our story"
              title="An ode to modern Pakistani elegance"
              align="left"
            />
            <p>
              Fancy Attires was imagined for women who value the poetry in fine detail and the
              confidence of a beautifully considered outfit. We bring together timeless silhouettes
              and a contemporary point of view.
            </p>
            <p>
              Our goal is to deliver quality, style, and confidence with every outfit. From a quiet
              afternoon to the grandest celebration, each collection is chosen to make dressing feel
              special again.
            </p>
            <Link className="button button--primary" to="/#collection">
              Discover the collection
            </Link>
          </div>
        </div>
      </section>

      <section className="section values">
        <div className="container">
          <SectionHeading
            eyebrow="Why Fancy Attires"
            title="The details make the difference"
            description="A beautiful shopping experience should feel personal, honest, and effortless."
          />
          <div className="values__grid">
            {[
              [
                Gem,
                "Considered quality",
                "Pieces selected for their finish, feel, and lasting elegance.",
              ],
              [
                Scissors,
                "Timeless style",
                "Graceful silhouettes that feel current without losing their soul.",
              ],
              [
                HeartHandshake,
                "Personal service",
                "Warm WhatsApp support from selection through delivery.",
              ],
              [
                Sparkles,
                "Made for moments",
                "Looks curated to bring confidence to every celebration.",
              ],
            ].map(([Icon, title, text], index) => {
              const ValueIcon = Icon as typeof Gem;
              return (
                <article className="value-card" key={title as string}>
                  <span>0{index + 1}</span>
                  <ValueIcon />
                  <h3>{title as string}</h3>
                  <p>{text as string}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mission">
        <div className="container mission__inner">
          <span className="eyebrow">Our mission</span>
          <h2>
            To make every woman feel
            <br />
            beautifully, unmistakably herself.
          </h2>
          <p>
            We believe confidence begins with comfort, quality, and style that feels authentic. That
            is the standard behind every Fancy Attires collection.
          </p>
        </div>
      </section>
    </main>
  );
}
