export default function add(args: string): number {
  // Will check if args is empty, and return zero.
  if (args.length === 0) return 0;
  //   Will check if args is a single number, and return it.
  if (args.length === 1 || !args.includes(',')) return Number(args);
}
