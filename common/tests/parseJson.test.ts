import {  parseJson } from "../src";
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

describe('parseJson', () => {
  const jsonStr = JSON.stringify(list);

  it('parseJson(undefined) should OK', () => {
    const valueIsEqual = parseJson(jsonStr);
    expect(valueIsEqual).toEqual(list);
  });
});
