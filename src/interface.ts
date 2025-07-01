export interface Section {
    Experience: boolean;
    Education: boolean;
    Skills: boolean;
    AboutMe: boolean;
}

export interface SectionStore {
    sections: Section;
}

export interface ExperienceValueState {
    id: string;
    company: string;
    periodWith: string;
    periodFor: string;
    post: string;
    description: string;
}

export interface EducationValueState {
    id: string;
    institution: string;
    specialization: string;
    periodWith: string;
    periodFor: string;
}

export interface SkillsValueState {
    id: string;
    skills: string[];
}

export interface AboutMeState {
    id: string;
    about: string;
}

export type Data = ExperienceValueState | AboutMeState | SkillsValueState | EducationValueState

export interface DataSectionsProps {
    data: Data[];
}

export interface DataSectionsStore {
    data: DataSectionsProps;
}
