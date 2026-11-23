interface Education {
    title: string;
    startDate: string;
    endDate?: string;
    school: string;
    location: string;
    description: string;
    currentUni: boolean;
    type: "degree" | "certification";
    icon?: string;
    logo?: string;
    color?: string;
}

const education: Education[] = [
    {
        title: "IBM Data Engineering Professional Certificate",
        startDate: "2026-01-01",
        endDate: "",
        school: "IBM",
        location: "Online",
        description: "In progress.",
        currentUni: true,
        type: "certification",
        icon: "simple-icons:ibm",
        color: "#0F62FE",
    },
    {
        title: "BSc in Economics",
        startDate: "2016-01-01",
        endDate: "2020-11-30",
        school: "Externado University",
        location: "Bogota, Colombia",
        description: "",
        currentUni: false,
        type: "degree",
        logo: "/logos/uexternado.svg",
    },
];

export default education;
