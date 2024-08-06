import React, { useEffect, useState } from 'react';
import { i18n } from "../../i18n";
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types";

const NotFound: QuartzComponent = ({ cfg }: QuartzComponentProps) => {
  const [randomGif, setRandomGif] = useState<string | null>(null);

  useEffect(() => {
    const gifs = [
      'https://i.pinimg.com/originals/33/65/ca/3365cae717ad6d0138973a8d5edfdf0a.gif',
      'https://i.pinimg.com/originals/8a/27/ac/8a27ac49bfdaa03d494912c2be86b17c.gif',
      'https://i.pinimg.com/originals/8a/27/ac/8a27ac49bfdaa03d494912c2be86b17c.gif',
      'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMTh3b3pwajA3a202Z3VkNGNnMHcxb2QyYzN4anZkZGtuYzZ0Z2dvNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Uz4cDaGXPxeuY/giphy.gif',
      'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExcW1iYzR3dm83YXRvYzIxcHp6ang4MGRoN3dla3ZvdDZ0Zmp3cjg1dyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/E549VaHiMjknS/giphy.gif',
      'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExcTZ5a291bHJ2MHIwbm56Z2F5Ym5zcDNzc28xazZ5a2NiaGNmYW1kdCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ChX3hzy5CkXsI/giphy.gif',
    ];
    const randomIndex = Math.floor(Math.random() * gifs.length);
    setRandomGif(gifs[randomIndex]);
  }, []);

  // If baseUrl contains a pathname after the domain, use this as the home link
  const url = new URL(`https://${cfg.baseUrl ?? "example.com"}`);
  const baseDir = url.pathname;

  return (
    <article className="popover-hint">
      <h1>404</h1>
      <p>Whoops. Something broke. My bad. You can <a href={baseDir}>{i18n(cfg.locale).pages.error.home}</a> or just enjoy the quiet.</p>
      {randomGif && (
        <div id="gif-container">
          <img src={randomGif} alt="Random GIF" />
        </div>
      )}
    </article>
  );
}

export default (() => NotFound) satisfies QuartzComponentConstructor;
