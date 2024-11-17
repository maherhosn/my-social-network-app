const names = [
'Ava',
'Ethan',
'Zoe',
'Liam',
'Maya',
'Jack',
'Harper',
'Noah',
'Olivia',
'Lucas',
'Emma',
'Mason',
'Isla',
'James',
'Sophia',
'Leo',
'Grace',
'Isaac',
'Amelia',
'Wyatt',
'Lily',
'Benjamin',
'Chloe',
'Alexander',
'Scarlett',
];

const descriptionsThoughts = [
  'How to disagree with someone',
  'iPhone review',
  'how-to critisize a thought',
  'write an essay on the killer whales or Shamus',
  'How to make money and invest in the stock market',
  'Learn Python at bootcamp',
  'What movie is on your mind?',
  'Hello Dan',
  'what do you think of the book how to crack the coding interview?',
  'If a king had to applogize how would he do it?',
  'How to stop objectifying yourself.',
];

const possibleReactions = [
  'I disagree!',
  'I agree!!!',
  'What a wonderful idea!',
  'Did you come up with this idea all on your own',
  'I tried your algorithm, here were the results',
  'This was awesome',
  'Thank you for the great content',
  'I don Not like it, I LOVE it!!!!',
  'Reply: The side effects of in app purchases on digital marketplaces',
];

// Get a random item given an array
const getRandomArrItem = (arr: any[]) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random full name
const getRandomName = () =>
  `${getRandomArrItem(names)}`;

const getRandomFriends = (int: number) => {
  let results = [];
  const uniqueUsernames = new Set();
  const uniqueEmails = new Set();

  while (results.length < int) {
    const randomName = `${getRandomArrItem(names)}`;
    const randEmail = `${randomName}@${randomName}.com`;

    // Check for uniqueness
    if (!uniqueUsernames.has(randomName) && !uniqueEmails.has(randEmail)) {
      uniqueUsernames.add(randomName);
      uniqueEmails.add(randEmail);
      
      results.push({
        username: randomName,
        email: randEmail,
      });
    }
  }
  return results;
};

// Function to generate random thoughts that we can add to the database. Includes video responses.
const getRandomThoughts = (int: number) => {
  let results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      thoughtText: getRandomArrItem(descriptionsThoughts),
      userName: getRandomArrItem(names),
      reactions: [...getThoughtReactions(3)],
    });
  }
  return results;
};

// Create the responses that will be added to each thought
const getThoughtReactions = (int: number) => {
  let results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      responseBody: getRandomArrItem(possibleReactions),
      username: getRandomName(),
    });
  }
  return results;
};

// Export the functions for use in seed.js
export { getRandomName, getRandomThoughts, getThoughtReactions, getRandomFriends };
