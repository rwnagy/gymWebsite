import images from './images';

const memberships = [
  {
    title: '1 Month',
    price: '$29',
    tags: 'One Location',
  },
  {
    title: '1 Month',
    price: '$39',
    tags: 'All Locations',
  },
  {
    title: '3 Months',
    price: '$79',
    tags: 'One Location',
  },
  {
    title: '3 Months',
    price: '$99',
    tags: 'All Locations',
  },
  {
    title: '1 Year',
    price: '$299',
    tags: 'All Locations',
  },
];

const groupClasses = [
  {
    title: 'Yoga',
    price: '$30',
    tags: 'Monday, Wednesday, Friday | 8-9 PM',
  },
  {
    title: 'HIIT',
    price: '$20',
    tags: 'Monday, Wednesday, Friday | 6-7 PM',
  },
  {
    title: 'Resistance Training',
    price: '$20',
    tags: 'Tuesday, Thursday, Saturday | 6-7 PM',
  },
  {
    title: 'Circuit',
    price: '$30',
    tags: 'Tuesday, Thursday, Saturday | 8-9 PM',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: '2 Years Industry Contribution Awards',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Best Gym in the City',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: '5 Customer Service Awards',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: '3 Personal Trainers of the Year',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { memberships, groupClasses, awards };
