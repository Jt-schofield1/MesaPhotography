export interface Collection {
  id: string;
  title: string;
  description: string;
  cover: string;
  images: string[];
}

export const collections: Record<string, Collection> = {
  seniors: {
    id: 'seniors',
    title: 'Seniors',
    description: 'Celebrating your milestone with timeless portraits',
    cover: '/portfolio/seniors/ElisaGrad-046.jpg',
    images: [
      'ElisaGrad-046.jpg',
      'ElisaGrad-051.jpg',
      'ElisaGrad-055 (1).jpg',
      'ElisaGrad-057 (2).jpg',
      'ElisaGrad-058.jpg',
      'ElisaGrad-061 (2).jpg',
      'ElisaGrad-112.jpg',
      'ElisaGrad-117 (1).jpg',
      'ElisaGrad-120 (2).jpg',
      'ElisaGrad-124 (2).jpg',
    ],
  },
  couples: {
    id: 'couples',
    title: 'Couples',
    description: 'Capturing the love between you two',
    cover: '/portfolio/couples/Copy of T&J - 9_7-115.jpg',
    images: [
      'Copy of T&J - 9_7-115.jpg',
      'Copy of T&J - 9_7-129.jpg',
      'Copy of T&J - 9_7-162.jpg',
      'Copy of T&J - 9_7-172.jpg',
      'Copy of T&J - 9_7-173.jpg',
      'Copy of T&J - 9_7-177.jpg',
      'Copy of T&J - 9_7-61.jpg',
      'Copy of T&J - 9_7-73.jpg',
      'Copy of T&J - 9_7-90.jpg',
    ],
  },
  families: {
    id: 'families',
    title: 'Families',
    description: 'Preserving your family memories',
    cover: '/portfolio/families/Copy of M&D-39.png',
    images: [
      'Copy of M&D-39.png',
      'Copy of M&D-59.png',
      'Copy of M&D-60.png',
      'Copy of M&D-61.png',
      'Copy of M&D-62.png',
      'Copy of M&D-63.png',
      'Copy of M&D-64.png',
      'Copy of M&D-65.png',
      'Copy of M&D-66.png',
      'Copy of M&D-67.png',
      'Copy of M&D-68.png',
      'Copy of M&D-69.png',
      'Copy of M&D-70.png',
      'Copy of M&D-80.png',
      'Copy of M&D-95.png',
      'Copy of fremers-42.png',
    ],
  },
  minis: {
    id: 'minis',
    title: 'Minis',
    description: 'Quick sessions, beautiful results',
    cover: '/portfolio/minis/Copy of M&D-62.png',
    images: [
      'Copy of M&D-62.png',
      'Copy of M&D-64.png',
      'Copy of M&D-66.png',
    ],
  },
};

export function getCollection(id: string): Collection | undefined {
  return collections[id];
}

export function getAllCollections(): Collection[] {
  return Object.values(collections);
}

