import { applySpec, prop, propOr } from 'ramda';

const contactInputFormatter = applySpec({
  id: prop('id'),
  fullName: prop('fullName'),
  avatar: prop('avatar'),
  organization: prop('organization'),
  title: prop('title'),
  phones: applySpec({
    work: prop('work'),
    home: prop('home'),
    mobile: prop('mobile')
  }),
  email: prop('email'),
  address: prop('address'),
  birthdate: prop('birthdate'),
  favourite: prop('favourite'),
  labels: propOr([], 'labels')
});

export default contactInputFormatter
