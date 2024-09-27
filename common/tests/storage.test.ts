import {  ExpireLocalStorage } from "../src";
import { describe, expect, it} from '@jest/globals';


const list = [
  {
    value: 'value',
    label:'label',
    children: [
      {
        value: 'value',
        label:'label',
      },
    ]
  },
  {
    value: 'value',
    label:'label',
  }
]

describe('ExpireLocalStorage', () => {
  const jsonStr = JSON.stringify(list);

  it('ExpireLocalStorage setItem() should OK', () => {
    const valueIsEqual = ExpireLocalStorage.setItem('test', jsonStr, 5000);
    const value = ExpireLocalStorage.getItem('test');

    expect(value).toEqual(valueIsEqual);
  });
});
