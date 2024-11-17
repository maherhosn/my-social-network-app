import connection from '../config/connection.js';
import { User, Thought } from '../models/index.js';
import { getRandomName, getRandomThoughts, getRandomFriends } from './data.js';

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
  // Delete the collections if they exist
  let thoughtCheck = await connection.db?.listCollections({ name: 'thoughts' }).toArray();
  if (thoughtCheck?.length) {
    await connection.dropCollection('thoughts');
  }

  let userCheck = await connection.db?.listCollections({ name: 'users' }).toArray();
  if (userCheck?.length) {
    await connection.dropCollection('users');
  }

  const users = [];
  const manyThoughts = await Thought.insertMany(getRandomThoughts(5)); // Insert thoughts and get their ObjectIds
  console.log(manyThoughts);
  const manyFriends = await User.insertMany(getRandomFriends(3));
  console.log(manyFriends);

  const assureUniquness = new Set();
  const findExistingUsers= User.find({},'username');
  (await findExistingUsers).forEach(user =>{
    assureUniquness.add(user.username);
  })

  for (let i = 0; i < 20; i++) {
    let username, email;

    // Generate unique username and email
    do {
      username = getRandomName();
      email = `${username}@${username}.com`;
    } while (assureUniquness.has(username));

    // Add to Sets to track uniqueness
    assureUniquness.add(username);

    // const thoughtIds = manyThoughts.map(thought => thought._id); // Get ObjectIds of the first 5 thoughts
    // const friendsIds = manyFriends.map(friend => friend._id);

    users.push({
      username,
      email,
      thoughts: manyThoughts, // Assign the ObjectIds here
      friends: manyFriends
    });
  }

 const socialNetwork = await User.insertMany(users);
 console.log(socialNetwork);
  // await Thought.insertMany(manyThoughts);

  // loop through the saved thoughts, for each thought we need to generate a thought response and insert the thought responses
  console.table(users);
  console.table(manyThoughts);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
