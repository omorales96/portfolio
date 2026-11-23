interface HardSkill {
  name: string;
  description: string;
  icon: string;
  color?: string;
}

const hardSkills: HardSkill[] = [
  {
    name: "Power BI",
    description: "Executive dashboards with DAX measures and scheduled Gateway refresh",
    icon: "simple-icons:powerbi",
    color: "#F2C811"
  },
  {
    name: "Excel",
    description: "Power Query and ODBC connections to Snowflake and SQL Server for dashboards",
    icon: "simple-icons:microsoftexcel",
    color: "#217346"
  },
  {
    name: "Snowflake",
    description: "Querying data for reporting and analytics",
    icon: "simple-icons:snowflake",
    color: "#29B5E8"
  },
  {
    name: "Microsoft SQL Server",
    description: "SQL queries for reporting and data preparation",
    icon: "simple-icons:microsoftsqlserver",
    color: "#CC2927"
  },
  {
    name: "KNIME",
    description: "Pipelines integrating Snowflake, SQL Server and CSV/TXT sources",
    icon: "simple-icons:knime",
    color: "#FDD60C"
  },
  {
    name: "Python",
    description: "Data preparation and automation",
    icon: "simple-icons:python",
    color: "#3776AB"
  },
  {
    name: "R",
    description: "Data analysis with R Studio",
    icon: "simple-icons:r",
    color: "#276DC3"
  },
  {
    name: "Power Automate",
    description: "Flows connecting OneDrive, Excel and Power BI for automated report delivery",
    icon: "simple-icons:powerautomate",
    color: "#0066FF"
  },
  {
    name: "Claude Code",
    description: "AI-assisted development for building data projects and automating workflows",
    icon: "simple-icons:claudecode",
    color: "#D97757"
  }
];

export default hardSkills;
