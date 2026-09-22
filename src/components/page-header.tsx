export function PageHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="bg-navy px-5 py-16 text-cream sm:px-8">
      <div className="mx-auto max-w-6xl">
        <h1 className="font-serif text-3xl font-semibold sm:text-4xl">{title}</h1>
        {subtitle && <p className="mt-3 max-w-xl text-cream/75">{subtitle}</p>}
      </div>
    </section>
  );
}
