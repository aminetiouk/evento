export type TEvents = {
  city: string;
  date: Date;
  description: string;
  id: number;
  imageUrl: string;
  location: string;
  name: string;
  organizerName: string;
  slug: string;
}

export type TEvent = {
  id: number;
  name: string;
  slug: string;
  city: string;
  date: Date;
  description: string;
  imageUrl: string;
  location: string;
  organizerName: string;
}