import { promises as fs } from 'fs'
import path from 'path'

export interface Translations {
  navbar: {
    home: string
    about: string
    services: string
    projects: string
    contact: string
    language: string
  }
  hero: {
    title: string
    subtitle: string
  }
  about: {
    title: string
    description: string
  }
  services: {
    title: string
    list: string[]
  }
  contact: {
    title: string
    subtitle: string
    form: {
      name: string
      email: string
      message: string
      submit: string
    }
  }
}

export async function getTranslations(locale: string): Promise<Translations> {
  try {
    const filePath = path.join(process.cwd(), 'public', 'locales', locale, 'data.json')
    const fileContents = await fs.readFile(filePath, 'utf8')
    return JSON.parse(fileContents)
  } catch (error) {
    console.error(`Error loading translations for locale ${locale}:`, error)
    // Fallback to English
    const fallbackPath = path.join(process.cwd(), 'public', 'locales', 'en', 'data.json')
    const fallbackContents = await fs.readFile(fallbackPath, 'utf8')
    return JSON.parse(fallbackContents)
  }
}
