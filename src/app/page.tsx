import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Sticky minimal nav */}
      <header className="nav-blur sticky top-0 z-50">
        <div className="container flex items-center justify-between h-16">
          <a href="#hero" className="font-semibold tracking-tight">
            <span className="gold-text">Team</span> Vitality
          </a>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#about" className="hover:opacity-80">
              About
            </a>
            <a href="#members" className="hover:opacity-80">
              Members
            </a>
            <a href="#projects" className="hover:opacity-80">
              Projects
            </a>
            <a href="#contact" className="hover:opacity-80">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="hero" className="section">
        <div className="container grid md:grid-cols-2 gap-10 items-center">
          <div className="animate-in">
            <h1 className="headline text-4xl md:text-6xl font-semibold leading-tight">
              Team Vitality
            </h1>
            <p className="mt-4 text-lg subtle">
              a student hackathon team, powered by Velovs IT
            </p>
            <div className="mt-8 flex gap-3">
              <a href="#projects" className="btn">
                View projects
              </a>
              <a
                href="#contact"
                className="btn"
                style={{
                  background: "linear-gradient(180deg, #fff, #f6f1e8)",
                  borderColor: "#c5a572",
                }}
              >
                Contact us
              </a>
            </div>
          </div>
          <div
            className="relative h-[320px] md:h-[420px] rounded-2xl overflow-hidden card animate-in"
            style={{ animationDelay: "80ms" }}
          >
            <Image
              src="/uploads/background/hero.jpg"
              alt="Background"
              fill
              priority
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section">
        <div className="container grid md:grid-cols-3 gap-8 items-start">
          <h2 className="headline text-2xl md:text-3xl">About</h2>
          <p className="md:col-span-2 leading-relaxed text-balance">
            We are a university team passionate about designing and building
            elegant, reliable products. We value clarity, craftsmanship, and
            collaboration. From rapid prototypes to polished demos, we deliver
            high-impact experiences with minimal complexity and premium feel.
          </p>
        </div>
      </section>

      {/* Members */}
      <section id="members" className="section">
        <div className="container">
          <h2 className="headline text-2xl md:text-3xl mb-6">Team Members</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                name: "Jane Doe",
                role: "Team Lead / Frontend",
                img: "/uploads/members/jane.jpg",
              },
              {
                name: "John Smith",
                role: "Backend / DevOps",
                img: "/uploads/members/john.jpg",
              },
              {
                name: "Ava Chen",
                role: "UI/UX Designer",
                img: "/uploads/members/ava.jpg",
              },
            ].map((m) => (
              <div className="card p-4" key={m.name}>
                <div className="relative h-48 w-full rounded-lg overflow-hidden">
                  <Image
                    src={m.img}
                    alt={m.name}
                    fill
                    sizes="(min-width: 768px) 33vw, 50vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="mt-3">
                  <div className="font-medium">{m.name}</div>
                  <div className="subtle text-sm">{m.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section">
        <div className="container">
          <h2 className="headline text-2xl md:text-3xl mb-6">
            Project Showcase
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Velovs Portal",
                desc: "A streamlined hub with elegant UI and secure auth.",
                img: "/uploads/background/project1.jpg",
              },
              {
                title: "Hackathon Toolkit",
                desc: "Reusable components for rapid prototyping.",
                img: "/uploads/background/project2.jpg",
              },
              {
                title: "Insight Dashboard",
                desc: "Minimal analytics with premium visuals.",
                img: "/uploads/background/project3.jpg",
              },
            ].map((p) => (
              <div className="card overflow-hidden" key={p.title}>
                <div className="relative h-44 w-full">
                  <Image
                    src={p.img}
                    alt={p.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="p-4">
                  <div className="font-medium">{p.title}</div>
                  <div className="subtle text-sm mt-1">{p.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section">
        <div className="container grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="headline text-2xl md:text-3xl">Contact</h2>
            <p className="subtle mt-2">
              We’ll get back to you within 2-3 days.
            </p>
          </div>
          <form className="card p-4 grid gap-3">
            <input
              className="border rounded-md px-3 py-2 bg-white/80"
              placeholder="Name"
              required
            />
            <input
              className="border rounded-md px-3 py-2 bg-white/80"
              type="email"
              placeholder="Email"
              required
            />
            <textarea
              className="border rounded-md px-3 py-2 bg-white/80"
              rows={4}
              placeholder="Message"
              required
            />
            <button className="btn" type="submit">
              Send
            </button>
          </form>
        </div>
      </section>

      <footer className="py-10">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="subtle text-sm">
            © {new Date().getFullYear()} Team Vitality
          </div>
          <div className="subtle text-sm">Crafted with ♥ by Velovs IT</div>
        </div>
      </footer>
    </div>
  );
}
