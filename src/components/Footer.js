import React from 'react';
import config from '../../config';
export default function Footer() {
  return (
    <footer id="footer">
      <div className="inner">
        <section>
          <h2>Get in touch</h2>
          <ul className="icons">
            {config.socialLinks.map(social => {
              const { icon, name, url } = social;
              return (
                <li key={url}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`icon fa-2x ${icon}`}
                  >
                    <span className="label">{name}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </section>
      </div>
    </footer>
  );
}
