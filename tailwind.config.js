/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                catskill_White: "#EDF1F7",
                white: "#FFFFFF",
                black_haze_100: "#F8F9F9",
                gray: "#828282",
                black_haze_200: "#FAFBFB",
                iron: "#DCDDE0",
                alizarin_crimson: "#E82E1E",
                shark: "#27292A",
                woodsmoke: "#0D0F11",
            },
        },
        fontSize: {
            14: ["14px", "22px"],
            16: ["16px", "24px"],
            18: ["18px", "26px"],
            24: ["24px", "32px"],
        },
    },
    plugins: [],
};
