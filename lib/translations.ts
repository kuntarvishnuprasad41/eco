import { promises as fs } from "fs";
import path from "path";

export interface Translations {
  navbar: {
    home: string;
    about: string;
    services: string;
    projects: string;
    contact: string;
    language: string;
  };
  aboutPage: {
    hero: {
      title: string;
      subtitle: string;
      description: string;
    };
    whoWeAre: {
      title: string;
      paragraphs: string[];
    };
    founder: {
      title: string;
      message: string;
      signature: string;
    };
    philosophy: {
      title: string;
      subtitle: string;
      values: { title: string; description: string }[];
    };
    mission: {
      title: string;
      description: string;
    };
    vision: {
      title: string;
      description: string;
    };
    partner: {
      title: string;
      description: string;
      uniqueTitle: string;
      uniquePoints: string[];
      stats: string;
    };
    contact: {
      title: string;
      subtitle: string;
      email: string;
      altEmail: string;
      phone: string;
      address: string;
      formTitle: string;
      form: {
        name: string;
        email: string;
        message: string;
        submit: string;
      };
    };
  };
  portfolioSection: {
    title: string;
    subtitle: string;
    button: string;
    properties: {
      id: number;
      title: string;
      location: string;
      image: string;
      area: string;
      completion: string;
      sustainability: string;
      energySavings: string;
    }[];
  };
  testimonials: {
    title: string;
    highlight: string;
    reviews: {
      id: number;
      name: string;
      role: string;
      content: string;
      rating: number;
    }[];
  };
  hero: {
    title: string;
    subtitle: string;
    button: string;
    highlight: string;
  };
  about: {
    title: string;
    highlight: string;
    description: string;
  };

  services: {
    title: string;
    list: string[];
  };
  contact: {
    title: string;
    subtitle: string;
    form: {
      name: string;
      email: string;
      message: string;
      submit: string;
    };
  };
}

export async function getTranslations(locale: string): Promise<Translations> {
  try {
    const filePath = path.join(
      process.cwd(),
      "public",
      "locales",
      locale,
      "data.json"
    );
    const fileContents = await fs.readFile(filePath, "utf8");
    return JSON.parse(fileContents);
  } catch (error) {
    console.error(`Error loading translations for locale ${locale}:`, error);
    // Fallback to English
    const fallbackPath = path.join(
      process.cwd(),
      "public",
      "locales",
      "en",
      "data.json"
    );
    const fallbackContents = await fs.readFile(fallbackPath, "utf8");
    return JSON.parse(fallbackContents);
  }
}
