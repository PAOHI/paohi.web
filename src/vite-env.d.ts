/// <reference types="vite/client" />

interface RouteObject {
  path: string;
  element: React.ReactNode;
  authRequired?: boolean;
  requiredRoles?: string[];
}

interface NavItem {
  label: string;
  path?: string;
  dropdownItems?: {
    label: string;
    path: string;
  }[];
}
interface LinkItem {
  label: string;
  path: string;
}

interface FooterItem {
  resources: LinkItem[];
  quickLinks: LinkItem[];
}

interface ImageLoadState {
  [key: string]: boolean;
}

interface ImageCardProps {
  src: string;
  alt: string;
  className?: string;
  imageId: string;
  onLoad: (imageId: string) => void;
  isLoaded: boolean;
}

interface WhatWeDoCardProps {
  title: string;
  description: string;
  className: string;
  icon: React.ElementType;
  slug: string;
}
