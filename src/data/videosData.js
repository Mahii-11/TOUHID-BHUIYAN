export const videosData = [
  {
    id: 1,
    category: "Lecture",
    title: "Cybersecurity Lecture 2024",
    video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/v_NXTAxiTCw" title="YouTube video player" frameborder="0" allowfullscreen></iframe>`,
    thumbnail: `https://img.youtube.com/vi/v_NXTAxiTCw/maxresdefault.jpg`,
  },
  {
    id: 2,
    category: "Keynote",
    title: "AI Conference Speech",
    video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/xdwHD_BEF8k" title="YouTube video player" frameborder="0" allowfullscreen></iframe>`,
    thumbnail: `https://img.youtube.com/vi/xdwHD_BEF8k/maxresdefault.jpg`,
  },
  {
    id: 3,
    category: "Interview",
    title: "TV Interview Session",
    video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/ve3o5fsEIm8" title="YouTube video player" frameborder="0" allowfullscreen></iframe>`,
    thumbnail: `https://img.youtube.com/vi/ve3o5fsEIm8/maxresdefault.jpg`,
  },
  {
    id: 4,
    category: "Lecture",
    title: "University Guest Lecture",
    video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/-btkXKn-ov0" title="YouTube video player" frameborder="0" allowfullscreen></iframe>`,
    thumbnail: `https://img.youtube.com/vi/-btkXKn-ov0/maxresdefault.jpg`,
  },
];

export const categories = ["All", ...Array.from(new Set(videosData.map((v) => v.category)))];