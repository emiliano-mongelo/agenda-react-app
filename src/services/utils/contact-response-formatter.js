import { applySpec, path, prop, propOr } from 'ramda';

const contactResponseFormatter = applySpec({
  id: prop('id'),
  fullName: prop('fullName'),
  avatar: prop('avatar'),
  organization: prop('organization'),
  title: prop('title'),
  phones: applySpec({
    work: path(['phones', 'work']),
    home: path(['phones', 'home']),
    mobile: path(['phones', 'mobile'])
  }),
  email: prop('email'),
  address: prop('address'),
  birthdate: prop('birthdate'),
  favourite: prop('favourite'),
  labels: propOr([], 'labels')
});

export default contactResponseFormatter
