import countries from "world-countries";
export const countryOptions = countries.map((c) => ({
  name: c.name.common,
  code: c.cca2,
}));

export const stateOptions = [
  {
    name: "Texas",
    code: "TE",
  },
  {
    name: 'Ohio',
    code: 'OH'
  }
];