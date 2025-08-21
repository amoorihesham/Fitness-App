import { Clock, Goal, Home, Info } from 'lucide-react';

export const navigations = [
  {
    id: 1,
    text: 'home',
    href: '/',
    Icon: Home,
  },
  {
    id: 2,
    text: 'up coming',
    href: '/up-coming',
    Icon: Clock,
  },
  {
    id: 3,
    text: 'exercises',
    href: '/exercises',
    Icon: Goal,
  },
  {
    id: 4,
    text: 'about',
    href: '/about',
    Icon: Info,
  },
];
