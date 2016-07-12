import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Accounts } from 'meteor/accounts-base';
import { cpu } from  "../imports/collections/collections";

Meteor.startup(() => {
    const admins = [{
      email: 'admin1@mail.com',
      password: 'password',
      profile: {
          name: { first: 'Mitch', last: 'Horne' },
      },
      roles: ['admin']
    },
      {
          email: 'admin2@mail.com',
          password: 'password',
          profile: {
              name: { first: 'JP', last: 'Claasens' }
          },
          roles: ['admin']
      }];

    admins.forEach(({email, password, profile, roles}) => {
        const userExists = Meteor.users.findOne({ 'emails.address': email });

        if (!userExists) {
            const userId = Accounts.createUser({ email, password, profile });
            Roles.addUsersToRoles(userId, roles);
        }
    });
});


