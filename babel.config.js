module.exports = function (api) {
  api.cache(true)
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "module:react-native-dotenv",
      [
        "module-resolver",
        {
          root: ["/"],
          alias: {
            "@/assets": "./app/assets",
            "@/components": "./app/components",
            "@/hooks": "./app/hooks",
            "@/libs": "./app/libs",
            "@/navigation": "./app/navigation",
            "@/screens": "./app/screens",
          },
        },
      ],
    ],
  }
}
