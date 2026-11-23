interface Language {
    name: string;
    level: string;
    description: string;
    show: boolean;
}

const languages: Language[] = [
    {
        name: "Spanish",
        level: "Native",
        description: "Native speaker",
        show: true
    },
    {
        name: "English",
        level: "B2",
        description: "Professional working proficiency",
        show: true
    }
];

export default languages;
