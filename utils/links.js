// const links = [
//   { href: "/", text: "Home" },
//   { href: "/sign-up", text: "Sign Up" },
//   { href: "/login", text: "Login" },
//   { href: "/join-club", text: "Join the club" },
// ];

// module.exports = links;

const nonUserLinks = [
  { href: "/", text: "Home" },
  { href: "/sign-up", text: "Sign Up" },
  { href: "/login", text: "Login" },
];

const userNonClubMemberLinks = [
  { href: "/", text: "Home" },
  { href: "/logout", text: "Logout" },
  { href: "/join-club", text: "Join club" },
  { href: "/create-message", text: "Create a new message" },
];

const userAndClubMemberLinks = [
  { href: "/", text: "Home" },
  { href: "/logout", text: "Logout" },
  { href: "/create-message", text: "Create a new message" },
];

module.exports = {
  nonUserLinks,
  userNonClubMemberLinks,
  userAndClubMemberLinks,
};
