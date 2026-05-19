import { Link } from "react-router-dom";
import data from "../data";

// SAFE FIX: handles empty data
const articles = Array.isArray(data) ? data : data?.articles || [];

export default function Blog() {
  return (
    <div style={{ maxWidth: "900px", margin: "auto", padding: "20px", fontFamily: "Poppins, sans-serif" }}>

      {/* HEADER */}
      <h1 style={{ fontSize: "2.5rem" }}>
        ✨ Colorful Nail Designs Blog
      </h1>

      <p style={{ color: "#555", lineHeight: "1.8" }}>
        Welcome to Stylesaura — a Pinterest-inspired space for colorful nail designs, aesthetic inspiration,
        and viral nail trends that are taking over TikTok and Instagram right now.
      </p>

      <p style={{ color: "#555", lineHeight: "1.8" }}>
        Every design here is about vibe, mood, and aesthetic expression — from glossy chrome
        nails to dreamy aura blends, coquette details, and clean girl minimal sets.
      </p>

      {/* SECTION TITLE */}
      <h2 style={{ marginTop: "40px" }}>
        💅 Latest Nail Inspo
      </h2>

      {/* BLOG LIST — only render if there are articles */}
      {articles.length === 0 ? (
        <p style={{ color: "#777", fontStyle: "italic", lineHeight: "1.7" }}>
          No posts yet — new nail inspo coming soon! ✨
        </p>
      ) : (
        articles.map((post, index) => (
          <div
            key={index}
            style={{
              marginBottom: "25px",
              paddingBottom: "20px",
              borderBottom: "1px solid #eee"
            }}
          >
            <span style={{ fontSize: "12px", color: "hotpink", letterSpacing: "1px" }}>
              {post.category}
            </span>

            <h3 style={{ margin: "8px 0" }}>
              <Link to={`/post/${post.slug}`} style={{ textDecoration: "none", color: "#111" }}>
                {post.title}
              </Link>
            </h3>

            <p style={{ fontSize: "14px", color: "#555", lineHeight: "1.7" }}>
              This nail design is part of the latest Pinterest beauty wave —
              soft, aesthetic, viral, and highly saved across social media platforms.
              Click to explore full inspiration →
            </p>
          </div>
        ))
      )}

      {/* EXTRA SECTION */}
      <h2 style={{ marginTop: "50px" }}>
        🌸 Why Colorful Nails Are Trending
      </h2>

      <p style={{ color: "#555", lineHeight: "1.8" }}>
        Colorful nail designs are not just beauty trends — they are part of modern aesthetic culture.
        Each style reflects personality, mood, and identity in a visual way.
      </p>

      <p style={{ color: "#555", lineHeight: "1.8" }}>
        From pink chrome nails that feel luxurious, to aura nails that feel dreamy and soft,
        every design tells its own story.
      </p>

      <p style={{ color: "#555", lineHeight: "1.8" }}>
        That’s why Pinterest, TikTok, and Instagram are full of nail inspiration content —
        because nails have become a core part of aesthetic identity.
      </p>

    </div>
  );
}