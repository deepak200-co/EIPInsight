import { TooltipItem } from "chart.js";

export const doughnutData = {
    labels: ["Research", "Development", "Marketing", "Operations", "HR"],
    datasets: [
        {
            label: "Budget Allocation",
            data: [1400, 2700, 900, 1800, 600],
            backgroundColor: [
                "rgba(255, 99, 132, 0.7)",   
                "rgba(54, 162, 235, 0.7)",   
                "rgba(255, 206, 86, 0.7)",   
                "rgba(75, 192, 192, 0.7)",   
                "rgba(153, 102, 255, 0.7)",  
            ],
            borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
            ],
            borderWidth: 2,
            hoverOffset: 12,
        },
    ],
};

export const doughnutOptions = {
    responsive: true,
    plugins: {
        legend: {
            labels: {
                color: "#2D3748",
                font: {
                    size: 14,
                    family: "Inter, sans-serif",
                },
            },
        },
        tooltip: {
            callbacks: {
                label: function (tooltipItem: TooltipItem<'doughnut'>) {
                    const value = tooltipItem.raw as number;
                    return `${tooltipItem.label}: ${value.toLocaleString()} USD`;
                },
            },
        },
    },
};
