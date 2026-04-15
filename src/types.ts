export interface User {
  name: string;
  email: string;
  avatar?: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: 'Flower' | 'Outil' | 'Seeds' | 'Plants';
}

export interface Plant {
  id: string;
  name: string;
  image: string;
  status: 'Healthy' | 'Needs Water' | 'Growing';
}

export interface Post {
  id: string;
  user: {
    name: string;
    avatar: string;
  };
  timestamp: string;
  content: string;
  image?: string;
  likes: number;
  comments: number;
  isLiked?: boolean;
}