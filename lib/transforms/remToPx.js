/**
 * Add px values for rem-based tokens, assuming default 16px base px font size
 * @type {import('style-dictionary').Named<import('style-dictionary').Transform>}
 */
export const remToPx = {
  name: 'remToPx/css',
  type: 'value',
  transitive: true,
  matcher: token => token.value?.endsWith?.('rem'),
  transformer: function(token, options) {
    const val = parseFloat(token.value);
    const baseFont = options?.basePxFontSize || 16;
    if (Number.isNaN(val)) {
      throw new Error(`Invalid Number: '${token.name}: ${token.value}' is not a valid number, cannot transform to 'px' \n`);
    }
    token.attributes.px = `${(val * baseFont).toFixed(0)}px`;
    return token.value;
  }
};
