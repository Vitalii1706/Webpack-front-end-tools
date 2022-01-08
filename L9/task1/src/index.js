import printProfile from './renderProfile';

const userData = {
  name: 'Tom',
  age: 17,
};

const profile = {
  ...userData,
  company: 'Gromcode',
};

printProfile(profile);

const num = 17;

if (num === 17) {
  alert('18'); // eslint-disable-line no-alert
}
