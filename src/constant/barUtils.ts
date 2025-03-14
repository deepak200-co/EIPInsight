import { ChartOptions } from "chart.js";

export const barData = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
        {
            label: "Final",
            data: [14, 22, 18, 20, 12],
            backgroundColor: "rgba(34, 197, 94, 0.6)", 
            borderColor: "rgba(34, 197, 94, 1)",
            borderWidth: 1,
            borderRadius: 10,
        },
        {
            label: "Living",
            data: [10, 18, 22, 15, 14],
            backgroundColor: "rgba(59, 130, 246, 0.6)", 
            borderColor: "rgba(59, 130, 246, 1)",
            borderWidth: 1,
            borderRadius: 10,
        },
        {
            label: "Withdrawn",
            data: [7, 12, 16, 22, 28],
            backgroundColor: "rgba(244, 63, 94, 0.6)",  
            borderColor: "rgba(244, 63, 94, 1)",
            borderWidth: 1,
            borderRadius: 10,
        },
        {
            label: "Stagnant",
            data: [9, 11, 15, 17, 19],
            backgroundColor: "rgba(234, 179, 8, 0.6)",  
            borderColor: "rgba(234, 179, 8, 1)",
            borderWidth: 1,
            borderRadius: 10,
        },
    ],
};


export const barOptions: ChartOptions<"bar"> = {
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    legend: {
      position: "top", // Ensure this is a valid value: "top" | "bottom" | "left" | "right"
    },
  },
  scales: {
    x: {
      stacked: true,
      grid: { color: "#e0e0e0" },
    },
    y: {
      stacked: true,
      beginAtZero: true,
      grid: { color: "#e0e0e0" },
    },
  },
};

export const barCardData = [
    {
        heading: "Draft",
        tag: 220,
        description: "Draft EIPs are proposals still under initial consideration and open for feedback.",
        data: barData,
        options: barOptions
    },
    {
        heading: "Review",
        tag: 50,
        description: "EIPs in the Review stage are being actively discussed and evaluated by the community.",
        data: barData,
        options: barOptions
    },
    {
        heading: "Last Call",
        tag: 30,
        description: "Last Call EIPs are nearing finalization, with a short period for final community comments.",
        data: barData,
        options: barOptions
    },
    {
        heading: "Final",
        tag: 20,
        description: "Final EIPs have been formally accepted and implemented as part of the Ethereum protocol.",
        data: barData,
        options: barOptions
    },
    {
        heading: "Withdrawn",
        tag: 55,
        description: "Withdrawn EIPs have been removed from consideration by the author or due to lack of support.",
        data: barData,
        options: barOptions
    },
    {
        heading: "Stagnant",
        tag: 15,
        description: "Stagnant EIPs are inactive and have not progressed for a prolonged period.",
        data: barData,
        options: barOptions
    }
];
