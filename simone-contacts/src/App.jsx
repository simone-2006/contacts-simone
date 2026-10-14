import { Phone, Mail, MapPin, Moon, Sun } from "lucide-react";
import { useState } from "react";

function LinkedinIcon({ size = 18, className }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function GithubIcon({ size = 18, className }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function InstagramIcon({ size = 18, className }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

const contact = {
  phone: "+39 370 136 4070",
  mail: "simone.penza06@gmail.com",
  location: "Lissone, MB",
  social: [
    {
      label: "LinkedIn",
      username: "Simone Penza",
      url: "https://www.linkedin.com/in/simone-penza-604031388/",
      Icon: LinkedinIcon,
      iconClass: "group-hover:text-[#0A66C2] group-active:text-[#0A66C2]",
    },
    {
      label: "GitHub",
      username: "simone-2006",
      url: "https://github.com/simone-2006",
      Icon: GithubIcon,
      iconClass:
        "group-hover:text-[#181717] group-active:text-[#181717] dark:group-hover:text-white dark:group-active:text-white",
    },
    {
      label: "Instagram",
      username: "simone.penzaa",
      url: "https://www.instagram.com/simone.penzaa/",
      Icon: InstagramIcon,
      iconClass: "group-hover:text-[#E4405F] group-active:text-[#E4405F]",
    },
  ],
};

const linkBase =
  "group flex min-h-11 items-center gap-2 rounded-xl p-2 text-base text-muted transition-colors hover:bg-secondary hover:text-text-secondary active:bg-secondary";

const iconBase = "shrink-0 transition-colors";

export default function App() {
  const [dark, setDark] = useState(() =>
    document.documentElement.classList.contains("dark"),
  );

  function toggleDarkMode() {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    setDark(next);
  }

  return (
    <div className="flex min-h-dvh min-w-0 flex-col bg-primary text-text">
      <main className="page-gutter flex flex-1 flex-col pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-[max(1.25rem,env(safe-area-inset-top))]">
        <div className="flex items-start justify-between gap-4">
          <p className="font-sans text-sm font-semibold uppercase tracking-wide text-text">
            Contatti
          </p>
          <button
            type="button"
            onClick={toggleDarkMode}
            className="inline-flex size-10 shrink-0 items-center justify-center rounded text-muted transition-colors hover:text-text"
            aria-label={dark ? "Attiva tema chiaro" : "Attiva tema scuro"}
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        <div className="mt-8 flex min-w-0 flex-col gap-2">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted">
            Ciao, sono
          </p>
          <h1 className="font-serif text-6xl font-semibold leading-[0.95]">
            <span className="block text-text-secondary">Penza</span>
            <span className="block text-text">Simone</span>
          </h1>
          <p className="text-xs text-muted ">
            {contact.location}
          </p>
        </div>

        <div className="mt-10 rounded-md bg-highlight p-3 text-text-secondary">
          <div className="flex flex-col gap-1">
            <a
              href={`tel:${contact.phone.replace(/\s+/g, "")}`}
              className={linkBase}
            >
              <Phone
                size={18}
                className={`${iconBase} group-hover:text-[#ff] group-active:text-[#fff]`}
              />
              <span>{contact.phone}</span>
            </a>
            <a href={`mailto:${contact.mail}`} className={linkBase}>
              <Mail
                size={18}
                className={`${iconBase} group-hover:text-[#fff] group-active:text-[#fff]`}
              />
              <span className="break-all">{contact.mail}</span>
            </a>
            <a
              href={`https://share.google/ZqjZKT5Dq7bGC1AyU`}
              className={linkBase}
            >
              <MapPin
                size={18}
                className={`${iconBase} group-hover:text-[#fff] group-active:text-[#fff]`}
              />
              <span className="break-all">{contact.location}</span>
            </a>
          </div>

          <div className="mt-3 flex flex-col gap-1 border-t border-border-color pt-3">
            {contact.social.map(({ label, username, url, Icon, iconClass }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                title={label}
                className={linkBase}
              >
                <Icon size={18} className={`${iconBase} ${iconClass}`} />
                <span className="font-medium">{username}</span>
              </a>
            ))}
          </div>
        </div>
      </main>

      <footer className="page-gutter w-full border-t border-accent bg-primary pt-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] text-center text-xs text-muted">
        © {new Date().getFullYear()} Simone Penza
      </footer>
    </div>
  );
}
