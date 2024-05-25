// checkUsername.js
const { TwitterApi } = require('twitter-api-v2');

// Replace with your own credentials
const client = new TwitterApi({
  appKey: '0SboKSd4zGzHN3kQ0GCOunnAY',
  appSecret: 'oU8oShK4PBfIh85aTtkbgY34sD0SRBXWcr1H3SWVRBxTRsfuLi',
  accessToken: '1264122389807296513-A0O3MJyXH1j38pX71o58kqC7doeaJw',
  accessSecret: 'cojmTKMCoOJrqiFSlOlE4tWe5MRByd90SBfvh8AfK1vLE',
});

const authLink = await client.generateAuthLink("localhost:3000/callback");


const checkUsernameExists = async (username) => {
  try {
    // This endpoint is deprecated but still can be useful
    const user = await client.v2.userByUsername(username);
    if (user) {
      console.log(`The username @${username} exists.`);
    } else {
      console.log(`The username @${username} does not exist.`);
    }
  } catch (error) {
    if (error.code === 50) {
      console.log(`The username @${username} does not exist.`);
    }
    else {
      console.error('Error checking username:', error);
    }
  }
};

// Replace 'example' with the username you want to check
checkUsernameExists('jashandotsol');