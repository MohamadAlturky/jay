import artwork1 from "@/assets/artwork-1.png";
import artwork2 from "@/assets/artwork-2.png";
import artwork3 from "@/assets/artwork-3.png";
import artwork4 from "@/assets/artwork-4.png";
import artwork5 from "@/assets/artwork-5.png";

export interface Artwork {
  id: string;
  title: string;
  slug: string;
  medium: string;
  dimensions: string;
  year: number;
  description: string;
  image: string;
}

export const artworks: Artwork[] = [
  {
    id: "1",
    title: "Grandfather's Embrace",
    slug: "grandfathers-embrace",
    medium: "Oil on canvas",
    dimensions: "60 × 90 cm",
    year: 2024,
    description: "An intimate portrait of a grandfather holding his grandchild beside a window, bathed in soft natural light. A tribute to family bonds and the quiet beauty of generational love.",
    image: artwork1,
  },
  {
    id: "3",
    title: "Mona Lisa, Reimagined",
    slug: "mona-lisa-reimagined",
    medium: "Oil on canvas",
    dimensions: "40 × 50 cm",
    year: 2023,
    description: "A personal reinterpretation of Da Vinci's masterpiece, rendered in vivid greens and golds. A study in homage and rebellion.",
    image: artwork3,
  },
  {
    id: "4",
    title: "Mia",
    slug: "mia",
    medium: "Colored pencil on paper",
    dimensions: "30 × 42 cm",
    year: 2024,
    description: "A portrait inspired by Mia Wallace — dark hair, smoke, and a contemplative stare. A nod to cinema and the romance of stillness.",
    image: artwork4,
  },
  {
    id: "2",
    title: "Child of the Rubble",
    slug: "child-of-the-rubble",
    medium: "Acrylic on canvas",
    dimensions: "70 × 100 cm",
    year: 2023,
    description: "A girl wrapped in a pink shawl sits among ruins clutching her doll. A piece born from the painter's homeland — Syria — exploring resilience, innocence, and loss.",
    image: artwork2,
  },
  {
    id: "5",
    title: "Pietà Study",
    slug: "pieta-study",
    medium: "Oil on canvas",
    dimensions: "50 × 70 cm",
    year: 2023,
    description: "A reinterpretation of Michelangelo's Pietà in warm earthen tones. An exploration of grief, devotion, and the sculptural power of light on fabric.",
    image: artwork5,
  }
];

export const getArtworkBySlug = (slug: string): Artwork | undefined => {
  return artworks.find((artwork) => artwork.slug === slug);
};
