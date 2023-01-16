// TODO: this is super beta, consider using Sindre's supports-colors
export function supportsColor() {
  const onHeroku = truth(process.env.DYNO) ? true : false;
  const forceNoColor = truth(process.env.FORCE_NO_COLOR) ? true : false;
  const forceColor = truth(process.env.FORCE_COLOR) ? true : false;
  return !onHeroku && !forceNoColor || forceColor;
};

// also counts 'false' as false
function truth(it) {
  return it && it !== 'false' ? true : false;
}
