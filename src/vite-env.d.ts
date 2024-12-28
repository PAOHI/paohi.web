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

interface CardType {
  title: string;
  description: string | JSX.Element;
  className?: string;
}

interface TeamMemberType {
  image: string;
  name: string;
  role: string;
}

// Types and Interfaces
interface FormData {
  name: string;
  email: string;
  phone: string;
  profession: string;
  interest: string;
  message: string;
}

// Component Props (if needed to make the component more reusable)
interface GetInvolvedProps {
  onSubmitSuccess?: (data: FormData) => void;
  initialValues?: Partial<FormData>;
}
