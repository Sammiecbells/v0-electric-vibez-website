export type UpcomingEvent = {
  id: string;
  date: string;
  title: string;
  venue: string;
  location: string;
  time?: string;
  ticketUrl?: string;
  venueUrl?: string;
};

// Add, edit, or remove events here. Use YYYY-MM-DD for the date field.
export const upcomingEvents: UpcomingEvent[] = [
  {
    id: "example-1",
    date: "2026-07-18",
    title: "Live at The Local",
    venue: "The Local Pub",
    location: "Tauranga, Bay of Plenty",
    time: "8:00 PM",
    venueUrl: "https://example.com",
  },
  {
    id: "example-2",
    date: "2026-08-02",
    title: "Saturday Night Session",
    venue: "Harbour Bar",
    location: "Mount Maunganui, Bay of Plenty",
    time: "9:00 PM",
  },
];
