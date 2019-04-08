import moment from 'moment';

export default [{
  id: '1',
  description:'Hari',
  note: '',
  amount: 195,
  createdAt: 0
}, {
  id: '2',
  description:'Rent',
  note: '',
  amount: 1955,
  createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
  id: '3',
  description:'Seldon',
  note: '',
  amount: 295,
  createdAt: moment(0).add(4, 'days').valueOf()
}];