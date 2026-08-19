import { notFound } from "next/navigation";
import { TREES } from "@/data/tree";
import { Metadata } from "next";

export function generateStaticParams() {
  return Object.keys(TREES).map((code) => ({
    code,
  }));
}

type Props = {
  params: Promise<{ code: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { code } = await params;
  const tree = TREES[code as keyof typeof TREES];

  if (!tree) {
    return {
      title: "Not Found",
    };
  }

  return {
    title: `${tree.emoji} ${tree.title} | Susmit Vengurlekar`,
    description: tree.description,
  };
}

export default async function TreePage({ params }: Props) {
  const { code } = await params;
  const tree = TREES[code as keyof typeof TREES];

  if (!tree) {
    notFound();
  }

  return (
    <main className="max-w-xl mx-auto p-6 min-h-screen pt-24 pb-12">
      <div className="text-center mb-10">
        <div className="text-5xl mb-4">{tree.emoji}</div>
        <h1 className="text-3xl font-bold text-foreground mb-2">
          {tree.title}
        </h1>
        {tree.description && (
          <p className="text-muted-foreground">
            {tree.description}
          </p>
        )}
      </div>

      <div className="space-y-4">
        {tree.links.map((link) => (
          <div
            key={link.url}
            className="border border-border rounded-lg p-4 bg-card flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all hover:border-accent-border"
          >
            <div>
              <h2 className="font-semibold text-foreground">
                {link.title}
              </h2>
              {link.description && (
                <p className="text-sm text-muted-foreground mt-1">
                  {link.description}
                </p>
              )}
            </div>

            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-accent/10 text-accent-solid hover:bg-accent/20 transition-colors font-medium text-sm whitespace-nowrap"
            >
              Visit →
            </a>
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
        <a 
          href="/tree" 
          className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
        >
          ← Back to collections
        </a>
        <span className="hidden sm:inline text-border">•</span>
        <a 
          href="/tree/about" 
          className="text-sm text-accent-solid hover:text-accent-solid/80 transition-colors inline-flex items-center gap-1 font-medium"
        >
          About Me & Socials →
        </a>
      </div>
    </main>
  );
}
