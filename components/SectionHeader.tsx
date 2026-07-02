import Reveal from "./Reveal";

// Eyebrow + title with a hairline rule. The index encodes real order in the page.
export default function SectionHeader({
  index,
  eyebrow,
  title,
}: {
  index: string;
  eyebrow: string;
  title: string;
}) {
  return (
    <Reveal className="mb-10 md:mb-14">
      <div className="flex items-baseline gap-4">
        <span className="font-mono text-sm text-signal">{index}</span>
        <span className="eyebrow">{eyebrow}</span>
      </div>
      <h2 className="mt-3 font-display text-3xl font-semibold tracking-tightest text-ink md:text-4xl">
        {title}
      </h2>
    </Reveal>
  );
}
