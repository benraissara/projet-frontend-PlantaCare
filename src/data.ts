import { Product, Plant, Post } from './types';

export const LOGO_URL = "/Gemini_Generated_Image_o2amico2amico2am-removebg-preview.png";


export const MOCK_PRODUCTS: Product[] = [
{
  id: '1',
  name: 'Monstera Deliciosa',
  price: 24.99,
  image:
  'https://images.unsplash.com/photo-1614594975525-e45190c55d40?auto=format&fit=crop&q=80&w=400',
  category: 'Plants'
},
{
  id: '2',
  name: 'Gardening Trowel',
  price: 12.5,
  image:
  'https://images.unsplash.com/photo-1416879598556-3346f5b15114?auto=format&fit=crop&q=80&w=400',
  category: 'Outil'
},
{
  id: '3',
  name: 'Sunflower Seeds',
  price: 4.99,
  image:
  'https://images.unsplash.com/photo-1599008985175-104992b8d0c2?auto=format&fit=crop&q=80&w=400',
  category: 'Seeds'
},
{
  id: '4',
  name: 'Orchid',
  price: 35.0,
  image:
  'https://images.unsplash.com/photo-1512238701577-f181d9e05eb2?auto=format&fit=crop&q=80&w=400',
  category: 'Flower'
},
{
  id: '5',
  name: 'Watering Can',
  price: 18.99,
  image:
  'https://images.unsplash.com/photo-1592424042853-625ee3133606?auto=format&fit=crop&q=80&w=400',
  category: 'Outil'
},
{
  id: '6',
  name: 'Snake Plant',
  price: 20.0,
  image:
  'https://images.unsplash.com/photo-1593482892290-f54927ae1b7e?auto=format&fit=crop&q=80&w=400',
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
  'https://images.unsplash.com/photo-1628556291632-110196884144?auto=format&fit=crop&q=80&w=400',
  status: 'Healthy'
},
{
  id: '5',
  name: 'Rosemary',
  image:
  'https://images.unsplash.com/photo-1595958567119-1583348633e2?auto=format&fit=crop&q=80&w=400',
  status: 'Growing'
}];


export const MOCK_POSTS: Post[] = [
{
  id: '1',
  user: {
    name: 'Emma W.',
    avatar:
    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150'
  },
  timestamp: '2 hours ago',
  content: 'My monstera just grew a new leaf! Look at those fenestrations 😍',
  image:
  'https://images.unsplash.com/photo-1614594975525-e45190c55d40?auto=format&fit=crop&q=80&w=600',
  likes: 24,
  comments: 5,
  isLiked: true
},
{
  id: '2',
  user: {
    name: 'James T.',
    avatar:
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150'
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
    name: 'Sarah (You)',
    avatar:
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150'
  },
  timestamp: '1 day ago',
  content: 'Just harvested my first batch of basil for homemade pesto! 🌱',
  image:
  'https://images.unsplash.com/photo-1615485925600-97237c4fc1ec?auto=format&fit=crop&q=80&w=600',
  likes: 45,
  comments: 12
}];