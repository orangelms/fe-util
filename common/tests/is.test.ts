import { isEmpty } from "../src";
import { describe, expect, it} from '@jest/globals';

describe('isEmpty', () => {
  it('isEmpty(undefined) should true', () => {
    const valueIsEqual = isEmpty(undefined);
    expect(valueIsEqual).toBe(true);
  });

  it('isEmpty(null) should true', () => {
    const valueIsEqual = isEmpty(null);
    expect(valueIsEqual).toBe(true);
  });

  it("isEmpty('') should true", () => {
    const valueIsEqual = isEmpty('');
    expect(valueIsEqual).toBe(true);
  });

  it('isEmpty([]) should true', () => {
    const valueIsEqual = isEmpty([]);
    expect(valueIsEqual).toBe(true);
  });

  it('isEmpty({}) should true', () => {
    const valueIsEqual = isEmpty({});
    expect(valueIsEqual).toBe(true);
  });

  it("isEmpty('Hello Andy') should false", () => {
    const valueIsEqual = isEmpty('Hello Andy');
    expect(valueIsEqual).toBe(false);
  });

  it('isEmpty(NaN) should true', () => {
    const valueIsEqual = isEmpty(NaN);
    expect(valueIsEqual).toBe(false);
  });

  it('isEmpty([1, 2, 3]) should false', () => {
    const valueIsEqual = isEmpty([1, 2, 3]);
    expect(valueIsEqual).toBe(false);
  });

  it("isEmpty({ key: 'value' }) should false", () => {
    const valueIsEqual = isEmpty({ key: 'value' });
    expect(valueIsEqual).toBe(false);
  });
});
