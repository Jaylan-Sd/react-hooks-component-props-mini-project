import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  // Bonus: Generate minutes to read indicator
  let indicator = "";
  if (minutes < 30) {
    const count = Math.ceil(minutes / 5);
    indicator = "☕️".repeat(count);
  } else {
    const count = Math.ceil(minutes / 10);
    indicator = "🍱".repeat(count);
  }

  return (
    <article>
      <h3>{title}</h3>
      <small>{indicator} {minutes} min read</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;
