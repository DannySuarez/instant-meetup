const User = require('../lib/models/User');
const chance = require('chance').Chance();

module.exports = async({ users = 10 } = { users: 10 }) => {
  const createdUsers = await User.create(
    [...Array(users)].map(() => ({
      fullname: chance.name(),
      email: chance.email(),
      phone: chance.phone({ formated: false, country: 'us' }),
      password: 'password',
      location: chance.location({ fixed: 7 }),
    }))
  );

  return { users: createdUsers };

};