export const AXES = {
  economic: { name: 'Economic', left: 'Regulated Economy', right: 'Free Market' },
  social: { name: 'Social', left: 'Progressive', right: 'Traditional' },
  government: { name: 'Government', left: 'Libertarian', right: 'Authoritarian' },
  foreign: { name: 'Foreign Policy', left: 'Non-Interventionist', right: 'Interventionist' },
  environmental: { name: 'Environmental', left: 'Pro-Environment', right: 'Pro-Industry' },
  immigration: { name: 'Immigration', left: 'Open Borders', right: 'Strict Immigration' },
};

const questions = [
  // Economic axis (primary)
  {
    id: 1,
    text: 'The government should increase taxes on the wealthy to fund public services.',
    category: 'economic',
    weights: { economic: -2, government: 1 },
  },
  {
    id: 2,
    text: 'Free markets, with minimal regulation, lead to the best outcomes for society.',
    category: 'economic',
    weights: { economic: 2, government: -1 },
  },
  {
    id: 3,
    text: 'Universal healthcare should be provided by the government.',
    category: 'economic',
    weights: { economic: -2, social: -1 },
  },
  {
    id: 4,
    text: 'Minimum wage laws do more harm than good to the economy.',
    category: 'economic',
    weights: { economic: 2 },
  },

  // Social axis (primary)
  {
    id: 5,
    text: 'Marriage should only be between a man and a woman.',
    category: 'social',
    weights: { social: 2, government: 1 },
  },
  {
    id: 6,
    text: 'Society benefits when people challenge traditional gender roles.',
    category: 'social',
    weights: { social: -2 },
  },
  {
    id: 7,
    text: 'Drug use is a personal choice and should not be criminalized.',
    category: 'social',
    weights: { social: -1, government: -2 },
  },
  {
    id: 8,
    text: 'Religious values should play a larger role in government policy.',
    category: 'social',
    weights: { social: 2, government: 1 },
  },

  // Government axis (primary)
  {
    id: 9,
    text: 'Government surveillance of citizens is acceptable if it keeps us safe.',
    category: 'government',
    weights: { government: 2 },
  },
  {
    id: 10,
    text: 'People should be free to own any type of firearm without government restrictions.',
    category: 'government',
    weights: { government: -2, social: 1 },
  },
  {
    id: 11,
    text: 'A strong central government is necessary to maintain order in society.',
    category: 'government',
    weights: { government: 2, economic: -1 },
  },
  {
    id: 12,
    text: 'Censorship of media and speech is sometimes necessary for the public good.',
    category: 'government',
    weights: { government: 2, social: 1 },
  },

  // Foreign Policy axis (primary)
  {
    id: 13,
    text: 'Our country should use military force to promote democracy abroad.',
    category: 'foreign',
    weights: { foreign: 2, government: 1 },
  },
  {
    id: 14,
    text: 'We should prioritize diplomacy and avoid military intervention in other countries.',
    category: 'foreign',
    weights: { foreign: -2 },
  },
  {
    id: 15,
    text: 'Foreign aid budgets should be increased to help developing nations.',
    category: 'foreign',
    weights: { foreign: 1, economic: -1 },
  },
  {
    id: 16,
    text: 'International trade agreements generally benefit our country.',
    category: 'foreign',
    weights: { foreign: 1, economic: 1 },
  },

  // Environmental axis (primary)
  {
    id: 17,
    text: 'Stricter environmental regulations are worth the cost to businesses.',
    category: 'environmental',
    weights: { environmental: -2, economic: -1 },
  },
  {
    id: 18,
    text: 'Climate change is an urgent crisis requiring immediate government action.',
    category: 'environmental',
    weights: { environmental: -2, government: 1 },
  },
  {
    id: 19,
    text: 'Economic growth should take priority over environmental protection.',
    category: 'environmental',
    weights: { environmental: 2, economic: 1 },
  },
  {
    id: 20,
    text: 'Nuclear energy should be expanded as a clean power source.',
    category: 'environmental',
    weights: { environmental: -1, economic: 1 },
  },

  // Immigration axis (primary)
  {
    id: 21,
    text: 'Immigrants strengthen our country through cultural diversity and hard work.',
    category: 'immigration',
    weights: { immigration: -2, social: -1 },
  },
  {
    id: 22,
    text: 'We need stronger border security and stricter immigration enforcement.',
    category: 'immigration',
    weights: { immigration: 2, government: 1 },
  },
  {
    id: 23,
    text: 'Undocumented immigrants who have lived here for years should have a path to citizenship.',
    category: 'immigration',
    weights: { immigration: -2 },
  },
  {
    id: 24,
    text: 'Immigration levels should be reduced to protect domestic jobs.',
    category: 'immigration',
    weights: { immigration: 2, economic: 1 },
  },

  // Cross-cutting question
  {
    id: 25,
    text: 'The government has a responsibility to reduce the gap between rich and poor.',
    category: 'economic',
    weights: { economic: -2, government: 1, social: -1 },
  },
];

export default questions;
