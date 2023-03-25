const colors = [
  { name: "Black", value: "black" },
  { name: "Blue", value: "blue" },
  { name: "Red", value: "red" },
  { name: "White", value: "white" },
  { name: "Fwb Blue Primary 90", value: "fwbBluePrimary90" },
  { name: "Fwb Blue Primary 80", value: "fwbBluePrimary80" },
  { name: "Fwb Blue Primary 70", value: "fwbBluePrimary70" },
  { name: "Fwb Blue Primary 60", value: "fwbBluePrimary60" },
  { name: "Fwb Blue Primary 50", value: "fwbBluePrimary50" },
  { name: "Fwb Blue Primary 40", value: "fwbBluePrimary40" },
  { name: "Fwb Blue Primary 30", value: "fwbBluePrimary30" },
  { name: "Fwb Blue Primary 20", value: "fwbBluePrimary20" },
  { name: "Fwb Blue Primary 10", value: "fwbBluePrimary10" },
  { name: "Fwb Blue Primary 5", value: "fwbBluePrimary5" },
  { name: "Fwb Gray Primary 90", value: "fwbGrayPrimary90" },
  { name: "Fwb Gray Primary 80", value: "fwbGrayPrimary80" },
  { name: "Fwb Gray Primary 70", value: "fwbGrayPrimary70" },
  { name: "Fwb Gray Primary 60", value: "fwbGrayPrimary60" },
  { name: "Fwb Gray Primary 50", value: "fwbGrayPrimary50" },
  { name: "Fwb Gray Primary 40", value: "fwbGrayPrimary40" },
  { name: "Fwb Gray Primary 30", value: "fwbGrayPrimary30" },
  { name: "Fwb Gray Primary 20", value: "fwbGrayPrimary20" },
  { name: "Fwb Gray Primary 10", value: "fwbGrayPrimary10" },
  { name: "Fwb Gray Primary 5", value: "fwbGrayPrimary5" },
  { name: "Fwb Red Primary 90", value: "fwbRedPrimary90" },
  { name: "Fwb Red Primary 80", value: "fwbRedPrimary80" },
  { name: "Fwb Red Primary 70", value: "fwbRedPrimary70" },
  { name: "Fwb Red Primary 60", value: "fwbRedPrimary60" },
  { name: "Fwb Red Primary 50", value: "fwbRedPrimary50" },
  { name: "Fwb Red Primary 40", value: "fwbRedPrimary40" },
  { name: "Fwb Red Primary 30", value: "fwbRedPrimary30" },
  { name: "Fwb Red Primary 20", value: "fwbRedPrimary20" },
  { name: "Fwb Red Primary 10", value: "fwbRedPrimary10" },
  { name: "Fwb Red Primary 5", value: "fwbRedPrimary5" },
  { name: "Fwb Orange Primary 90", value: "fwbOrangePrimary90" },
  { name: "Fwb Orange Primary 80", value: "fwbOrangePrimary80" },
  { name: "Fwb Orange Primary 70", value: "fwbOrangePrimary70" },
  { name: "Fwb Orange Primary 60", value: "fwbOrangePrimary60" },
  { name: "Fwb Orange Primary 50", value: "fwbOrangePrimary50" },
  { name: "Fwb Orange Primary 40", value: "fwbOrangePrimary40" },
  { name: "Fwb Orange Primary 30", value: "fwbOrangePrimary30" },
  { name: "Fwb Orange Primary 20", value: "fwbOrangePrimary20" },
  { name: "Fwb Orange Primary 10", value: "fwbOrangePrimary10" },
  { name: "Fwb Orange Primary 5", value: "fwbOrangePrimary5" },
  { name: "Fwb Yellow Primary 90", value: "fwbYellowPrimary90" },
  { name: "Fwb Yellow Primary 80", value: "fwbYellowPrimary80" },
  { name: "Fwb Yellow Primary 70", value: "fwbYellowPrimary70" },
  { name: "Fwb Yellow Primary 60", value: "fwbYellowPrimary60" },
  { name: "Fwb Yellow Primary 50", value: "fwbYellowPrimary50" },
  { name: "Fwb Yellow Primary 40", value: "fwbYellowPrimary40" },
  { name: "Fwb Yellow Primary 30", value: "fwbYellowPrimary30" },
  { name: "Fwb Yellow Primary 20", value: "fwbYellowPrimary20" },
  { name: "Fwb Yellow Primary 10", value: "fwbYellowPrimary10" },
  { name: "Fwb Yellow Primary 5", value: "fwbYellowPrimary5" },
  { name: "Fwb Green Primary 90", value: "fwbGreenPrimary90" },
  { name: "Fwb Green Primary 80", value: "fwbGreenPrimary80" },
  { name: "Fwb Green Primary 70", value: "fwbGreenPrimary70" },
  { name: "Fwb Green Primary 60", value: "fwbGreenPrimary60" },
  { name: "Fwb Green Primary 50", value: "fwbGreenPrimary50" },
  { name: "Fwb Green Primary 40", value: "fwbGreenPrimary40" },
  { name: "Fwb Green Primary 30", value: "fwbGreenPrimary30" },
  { name: "Fwb Green Primary 20", value: "fwbGreenPrimary20" },
  { name: "Fwb Green Primary 10", value: "fwbGreenPrimary10" },
  { name: "Fwb Green Primary 5", value: "fwbGreenPrimary5" },
  { name: "Fwb Teal Primary 90", value: "fwbTealPrimary90" },
  { name: "Fwb Teal Primary 80", value: "fwbTealPrimary80" },
  { name: "Fwb Teal Primary 70", value: "fwbTealPrimary70" },
  { name: "Fwb Teal Primary 60", value: "fwbTealPrimary60" },
  { name: "Fwb Teal Primary 50", value: "fwbTealPrimary50" },
  { name: "Fwb Teal Primary 40", value: "fwbTealPrimary40" },
  { name: "Fwb Teal Primary 30", value: "fwbTealPrimary30" },
  { name: "Fwb Teal Primary 20", value: "fwbTealPrimary20" },
  { name: "Fwb Teal Primary 10", value: "fwbTealPrimary10" },
  { name: "Fwb Teal Primary 5", value: "fwbTealPrimary5" },
  { name: "Fwb Indigo Primary 90", value: "fwbIndigoPrimary90" },
  { name: "Fwb Indigo Primary 80", value: "fwbIndigoPrimary80" },
  { name: "Fwb Indigo Primary 70", value: "fwbIndigoPrimary70" },
  { name: "Fwb Indigo Primary 60", value: "fwbIndigoPrimary60" },
  { name: "Fwb Indigo Primary 50", value: "fwbIndigoPrimary50" },
  { name: "Fwb Indigo Primary 40", value: "fwbIndigoPrimary40" },
  { name: "Fwb Indigo Primary 30", value: "fwbIndigoPrimary30" },
  { name: "Fwb Indigo Primary 20", value: "fwbIndigoPrimary20" },
  { name: "Fwb Indigo Primary 10", value: "fwbIndigoPrimary10" },
  { name: "Fwb Indigo Primary 5", value: "fwbIndigoPrimary5" },
  { name: "Fwb Purple Primary 90", value: "fwbPurplePrimary90" },
  { name: "Fwb Purple Primary 80", value: "fwbPurplePrimary80" },
  { name: "Fwb Purple Primary 70", value: "fwbPurplePrimary70" },
  { name: "Fwb Purple Primary 60", value: "fwbPurplePrimary60" },
  { name: "Fwb Purple Primary 50", value: "fwbPurplePrimary50" },
  { name: "Fwb Purple Primary 40", value: "fwbPurplePrimary40" },
  { name: "Fwb Purple Primary 30", value: "fwbPurplePrimary30" },
  { name: "Fwb Purple Primary 20", value: "fwbPurplePrimary20" },
  { name: "Fwb Purple Primary 10", value: "fwbPurplePrimary10" },
  { name: "Fwb Purple Primary 5", value: "fwbPurplePrimary5" },
  { name: "Fwb Pink Primary 90", value: "fwbPinkPrimary90" },
  { name: "Fwb Pink Primary 80", value: "fwbPinkPrimary80" },
  { name: "Fwb Pink Primary 70", value: "fwbPinkPrimary70" },
  { name: "Fwb Pink Primary 60", value: "fwbPinkPrimary60" },
  { name: "Fwb Pink Primary 50", value: "fwbPinkPrimary50" },
  { name: "Fwb Pink Primary 40", value: "fwbPinkPrimary40" },
  { name: "Fwb Pink Primary 30", value: "fwbPinkPrimary30" },
  { name: "Fwb Pink Primary 20", value: "fwbPinkPrimary20" },
  { name: "Fwb Pink Primary 10", value: "fwbPinkPrimary10" },
  { name: "Fwb Pink Primary 5", value: "fwbPinkPrimary5" },
  { name: "Max Purple Primary 120", value: "maxPrimaryPurple120" },
  { name: "Max Purple Primary 100", value: "maxPrimaryPurple100" },
  { name: "Max Purple Primary 80", value: "maxPrimaryPurple80" },
  { name: "Max Purple Primary 60", value: "maxPrimaryPurple60" },
  { name: "Max Purple Primary 40", value: "maxPrimaryPurple40" },
  { name: "Max Purple Primary 20", value: "maxPrimaryPurple20" },
  { name: "Max Blue Secondary 120", value: "maxSecondaryBlue120" },
  { name: "Max Blue Secondary 100", value: "maxSecondaryBlue100" },
  { name: "Max Blue Secondary 80", value: "maxSecondaryBlue80" },
  { name: "Max Blue Secondary 60", value: "maxSecondaryBlue60" },
  { name: "Max Blue Secondary 40", value: "maxSecondaryBlue40" },
  { name: "Max Blue Secondary 20", value: "maxSecondaryBlue20" },
  { name: "Max Blue Tertiary 120", value: "maxTertiaryBlue120" },
  { name: "Max Blue Tertiary 100", value: "maxTertiaryBlue100" },
  { name: "Max Blue Tertiary 80", value: "maxTertiaryBlue80" },
  { name: "Max Blue Tertiary 60", value: "maxTertiaryBlue60" },
  { name: "Max Blue Tertiary 40", value: "maxTertiaryBlue40" },
  { name: "Max Blue Tertiary 20", value: "maxTertiaryBlue20" },
  { name: "Max Dark Blue Primary 120", value: "maxPrimaryDarkBlue120" },
  { name: "Max Dark Blue Primary 100", value: "maxPrimaryDarkBlue100" },
  { name: "Max Dark Blue Primary 80", value: "maxPrimaryDarkBlue80" },
  { name: "Max Dark Blue Primary 60", value: "maxPrimaryDarkBlue60" },
  { name: "Max Dark Blue Primary 40", value: "maxPrimaryDarkBlue40" },
  { name: "Max Dark Blue Primary 20", value: "maxPrimaryDarkBlue20" },
  { name: "Max Success 120", value: "maxSuccess120" },
  { name: "Max Success 100", value: "maxSuccess100" },
  { name: "Max Success 80", value: "maxSuccess80" },
  { name: "Max Success 60", value: "maxSuccess60" },
  { name: "Max Success 40", value: "maxSuccess40" },
  { name: "Max Success 20", value: "maxSuccess20" },
  { name: "Max Warning 120", value: "maxWarning120" },
  { name: "Max Warning 100", value: "maxWarning100" },
  { name: "Max Warning 80", value: "maxWarning80" },
  { name: "Max Warning 60", value: "maxWarning60" },
  { name: "Max Warning 40", value: "maxWarning40" },
  { name: "Max Warning 20", value: "maxWarning20" },
  { name: "Max Error 120", value: "maxError120" },
  { name: "Max Error 100", value: "maxError100" },
  { name: "Max Error 80", value: "maxError80" },
  { name: "Max Error 60", value: "maxError60" },
  { name: "Max Error 40", value: "maxError40" },
  { name: "Max Error 20", value: "maxError20" },
  { name: "Max Text 120", value: "maxText120" },
  { name: "Max Text 100", value: "maxText100" },
  { name: "Max Text 80", value: "maxText80" },
  { name: "Max Text 60", value: "maxText60" },
  { name: "Max Text 40", value: "maxText40" },
  { name: "Max Text 20", value: "maxText20" },
];

const colorsValues = colors.map((color) => color.value);

export { colors, colorsValues };
