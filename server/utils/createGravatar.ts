import md5 from 'md5';

export function createGravatarUrl(email) {
  return `https://www.gravatar.com/avatar/${md5(email).toLowerCase().trim()}`;
}

module.exports = createGravatarUrl;
