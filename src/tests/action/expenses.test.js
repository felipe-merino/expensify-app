import {addExpense, editExpense, removeExpense} from '../../actions/expenses';

test('should setup remove expense', () => {
  const action = removeExpense({id: '123abc'});
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  })
});

test('should setup edit expense', () => {
  const action = editExpense('123abc', {note: 'New Note'});
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates: {
      note: 'New Note'}
  })
});

test('should setup add expense w/ values', () => {
  const expenseData = {
    description: 'Hari',
    note: 'Seldon',
    amount:2.5,
    createdAt: 1000}  
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
      }
    })
});

test('should setup add expense w/o values', () => {
  const expenseData = {
    note: '',
    description: '',
    amount:0,
    createdAt: 0}  
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      ...expenseData      
      }
    })
});