import Header from "../components/Header";

export default function Premium() {
  const handleSave = async () => {
  const url = window.location.href;
  const text = "Colorful Nail Designs Inspo ✨";

  const pinterestUrl = `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}&description=${encodeURIComponent(text)}`;

  window.open(pinterestUrl, "_blank");

  try {
    await navigator.clipboard.writeText(url);
  } catch (err) {
    console.log("Clipboard failed");
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
};
  return (
    <>
      <Header />

      <div className="nails-page">

        {/* HERO */}
        <section className="hero-section">

          <img
            src="/images/hero-nails.jpg"
            alt="Colorful nail designs"
          />

          <div className="hero-overlay">

            <span className="hero-tag">
              ✨ PINTEREST VIRAL NAILS 2026
            </span>

            <h1>
              55+ Colorful Nail Designs
              That Are Literally
              Too Cute To Ignore
            </h1>

            <p>
              The prettiest Pinterest nail ideas trending this year —
              from glossy chrome nails to dreamy aura sets.
            </p>

          </div>

        </section>

        {/* INTRO */}
        <section className="intro-text">

          <p>
            If your nails don’t look like a Pinterest moodboard this year…
            honestly what are we doing?
          </p>

          <p>
            Colorful nail designs are completely taking over beauty feeds.
            Every aesthetic right now has its own nail personality —
            soft girl nails, coquette nails, clean girl chrome,
            glazed aura nails, vacation french tips, Y2K airbrush sets,
            jelly nails and dreamy pastel gradients.
          </p>

        </section>

        {/* STORY 1 */}
        <section className="story-section">

          <img
            src="/images/pink-chrome.jpg"
            alt="Pink chrome nails"
          />

          <div className="story-content">

            <span>CHROME GIRL ENERGY ✨</span>

            <h2>
              Pink Chrome Nails
              That Look Expensive
              In Every Photo
            </h2>

            <p>
              These are the kind of nails that instantly make
              every mirror selfie feel prettier.
            </p>

            <p>
              The glossy chrome reflection catches sunlight perfectly
              and gives that luxury-girl aesthetic Pinterest users save nonstop.
            </p>

            <p>
              Imagine wearing these with oversized cream sweaters,
              iced vanilla lattes, gold rings and soft curls.
            </p>

            <p>
              These nails honestly feel like golden hour in manicure form.
            </p>

          </div>

        </section>

        {/* STORY 2 */}
        <section className="story-section reverse">

          <img
            src="/images/aura-blue.jpg"
            alt="Blue aura nails"
          />

          <div className="story-content">

            <span>AURA AESTHETIC ☁️</span>

            <h2>
              Dreamy Blue Aura Nails
              That Feel Like Vacation Energy
            </h2>

            <p>
              Aura nails completely exploded this year,
              especially soft icy blue gradients.
            </p>

            <p>
              They almost look airbrushed by clouds.
              The soft blending creates a dreamy effect
              that feels futuristic and feminine at the same time.
            </p>

            <p>
              These are the kind of nails someone wears
              while boarding a flight with silver headphones,
              lip gloss and an oversized white hoodie.
            </p>

          </div>

        </section>

        {/* IMAGE STACK */}
        <section className="image-stack">

          <img src="/images/nail1.jpg" alt="" />
          <img src="/images/nail2.jpg" alt="" />

        </section>

        {/* QUOTE */}
        <section className="quote-section">

          <h2>
            “Pretty nails make ordinary moments
            feel aesthetic.”
          </h2>

        </section>

        {/* STORY 3 */}
        <section className="story-section">

          <img
            src="/images/coquette.jpg"
            alt="Coquette nails"
          />

          <div className="story-content">

            <span>COQUETTE ERA 🎀</span>

            <h2>
              Coquette Nails
              Are The Definition
              Of Feminine Energy
            </h2>

            <p>
              Tiny bows, pearls, glossy pink shades,
              delicate details and soft white art —
              coquette nails completely own Pinterest right now.
            </p>

            <p>
              These nails feel romantic and playful without trying too hard.
            </p>

            <p>
              They look especially pretty with lace tops,
              ballet flats, glossy lips and vintage jewelry.
            </p>

            <p>
              Honestly this aesthetic feels like
              living inside a Sofia Coppola movie.
            </p>

          </div>

        </section>

        {/* STORY 4 */}
        <section className="story-section reverse">

          <img
            src="/images/y2k.jpg"
            alt="Y2K nails"
          />

          <div className="story-content">

            <span>Y2K NOSTALGIA 💿</span>

            <h2>
              Airbrush Y2K Nails
              Are Back Again
            </h2>

            <p>
              Y2K beauty aesthetics are everywhere again,
              and nail trends are fully embracing it.
            </p>

            <p>
              Metallic finishes, hearts, stars,
              airbrush gradients and glossy jelly textures
              instantly bring back early 2000s energy.
            </p>

            <p>
              These nails feel chaotic, playful,
              nostalgic and impossible to ignore.
            </p>

            <p>
              They look unreal in flash photography too,
              which is exactly why Pinterest users love them.
            </p>

          </div>

        </section>

        {/* GRID */}
        <section className="nails-grid">

          <div className="grid-card">
            <img src="/images/french.jpg" alt="" />
            <h3>🌸 Colorful French Tips</h3>
          </div>

          <div className="grid-card">
            <img src="/images/jelly.jpg" alt="" />
            <h3>🍒 Jelly Nails</h3>
          </div>

          <div className="grid-card">
            <img src="/images/green.jpg" alt="" />
            <h3>💚 Matcha Girl Nails</h3>
          </div>

          <div className="grid-card">
            <img src="/images/summer.jpg" alt="" />
            <h3>☀️ Summer Vacation Nails</h3>
          </div>

        </section>

        {/* STORY 5 */}
        <section className="story-section">

          <img
            src="/images/glazed.jpg"
            alt="Glazed donut nails"
          />

          <div className="story-content">

            <span>GLOSSY CLEAN GIRL ✨</span>

            <h2>
              Glazed Donut Nails
              Still Own The Internet
            </h2>

            <p>
              Some nail trends disappear quickly.
              These didn’t.
            </p>

            <p>
              Glazed nails became timeless because they work
              with literally every aesthetic possible.
            </p>

            <p>
              The soft pearly reflection makes hands look cleaner,
              softer and ridiculously expensive.
            </p>

            <p>
              Pinterest users especially love them because
              they make every image feel brighter and more luxurious.
            </p>

          </div>

        </section>

        {/* STORY 6 */}
        <section className="story-section reverse">

          <img
            src="/images/barbie.jpg"
            alt="Barbiecore nails"
          />

          <div className="story-content">

            <span>BARBIECORE 💕</span>

            <h2>
              Hot Pink Barbiecore Nails
              Are Still Everywhere
            </h2>

            <p>
              Barbiecore beauty completely changed nail trends.
            </p>

            <p>
              Suddenly everyone wanted glossy pink nails,
              sparkle finishes, rhinestones and hyper feminine details.
            </p>

            <p>
              These nails are loud, confident,
              playful and unapologetically girly.
            </p>

            <p>
              Honestly they make every outfit look happier.
            </p>

          </div>

        </section>

        {/* PIN BREAK */}
        <section className="pin-break">

          <img
            src="/images/pinterest-nails.jpg"
            alt=""
          />

        </section>

        {/* LONG TEXT */}
        <section className="article-text">

          <h2>
            Why Pinterest Users
            Are Obsessed With
            Colorful Nail Designs
          </h2>

          <p>
            Pinterest users don’t save images randomly.
            They save aesthetics, emotions and identities.
          </p>

          <p>
            Colorful nails became one of the biggest beauty trends online
            because they instantly transform the energy of photos.
          </p>

          <p>
            A coffee picture feels softer with glossy pink nails.
            A beach photo feels prettier with tropical french tips.
            A mirror selfie feels more luxurious with chrome nails.
          </p>

          <p>
            Nails are no longer just beauty details.
            They became accessories.
            Personality pieces.
            Tiny visual moodboards.
          </p>

          <p>
            That’s why aesthetics like:
          </p>

          <ul>
            <li>soft girl nails</li>
            <li>clean girl chrome nails</li>
            <li>coquette nails</li>
            <li>vacation nails</li>
            <li>latte nails</li>
            <li>pastel aura nails</li>
            <li>jelly nails</li>
            <li>short glossy nails</li>
          </ul>

          <p>
            are dominating Pinterest feeds right now.
          </p>

        </section>

        {/* FINAL CTA */}
        <section className="ending-section">

          <h2>
            Save Your Favorite Nail Inspo
            Before Everyone Else Does ✨
          </h2>

          <p>
            Pinterest beauty trends move insanely fast.
            The nail ideas trending this month usually dominate
            TikTok and Instagram right after.
          </p>

          <button className="save-btn" onClick={handleSave}>
          SAVE THIS INSPO →
        </button>

        </section>

      </div>

      <style>{`

        body {
          margin: 0;
          font-family: "Poppins", sans-serif;
          background: #fff;
          color: #111;
        }

        .nails-page {
          width: 100%;
          overflow-x: hidden;
        }

        /* HERO */

        .hero-section {
          position: relative;
          height: 92vh;
          min-height: 700px;
          overflow: hidden;
        }

        .hero-section img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .hero-section::after {
          content: "";
          position: absolute;
          inset: 0;

          background: linear-gradient(
            to top,
            rgba(0,0,0,0.7),
            rgba(0,0,0,0.15)
          );
        }

        .hero-overlay {
          position: absolute;
          bottom: 8%;
          left: 7%;
          z-index: 5;
          color: white;
          max-width: 650px;
        }

        .hero-tag {
          background: rgba(255,255,255,0.12);
          padding: 10px 18px;
          border-radius: 50px;
          font-size: 0.8rem;
          letter-spacing: 2px;
          backdrop-filter: blur(12px);
        }

        .hero-overlay h1 {
          font-size: clamp(2.5rem, 5vw, 4.5rem);
          line-height: 1;
          margin: 20px 0;
          font-weight: 800;
        }

        .hero-overlay p {
          font-size: 1.05rem;
          line-height: 1.8;
        }

        /* INTRO */

        .intro-text {
          max-width: 850px;
          margin: 120px auto;
          padding: 0 25px;
        }

        .intro-text p {
          font-size: 1.08rem;
          line-height: 2;
          color: #444;
          margin-bottom: 30px;
        }

        /* STORY */

        .story-section {
          max-width: 850px;
          margin: 140px auto;
          padding: 0 25px;
        }

        .story-section img {
          width: 100%;
          border-radius: 28px;
          margin-bottom: 30px;
        }

        .story-content span {
          color: hotpink;
          letter-spacing: 2px;
          font-size: 0.8rem;
        }

        .story-content h2 {
          font-size: clamp(1.8rem, 3vw, 3rem);
          line-height: 1.1;
          margin: 14px 0;
        }

        .story-content p {
          color: #555;
          line-height: 2;
          font-size: 1rem;
        }

        /* IMAGE STACK */

        .image-stack {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;

          max-width: 900px;
          margin: 120px auto;
          padding: 0 25px;
        }

        .image-stack img {
          width: 100%;
          height: 550px;
          object-fit: cover;
          border-radius: 24px;
        }

        /* QUOTE */

        .quote-section {
          text-align: center;
          padding: 160px 20px;
          background: #fff5fa;
        }

        .quote-section h2 {
          font-size: clamp(2rem, 4vw, 4rem);
          max-width: 900px;
          margin: auto;
          line-height: 1.1;
        }

        /* GRID */

        .nails-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit,minmax(250px,1fr));
          gap: 25px;

          max-width: 1200px;
          margin: 120px auto;
          padding: 0 25px;
        }

        .grid-card {
          overflow: hidden;
          border-radius: 24px;
          background: white;

          box-shadow: 0 10px 30px rgba(0,0,0,0.06);

          transition: 0.3s;
        }

        .grid-card:hover {
          transform: translateY(-6px);
        }

        .grid-card img {
          width: 100%;
          height: 360px;
          object-fit: cover;
        }

        .grid-card h3 {
          padding: 20px;
          font-size: 1.1rem;
        }

        /* PIN BREAK */

        .pin-break {
          max-width: 700px;
          margin: 140px auto;
          padding: 0 25px;
        }

        .pin-break img {
          width: 100%;
          border-radius: 28px;
        }

        /* ARTICLE */

        .article-text {
          max-width: 850px;
          margin: 140px auto;
          padding: 0 25px;
        }

        .article-text h2 {
          font-size: clamp(2rem, 4vw, 3.5rem);
          line-height: 1.1;
          margin-bottom: 30px;
        }

        .article-text p {
          color: #555;
          line-height: 2;
          font-size: 1rem;
        }

        .article-text ul {
          padding-left: 20px;
        }

        .article-text li {
          margin-bottom: 12px;
          color: #444;
        }

        /* END */

        .ending-section {
          text-align: center;
          padding: 180px 25px;
        }

        .ending-section h2 {
          font-size: clamp(2rem, 4vw, 4rem);
          line-height: 1.1;
          max-width: 900px;
          margin: auto;
        }

        .ending-section p {
          max-width: 700px;
          margin: 30px auto;
          line-height: 2;
          color: #555;
        }

        .save-btn {
          display: inline-block;
          margin-top: 20px;
          padding: 18px 34px;

          border-radius: 50px;
          background: black;
          color: white;

          text-decoration: none;
          font-weight: 600;
        }

        /* MOBILE */

        @media(max-width: 768px) {

          .hero-overlay {
            left: 25px;
            right: 25px;
          }

          .hero-overlay h1 {
            font-size: 3rem;
          }

          .image-stack {
            grid-template-columns: 1fr;
          }

          .image-stack img {
            height: auto;
          }

          .quote-section {
            padding: 100px 20px;
          }

        }

      `}</style>

    </>
  );
}