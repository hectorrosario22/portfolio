import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "zod";

const personal = defineCollection({
  loader: glob({ pattern: "*.json", base: "./src/content/personal" }),
  schema: z.object({
    name: z.string(),
    title: z.string(),
    email: z.string(),
    location: z.string(),
    education: z.string(),
    experience: z.string(),
    interests: z.array(z.string()),
    bio: z.object({
      short: z.string(),
      long: z.string(),
    }),
    social: z.object({
      github: z.url(),
      linkedin: z.url(),
    }),
  }),
});

const workEntrySchema = z.object({
  id: z.number(),
  title: z.string(),
  company: z.string(),
  period: z.string(),
  location: z.string(),
  description: z.array(z.string()),
  technologies: z.array(z.string()),
});

const work = defineCollection({
  loader: glob({ pattern: "*.json", base: "./src/content/work" }),
  schema: z.object({
    items: z.array(workEntrySchema),
  }),
});

const education = defineCollection({
  loader: glob({ pattern: "*.json", base: "./src/content/education" }),
  schema: z.object({
    degree: z.string(),
    institution: z.string(),
    period: z.string(),
    description: z.string(),
    skills: z.array(z.string()),
  }),
});

const projectSchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
  image: z.string().nullable(),
  category: z.array(z.string()),
  technologies: z.array(z.string()),
  githubUrl: z.url().nullable(),
  demoUrl: z.url().nullable(),
});

const projects = defineCollection({
  loader: glob({ pattern: "*.json", base: "./src/content/projects" }),
  schema: z.object({
    categories: z.array(z.object({ id: z.string(), name: z.string() })),
    items: z.array(projectSchema),
  }),
});

const skillSchema = z.object({
  name: z.string(),
  icon: z.string(),
});

const skillCategorySchema = z.object({
  name: z.string(),
  icon: z.string(),
  skills: z.array(skillSchema),
});

const skills = defineCollection({
  loader: glob({ pattern: "*.json", base: "./src/content/skills" }),
  schema: z.object({
    categories: z.array(skillCategorySchema),
  }),
});

export const collections = { personal, work, education, projects, skills };
