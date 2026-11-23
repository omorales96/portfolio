interface WorkExperience {
    title: string;
    startDate: string;
    endDate?: string;
    company: string;
    location: string;
    description: string;
    goals: string[];
    currentJob: boolean;
}

const workExperience: WorkExperience[] = [
    {
        title: "Data Analyst",
        startDate: "2023-02-01",
        endDate: "2026-11-01",
        company: "Solvo Global (Client: AD Healthcare)",
        location: "Bogota, Colombia",
        description: "Data Analyst building Power BI dashboards, SQL queries and data pipelines for healthcare operations leaders.",
        goals: [
            "Developed 15+ financial, operational and volume Power BI dashboards with DAX measures for 10-15 directors and chiefs, focusing on financial performance tracking and executive decision support.",
            "Partnered directly with the AVP of Operations Performance to gather business requirements, define reporting logic and translate operational requests into SQL queries and dashboards.",
            "Built 15+ KNIME and Python data preparation workflows to query and unify Snowflake, Microsoft SQL Server and CSV/TXT sources, filtering 1M+ row tables into clean analytical datasets.",
            "Automated the daily hospital operations report end to end by optimizing dashboard visuals, scheduling Power BI Gateway refreshes, and configuring Power Automate email and CSV distribution flows, eliminating manual refresh and PDF export steps.",
            "Built Excel dashboards using Power Query and ODBC connections to Snowflake and SQL Server, replicating Power BI reports in Excel and converting Excel reports into Power BI to fit different stakeholder needs.",
        ],
        currentJob: false,
    },
    {
        title: "Business Analytics",
        startDate: "2021-12-01",
        endDate: "2023-02-01",
        company: "GomezLee Marketing (Clients: Whirlpool, Xiaomi)",
        location: "Bogota, Colombia",
        description: "Reporting and dashboards for Whirlpool and Xiaomi, working from Bogota for several Central American and Caribbean markets.",
        goals: [
            "Developed and automated SQL- and Excel-based reporting processes across multiple Central American and Caribbean markets.",
            "Built and maintained Power BI and Looker Studio dashboards that translated historical sales and operations data into KPI insights, enabling operations managers to track team performance and task completion.",
            "Supported regional teams across Nicaragua, Puerto Rico, Panama, Jamaica, Trinidad and Tobago, and El Salvador in interpreting sales and operational metrics to guide business decisions.",
        ],
        currentJob: false,
    },
];
export default workExperience;
