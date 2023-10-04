const decode = (input) => input
  .replace(/(\.|\-)(\d+)/g, (_, el, val) => el == '.' ? '1'.repeat(val) : '0'.repeat(val))
  .match(/([01])\1*/g)
  .map(x => x.length == 1 ? '.' : (x.length - 2) / 2)
  .join('')
  .match(/\d+\.\d+/g)
  .map(x => x.split('.'))
  .sort((a, b) => a[0] - b[0])
  .map(x => String.fromCharCode(x[0]))
  .join('');