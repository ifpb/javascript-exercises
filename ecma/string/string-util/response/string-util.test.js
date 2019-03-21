import { formatter } from './string-util.js';

describe('String Util', () => {
  test('changing case for text to uppercase', () => {
    expect(formatter('lorem ipsum dolor', 'uppercase')).toBe('LOREM IPSUM DOLOR');
  });

  test('change case for text to lowercase', () => {
    expect(formatter('LOREM IPSUM DOLOR', 'lowercase')).toBe('lorem ipsum dolor');
  });

  test('change case for text to camelcase', () => {
    expect(formatter('LOREM IPSUM DOLOR', 'camelcase')).toBe('Lorem Ipsum Dolor');
  });

  test('change case for text to snakecase', () => {
    expect(formatter('lorem ipsum dolor', 'snakecase')).toBe('lorem_ipsum_dolor');
  });

  test('reversing text', () => {
    expect(formatter('lorem ipsum dolor', 'reverse')).toBe('rolod muspi merol');
  });

  test('counting chars', () => {
    expect(formatter('lorem\nipsum dolor', 'countchar')).toBe(17);
  });

  test('counting words', () => {
    expect(formatter('lorem\nipsum dolor', 'countword')).toBe(3);
  });

  test('counting lines', () => {
    expect(formatter('lorem\nipsum dolor', 'countline')).toBe(2);
  });
});
