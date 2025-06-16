export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  description: string;
  image: string;
  features: Feature[];
  screenshots: Screenshot[];
  packageFeatures?: PackageFeature[];
  packages: Package[];
}

export interface Screenshot {
  id: number;
  title: string;
  description: string;
  image?: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface Package {
  name: string;
  features: PackageFeature[];
}

export interface PackageFeature {
  name: string;
  description: string;
  basic: boolean | string;
  enterprise: boolean | string;
}

export interface DemoRequest {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message?: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  address: string;
  socialLinks: {
    facebook: string;
    twitter: string;
    linkedin: string;
    instagram: string;
  };
}

export interface SMTPConfig {
  host: string;
  port: number;
  secure: boolean;
  user: string;
  pass: string;
  from: string;
}