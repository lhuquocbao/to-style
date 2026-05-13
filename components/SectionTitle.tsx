type SectionTitleProps = {
  label?: string;
  title: string;
  description?: string;
};

export default function SectionTitle({ label, title, description }: SectionTitleProps) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {label && (
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-zinc-500">{label}</p>
      )}
      <h2 className="text-3xl font-black tracking-tight text-black sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-base leading-7 text-zinc-600">{description}</p>}
    </div>
  );
}
