"use client";

import { BlogsData } from "@/lib/data";
import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const BlogGrid = () => {
  return (
    <section className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex items-center justify-between mb-10"
      >
        <div>
          <h2 className="text-2xl md:text-3xl font-mono font-bold text-white mb-2">
            {BlogsData.heading}
          </h2>
          <p className="text-sm text-white/40 font-mono">Technical insights and deep dives</p>
        </div>
        <Link
          href="https://susmitpy.medium.com"
          target="_blank"
          className="hidden md:flex items-center gap-2 px-4 py-2 text-sm font-mono text-white/60 bg-white/5 rounded-lg border border-white/10 hover:border-indigo-500/30 hover:bg-indigo-500/5 transition-all"
        >
          {BlogsData.footer}
          <ArrowRight className="w-4 h-4" />
        </Link>
      </motion.div>

      {/* Desktop: 3-column grid */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {BlogsData.blogs.map((blog, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <Link
              href={blog.link}
              target="_blank"
              className="group block h-full bg-obsidian-800/50 rounded-xl border border-white/[0.05] hover:border-indigo-500/20 overflow-hidden transition-all duration-300 hover:-translate-y-1"
            >
              {/* Cover Image */}
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={blog.img}
                  alt={blog.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-900 via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-sm font-mono font-semibold text-white/90 mb-2 line-clamp-2 group-hover:text-indigo-400 transition-colors">
                  {blog.title}
                </h3>
                <p className="text-xs text-white/50 line-clamp-2 leading-relaxed">
                  {blog.description}
                </p>
                
                <div className="mt-4 flex items-center gap-1 text-xs font-mono text-indigo-400/80 group-hover:text-indigo-400 transition-colors">
                  Read More
                  <ExternalLink className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Mobile: Horizontal scrollable carousel */}
      <div className="md:hidden">
        <div className="flex gap-4 overflow-x-auto pb-4 hide-scrollbar snap-x snap-mandatory -mx-4 px-4">
          {BlogsData.blogs.map((blog, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="snap-start"
            >
              <Link
                href={blog.link}
                target="_blank"
                className="block w-72 bg-obsidian-800/50 rounded-xl border border-white/[0.05] overflow-hidden"
              >
                {/* Cover Image */}
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={blog.img}
                    alt={blog.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian-900 via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="text-sm font-mono font-semibold text-white/90 mb-1 line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-xs text-white/50 line-clamp-2">
                    {blog.description}
                  </p>
                  
                  <div className="mt-3 flex items-center gap-1 text-xs font-mono text-indigo-400/80">
                    Read More
                    <ExternalLink className="w-3 h-3" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        
        {/* Mobile View All link */}
        <Link
          href="https://susmitpy.medium.com"
          target="_blank"
          className="mt-4 flex items-center justify-center gap-2 px-4 py-3 text-sm font-mono text-white/60 bg-white/5 rounded-lg border border-white/10"
        >
          {BlogsData.footer}
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
};
