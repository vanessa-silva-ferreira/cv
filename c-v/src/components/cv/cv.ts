import cvData from "./cv.yml";

export type SubExperienceDescription = { text: string; alt?: string };
export type SubExperience = {
  role: string;
  begin?: Date;
  end?: Date;
  text?: string;
  descriptions?: SubExperienceDescription[];
};
export type Experience = {
  postTitle?: string;
  title: string;
  description?: string[];
  details: SubExperience[];
};
export type Skills = { [key: string]: string[] };
export type Myself = {
  name: string;
  title: string;
  skills: Skills;
  birthDate: Date;
  location: string;
  phone: string;
  lastUpdate: Date;
  email: string;
  github: string;
  professionExperience: Experience[];
  academicExperience: Experience[];
};

export const cv: Myself = cvData;
