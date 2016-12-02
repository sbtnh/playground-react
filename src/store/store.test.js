import expect from 'expect';
import { createStore } from 'redux';
import rootReducer from '../reducers';
import initialState from '../reducers/initialState';
import * as courseActions from '../actions/courseActions';

describe('Store', function() {
  it('Should handle creating courses', function() {
    // arrange
    const store = createStore(rootReducer, initialState);
    const course = {
      title: "Clean Code"
    };

    // act
    const action = courseActions.createCourseSuccess(course);
    store.dispatch(action);

    // assert
    const actual = store.getState().courses[0];
    const expected = {
      title: "Clean Code"
    };

    expect(actual).toEqual(expected);
  });

  it('Should handle updating courses', function() {
    // arrange
    const store = createStore(rootReducer, initialState);
    const course = {
      title: "Clean Code"
    };

    const courseUpdate = {
      title: "Clean Code updated"
    };

    // act
    const createAction = courseActions.createCourseSuccess(course);
    const updateAction = courseActions.updateCourseSuccess(courseUpdate);
    store.dispatch(createAction);
    store.dispatch(updateAction);

    // assert
    const actual = store.getState().courses[0];
    const expected = {
      title: "Clean Code updated"
    };

    expect(actual).toEqual(expected);
  });

  it('Should handle creating multiple courses', function() {
    // arrange
    const store = createStore(rootReducer, initialState);
    const course1 = {
      title: "Clean Code"
    };

    const course2 = {
      title: "Clean Code updated"
    };

    // act
    const createAction1 = courseActions.createCourseSuccess(course1);
    const createAction2 = courseActions.createCourseSuccess(course2);
    store.dispatch(createAction1);
    store.dispatch(createAction2);

    // assert
    const actual = store.getState().courses.length;
    const expected = 2;

    expect(actual).toEqual(expected);
  });
});
