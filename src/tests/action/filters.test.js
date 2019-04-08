import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate
} from '../../actions/filters';
import moment from 'moment';

test('should setup setStartDate', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    date: moment(0)
  })
});

test('should setup setENdDate', () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    date: moment(0)
  })
});

test('should setup sort by date', () => {
  expect(sortByDate()).toEqual({type:'SORT_BY_DATE'})});

test('should setup sort by amount', () => {
  expect(sortByAmount()).toEqual({type:'SORT_BY_AMOUNT'})});

test('should setup text filter w/ values', () => {
  expect(setTextFilter('Hari Seldon')).toEqual({
    type:'SET_TEXT_FILTER',
    text: 'Hari Seldon'
  })
});

test('should setup text filter w/o values', () => {
  expect(setTextFilter()).toEqual({
    type:'SET_TEXT_FILTER',
    text: ''
  })
});