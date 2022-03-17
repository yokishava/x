import { interpolate } from '../interpolate';

describe('testing interpolate function', () => {
  it('interpolates values when the parameter is passed', () => {
    expect(
      interpolate('https://{env}.empathy.co/{instance}', {
        env: 'live',
        instance: 'demo'
      })
    ).toBe('https://live.empathy.co/demo');
    expect(
      interpolate('https://{(api-)env}.empathy.co/{instance}', {
        env: 'live',
        instance: 'demo'
      })
    ).toBe('https://api-live.empathy.co/demo');
    expect(
      interpolate('https://api.{env(.)}empathy.co/{instance}', {
        env: 'live',
        instance: 'demo'
      })
    ).toBe('https://api.live.empathy.co/demo');
    expect(
      interpolate('https://{(api-)env(.)}empathy.co/{instance}', {
        env: 'live',
        instance: 'demo'
      })
    ).toBe('https://api-live.empathy.co/demo');
  });

  it('hides values when the parameter is not passed', () => {
    expect(
      interpolate('https://{env}.empathy.co/{instance}', {
        env: 'live'
      })
    ).toBe('https://live.empathy.co/');
    expect(
      interpolate('https://search{(api-)env}.empathy.co/{instance}', {
        instance: 'demo'
      })
    ).toBe('https://search.empathy.co/demo');
    expect(
      interpolate('https://api.{env(.)}empathy.co/{instance}', {
        instance: 'demo'
      })
    ).toBe('https://api.empathy.co/demo');
    expect(
      interpolate('https://search.{(api-)env(.)}empathy.co/{instance}', {
        instance: 'demo'
      })
    ).toBe('https://search.empathy.co/demo');
  });
});