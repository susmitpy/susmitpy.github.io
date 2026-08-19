import Link from "next/link";
import { TREES } from "@/data/tree";

export const metadata = {
  title: "Link Collections | Susmit Vengurlekar",
  description: "Directory of resources, talks, and projects.",
};

export default function TreeIndexPage() {
  return (
    <main className="max-w-xl mx-auto p-6 min-h-screen pt-24 pb-12">
      <h1 className="text-3xl font-bold mb-6 text-foreground">
        Link Collections
      </h1>

      <div className="space-y-4">
        {Object.entries(TREES).map(([code, tree]) => (
          <Link
            key={code}
            href={`/tree/${code}`}
            className="block border border-border rounded-lg p-4 hover:bg-muted/50 transition-colors bg-card"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">{tree.emoji}</span>
              <div>
                <h2 className="font-semibold text-foreground">
                  {tree.title}
                </h2>
                {tree.description && (
                  <p className="text-sm text-muted-foreground mt-1">
                    {tree.description}
                  </p>
                )}
                <p className="text-xs mt-2 text-accent-solid">
                  {tree.links.length} {tree.links.length === 1 ? 'link' : 'links'}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
