module.exports = {
  name: 'KansasCosmos', // optional, falls back to object key
  description: 'Kansas Cosmos',
  // skip if localhost
  // skip if this is a new fork of the speedlify (not Zach’s)
  skip: false,
  options: {
    frequency: 60 * 23, // 23 hours
    // Use "run" if the sites don’t share assets on the same origin
    //           and we can reset chrome with each run instead of
    //           each site in every run (it’s faster)
    // Use "site" if sites are all on the same origin and share assets.
    freshChrome: 'site',
  },
  urls: [
    'https://www.kansascosmos.org/',
    'https://www.kansascosmos.org/planet/sun',
    'https://www.kansascosmos.org/kansas-stars/',
    'https://www.kansascosmos.org/sources/',
    'https://www.kansascosmos.org/project-info/',
  ],
};
