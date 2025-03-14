import { theme } from "@chakra-ui/react";

const colorPalette = [
    theme.colors.green[300],  
    theme.colors.orange[400], 
    theme.colors.purple[400], 
];

const createGradient = (ctx: CanvasRenderingContext2D, color: string) => {
    const gradient = ctx.createLinearGradient(0, 50, 0, 350);
    gradient.addColorStop(0, color);
    gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
    return gradient;
};

const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
        {
            label: "Final",
            data: [20, 85, 60, 110, 130],
            borderColor: colorPalette[2],
            backgroundColor: (ctx: { chart: { ctx: CanvasRenderingContext2D } }) => 
                createGradient(ctx.chart.ctx, colorPalette[2]),
            fill: true,
            tension: 0.3,
        },
        {
            label: "Draft",
            data: [40, 120, 140, 150, 230],
            borderColor: colorPalette[1],
            backgroundColor: (ctx: { chart: { ctx: CanvasRenderingContext2D } }) => 
                createGradient(ctx.chart.ctx, colorPalette[1]),
            fill: true,
            tension: 0.3,
        },
        {
            label: "Living",
            data: [90, 130, 170, 190, 300],
            borderColor: colorPalette[0],
            backgroundColor: (ctx: { chart: { ctx: CanvasRenderingContext2D } }) => 
                createGradient(ctx.chart.ctx, colorPalette[0]),
            fill: true,
            tension: 0.3,
        },
    ],
};

const lineOptions = {
    responsive: true,
    interaction: {
        intersect: false,
    },
    scales: {
        x: {
            grid: {
                display: false,
            },
        },
        y: {
            stacked: false,
            beginAtZero: true,
            grid: {
                color: "rgba(150, 150, 150, 0.2)",
            },
        },
    },
};

export const lineCardData = [
    {
        heading: "Project Phases",
        tag: 42,
        description: "Tracking project progress from initiation to completion.",
        data: lineData,
        options: lineOptions
    },
    {
        heading: "User Engagement",
        tag: 58,
        description: "Analyzing user activity and retention over time.",
        data: lineData,
        options: lineOptions
    },
    {
        heading: "Revenue Growth",
        tag: 33,
        description: "Monthly revenue trends for business insights.",
        data: lineData,
        options: lineOptions
    },
    {
        heading: "Feature Adoption",
        tag: 127,
        description: "Monitoring how new features are being utilized.",
        data: lineData,
        options: lineOptions
    },
    {
        heading: "System Performance",
        tag: 19,
        description: "Tracking the efficiency and performance of core systems.",
        data: lineData,
        options: lineOptions
    },
    {
        heading: "Security Incidents",
        tag: 9,
        description: "Logging and analyzing security threats and responses.",
        data: lineData,
        options: lineOptions
    }
];
