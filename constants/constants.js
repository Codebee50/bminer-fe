export const navList = [
  {
    label: "% SALE",
    link: "/",
  },
  {
    label: "Cloud Mining",
    link: "/",
  },
  {
    label: "Calculator",
    link: "/",
  },
  {
    label: "Steady Mining",
    link: "/",
  },
  {
    label: "FAQ",
    link: "/",
  },

  {
    label: "Referral",
    link: "/",
  },
  {
    label: "Contact",
    link: "/",
  },
];

export function formatDate(dateString) {
  const date = new Date(dateString);

  const options = {
    year: "numeric",
    month: "numeric", // Full month name
    day: "numeric",
    // hour: "2-digit",
    // minute: "2-digit",
    // second: "2-digit",
    // timeZoneName: "short", // Includes the time zone
  };

  return date.toLocaleDateString("en-US", options);
}
