module.exports = {
  plugins: [
    require("tailwindcss"),
    process.env.NODE_ENV === "production" &&
    require("@fullhuman/postcss-purgecss")({
      content: ["./src/**/*.vue"],
      defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
    }),
  ],
};
