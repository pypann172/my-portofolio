"use client";

import { useEffect, useRef, useState } from "react";

const skills = [
    { name: "HTML", detail: "Semantic structure", side: "left" },
    { name: "Vanilla CSS", detail: "Layout & styling", side: "right" },
    { name: "JavaScript", detail: "Interactive logic", side: "left" },
    { name: "Python", detail: "Programming basics", side: "right" },
    { name: "Tailwind CSS", detail: "Utility-first UI", side: "left" },
    { name: "Next.js", detail: "React framework", side: "right" },
    { name: "Supabase", detail: "Backend & database", side: "left" },
] as const;

export default function SkillsTimeline() {
    const sectionRef = useRef<HTMLElement>(null);
    const [visibleSkills, setVisibleSkills] = useState<number[]>([]);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = Number((entry.target as HTMLElement).dataset.skillIndex);
                        setVisibleSkills((current) => current.includes(index) ? current : [...current, index]);
                    }
                });
            },
            { threshold: 0.25 },
        );

        section.querySelectorAll<HTMLElement>("[data-skill-index]").forEach((card) => observer.observe(card));
        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-20" aria-labelledby="skills-title">
            <div className="mx-auto max-w-2xl text-center">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-blue-600">Toolkit</p>
                <h2 id="skills-title" className="mt-4 text-3xl font-bold tracking-tight text-blue-950 sm:text-5xl">Yang sedang saya pelajari.</h2>
                <p className="mt-4 text-sm leading-7 text-blue-950/60 sm:text-base">Beberapa teknologi yang saya gunakan untuk mengubah ide menjadi sesuatu yang bisa dipakai.</p>
            </div>

            <div className="relative mx-auto mt-14 max-w-4xl">
                <div className="skills-timeline-line" aria-hidden="true" />
                <div className="space-y-7 sm:space-y-10">
                    {skills.map((skill, index) => (
                        <div key={skill.name} className={`skills-timeline-row ${skill.side === "right" ? "skills-timeline-row-right" : "skills-timeline-row-left"}`}>
                            <div
                                data-skill-index={index}
                                className={`skills-card-shell ${visibleSkills.includes(index) ? "is-visible" : ""} ${skill.side === "right" ? "sm:col-start-3" : "sm:col-start-1"}`}
                            >
                                <div className="skills-card">
                                    <span className="skills-card-index">0{index + 1}</span>
                                    <div>
                                        <h3 className="text-xl font-bold tracking-tight text-blue-950 sm:text-2xl">{skill.name}</h3>
                                        <p className="mt-1 text-sm text-blue-950/55">{skill.detail}</p>
                                    </div>
                                    <span className="skills-card-arrow" aria-hidden="true">↗</span>
                                </div>
                            </div>
                            <span className="skills-timeline-node" aria-hidden="true" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
