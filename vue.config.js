module.exports = {
  // PWA Config
  pwa: {
    name: "VANDU",
    workboxPluginMode: "InjectManifest",
    workboxOptions: {
      swSrc: "src/service-worker.js",
    },
  },

  // CSS Config
};
