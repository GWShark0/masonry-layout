const getUrl = id => `https://source.unsplash.com/${id}`;

const ids = [
  'v_Tg-RnK7QU',
  'zoyBqT7ytLU',
  'QKfAMaH_-_U',
  'GVL-Vsjntsg',
  'k-Wa_5EmnCo',
  'PsJ9b6SbESU',
  'kqNcdZ84oac',
  'h1dKad-FhCY',
  'gKRe_sun2LA',
  '280LNBcQDS0',
  'cicqxVZgOIA',
  'NuYKNgI3ZW0',
  'H_wR3yQDJLM',
  'PXlTuz40vtY',
  'lWrD_CskDBU',
  'jlLDQgGSB-E',
  'kHdCQQ7uYh4',
  '5bv-_tIwHFk',
  'nqtkeK1_aK8',
];

export default ids.map(id => ({ id, url: getUrl(id) }));
