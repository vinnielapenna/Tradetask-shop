export const jobs = [
  { id: 1, title: "Drywall Repair", location: "Detroit", postedBy: "employer@example.com" },
  { id: 2, title: "Painting", location: "Lansing", postedBy: "employer@example.com" },
  { id: 3, title: "Garage Cleanup", location: "Flint", postedBy: "employer2@example.com" }
];

export const vouches = [
  { from: "worker2@example.com", to: "worker1@example.com", rating: 5, comment: "Always early and skilled." },
  { from: "worker3@example.com", to: "worker1@example.com", rating: 4, comment: "Solid job on all tasks." }
];

export const reviews = [
  { worker: "worker1@example.com", employer: "employer@example.com", rating: 5, comment: "Great attitude!" }
];
export const hires = [
  {
    to: "worker1@example.com",
    from: "employer@example.com",
    title: "Window Repair",
    location: "Detroit",
    description: "Fix broken window in storefront."
  }
];
