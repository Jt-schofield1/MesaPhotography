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
      'Copy of leilasenior-12.png',
      'Copy of leilasenior-19.png',
      'Copy of leilasenior-30.png',
      'Copy of leilasenior-36.png',
      'Copy of leilasenior-37.png',
      'Copy of leilasenior-43.png',
      'Copy of leilasenior-46.png',
      'Copy of leilasenior-51.png',
      'Copy of leilasenior-69.png',
      'Copy of leilasenior-78.png',
      'Copy of leilasenior-79.png',
      'Copy of corajofall-21.png',
      'Copy of corajofall-26.png',
      'Copy of corajofall-26(1).png',
      'Copy of adasenior-08.png',
      'Copy of adasenior-20.png',
      'Copy of adasenior-29.png',
      'Copy of adasenior-59.png',
      'Copy of adasenior-60.png',
      'Copy of adasenior-64.png',
      'Copy of adasenior-66.png',
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
      'Copy of M&D-25.png',
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
      'Copy of M&D-81.png',
      'Copy of M&D-84.png',
      'Copy of M&D-95.png',
      'Copy of fremers-42.png',
      'Copy of savoiafamiy-07.png',
      'Copy of savoiafamiy-12.png',
      'Copy of savoiafamiy-19.png',
      'Copy of savoiafamiy-20.png',
      'Copy of savoiafamiy-21.png',
      'Copy of savoiafamiy-24.png',
      'Copy of savoiafamiy-28.png',
      'Copy of savoiafamiy-31.png',
      'Copy of savoiafamiy-33.png',
      'Copy of savoiafamiy-39.png',
      'Copy of savoiafamiy-47.png',
      'Copy of fremers-22.png',
      'Copy of fremers-33.png',
      'Copy of fremers-43.png',
      'Copy of millerfamily-32.png',
      'Copy of millerfamily-54.png',
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

