import { Product, Plant, Post } from './types';

export const LOGO_URL = "/Gemini_Generated_Image_o2amico2amico2am-removebg-preview.png";


export const MOCK_PRODUCTS: Product[] = [
{
  id: '1',
  name: 'Monstera Deliciosa',
  price: 24.99,
  image:
  'https://i.pinimg.com/1200x/7d/6d/8a/7d6d8aecf07f07389a43b832a73881f4.jpg',
  category: 'Plants'
},
{
  id: '2',
  name: 'Gardening Trowel',
  price: 12.5,
  image:
  'https://i.pinimg.com/1200x/c2/dc/5d/c2dc5dadf40e26d165efcb08e723a222.jpg',
  category: 'Outil'
},
{
  id: '3',
  name: 'Sunflower Seeds',
  price: 4.99,
  image:
  'https://i.pinimg.com/736x/2a/95/93/2a9593ec5a091ca39439af297ecd0610.jpg',
  category: 'Seeds'
},
{
  id: '4',
  name: 'Orchid',
  price: 35.0,
  image:
  'https://i.pinimg.com/736x/dc/cc/48/dccc48e325f12c37bd0b03134246abdd.jpg',
  category: 'Flower'
},
{
  id: '5',
  name: 'Watering Can',
  price: 18.99,
  image:
  'https://i.pinimg.com/1200x/24/26/c6/2426c662483bd1669ffa0ba9212a844d.jpg',
  category: 'Outil'
},
{
  id: '6',
  name: 'Snake Plant',
  price: 20.0,
  image:
  'https://i.pinimg.com/1200x/24/d3/7a/24d37acbe66af6a2813fb788aeafe8c9.jpg',
  category: 'Plants'
}];


export const MOCK_USER_PLANTS: Plant[] = [
{
  id: '1',
  name: 'Lettuce',
  image:
  'https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?auto=format&fit=crop&q=80&w=400',
  status: 'Growing'
},
{
  id: '2',
  name: 'Tomato',
  image:
  'https://images.unsplash.com/photo-1592841200221-a6898f307baa?auto=format&fit=crop&q=80&w=400',
  status: 'Needs Water'
},
{
  id: '3',
  name: 'Basil',
  image:
  'https://images.unsplash.com/photo-1615485925600-97237c4fc1ec?auto=format&fit=crop&q=80&w=400',
  status: 'Healthy'
},
{
  id: '4',
  name: 'Mint',
  image:
  'https://i.pinimg.com/1200x/af/4e/5c/af4e5cd43b3665108b22f1316de70855.jpg',
  status: 'Healthy'
},
{
  id: '5',
  name: 'Rosemary',
  image:
  'https://i.pinimg.com/1200x/4f/2a/25/4f2a254bf11729dc388835ebc59a5880.jpg',
  status: 'Growing'
}];


export const MOCK_POSTS: Post[] = [
{
  id: '1',
  user: {
    name: 'Malika E.',
    avatar:
    'malika.jpeg'
  },
  timestamp: '2 hours ago',
  content: 'My monstera just grew a new leaf! Look at those fenestrations 😍',
  image:
  'https://i.pinimg.com/736x/2c/1e/0e/2c1e0ed3f8518e9504fdc3942ffaf782.jpg',
  likes: 24,
  comments: 5,
  isLiked: true
},
{
  id: '2',
  user: {
    name: 'Ikram L.',
    avatar:
    'ikram.jpeg'
  },
  timestamp: '5 hours ago',
  content:
  "Does anyone know what's wrong with my tomato plant? The leaves are turning yellow at the bottom.",
  likes: 12,
  comments: 8
},
{
  id: '3',
  user: {
    name: 'Sara (You)',
    avatar:
    'sara.jpeg'
  },
  timestamp: '1 day ago',
  content: 'Just harvested my first batch of basil for homemade pesto! 🌱',
  image:
  'https://i.pinimg.com/1200x/c0/a8/26/c0a826220287a69ad8b790b9fd02daac.jpg',
  likes: 45,
  comments: 12
}];