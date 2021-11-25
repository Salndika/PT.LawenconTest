const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src/"),
      
      "@components-navbar": path.resolve(__dirname, "src/components/Navbar"),
      "@components-task1": path.resolve(__dirname, "src/components/Task1"),
      "@components-task2": path.resolve(__dirname, "src/components/Task2"),
    },
  },
  style: {
    postcss: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
};
