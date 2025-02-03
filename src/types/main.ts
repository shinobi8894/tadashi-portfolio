// Define interfaces for data structures
export interface ProjectComplete {
    title: string;
    value: number;
    completedProjects: string;
    description: string;
    strokeColor: string;
}

export interface TotalFollowers {
    title: string;
    followers: string;
    imageSrc: string;
    imageAlt: string;
}

export interface PersonalInfo {
    fullName: string;
    headline: Array<string>;
}

export interface Experience {
    years: number;
    label: string;
}

export interface Skills {
    count: number;
}

export interface Testimonial {
    title: string;
    imageSrc: string;
    imageAlt: string;
}

export interface ContactInfo {
    src: string;
    alt: string;
    link : string;
}

export interface ProjectDrawer {
    onClose : () => void;
    handlePrev : () => void;
    currentIndex : number;
    handleNext : () => void;
}

export interface ProjectDrawerBody {
    currentIndex : number;
}


// Define a type for the skill
export interface Skill {
    src: string;
    years: string;
}