export default function add(args: string): number | string {
  // Will check if args is empty, and return zero.
  if (args.length === 0) return 0;
  //   Will check if args is a single number, and return it.
  if (args.length === 1) return Number(args);
  //   If string has more than one number

  if (args.length > 1) {
    // check for custom delimiters
    if (args.startsWith('//')) {
      const delimiter = args[2];
      const numArray = args
        .slice(4)
        .split(new RegExp(`[${delimiter}\n,]`))
        .map(Number);
      return numArray.reduce((sum, current) => sum + current, 0);
    }
    const numArray = args.split(/[\n,'"]/).map(Number);
    const negatives = numArray.filter((n) => n < 0);
    if (negatives.length > 0) {
      throw new Error(`negative numbers not allowed: ${negatives.join(',')}`);
    }
    return numArray.reduce((sum, current) => sum + current, 0);
  }
  return 'Not a number';
}
