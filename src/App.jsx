import React, { useState } from "react";
import {
  ChevronDown,
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Scale,
  Gavel,
  Landmark,
  Users,
  BookOpen,
  CalendarDays,
  ShieldCheck,
  Search,
  ArrowRight,
  PlayCircle,
} from "lucide-react";
import { motion } from "framer-motion";
import logo from "./assets/madrasbarassociationlogo.jpg"

const menu = [
  { label: "Home", href: "#home" },
  {
    label: "About",
    items: ["Organization Profile", "Milestones", "Presidents", "Secretaries"],
  },
  {
    label: "Office Bearers",
    items: ["2026-2028", "2024-2026", "2021-2023"],
  },
  { label: "Members", href: "#members" },
  {
    label: "Photo Gallery",
    items: ["Recent Events", "Archives"],
  },
  { label: "Associations", href: "#associations" },
  { label: "Contact", href: "#contact" },
  { label: "Useful Links", href: "#useful-links" },
];

const stats = [
  { value: "1865", label: "Established" },
  { value: "150+", label: "Years of Legacy" },
  { value: "High Court", label: "Chennai Campus" },
  { value: "MBA", label: "Law Academy" },
];

const notices = [
  "Annual General Body Meeting notification released",
  "New member enrollment and renewal forms available",
  "MBA Law Academy video sessions updated",
  "Useful legal resources and acts are available online",
];

const usefulCards = [
  {
    title: "Central Acts",
    text: "Download important Central Acts in PDF format.",
    button: "Download",
    icon: BookOpen,
  },
  {
    title: "Legal Dictionary",
    text: "Search legal terms, meanings, and definitions online.",
    button: "Search",
    icon: Search,
  },
  {
    title: "NALSA Handbook",
    text: "Access handbook formats by National Legal Services Authority.",
    button: "Download",
    icon: ShieldCheck,
  },
  {
    title: "Tamil Acts",
    text: "View Central Acts translated in Tamil PDF format.",
    button: "View Acts",
    icon: Landmark,
  },
];

const associationLinks = [
  {
    title: "Bar Council Of India",
    url: "https://www.barcouncilofindia.org/",
  },
  {
    title: "Bar Council of Tamilnadu & Puducherry",
    url: "https://www.bctnpy.org/py.org/",
  },
  {
    title: "Madras High Court",
    url: "https://www.mhc.tn.gov.in/",
  },
  {
    title: "Legislative Department",
    url: "https://legislative.gov.in/",
  },
  {
    title: "Department of Legal Affairs",
    url: "https://legalaffairs.gov.in/",
  },
  {
    title: "Department of Justice",
    url: "https://doj.gov.in/",
  },
  {
    title: "Supreme Court of India",
    url: "https://www.sci.gov.in/",
  },
  {
    title: "Rajya Sabha",
    url: "https://rajyasabha.nic.in/",
  },
  {
    title: "Lok Sabha",
    url: "https://loksabha.nic.in/",
  },
  {
    title: "Constitution of India",
    url: "https://www.india.gov.in/my-government/constitution-india",
  },
];
const officeBearers = [
  { role: "President", name: "Senior Advocate", term: "2026 - 2028" },
  { role: "Vice President", name: "Senior Member", term: "2026 - 2028" },
  { role: "Secretary", name: "Executive Member", term: "2026 - 2028" },
  { role: "Treasurer", name: "Committee Member", term: "2026 - 2028" },
];

function Logo() {
  return (
    <div className="flex items-center gap-3">
      <img
  src={logo}
  alt="Madras Bar Association Logo"
  className="h-16 w-16 rounded-2xl object-cover shadow-lg"
/>
      <div>
        <h1 className="text-lg font-black uppercase tracking-wide text-white md:text-xl">Madras Bar Association</h1>
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-300">Established 1865</p>
      </div>
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/90 text-white backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        <a href="#home"><Logo /></a>

        <nav className="hidden items-center gap-1 lg:flex">
          {menu.map((item, index) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => setDropdown(index)}
              onMouseLeave={() => setDropdown(null)}
            >
              <a
                href={item.href || "#"}
                className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-semibold text-slate-200 transition hover:bg-white/10 hover:text-white"
              >
                {item.label}
                {item.items && <ChevronDown size={14} />}
              </a>
              {item.items && dropdown === index && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute left-0 top-11 w-60 rounded-2xl border border-slate-200 bg-white p-2 text-slate-800 shadow-2xl"
                >
                  {item.items.map((sub) => (
                    <a key={sub} href="#about" className="block rounded-xl px-4 py-3 text-sm font-semibold hover:bg-amber-50 hover:text-red-900">
                      {sub}
                    </a>
                  ))}
                </motion.div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href="#contact" className="rounded-full border border-white/15 px-4 py-2 text-sm font-bold hover:bg-white/10">Contact</a>
          <a href="#login" className="rounded-full bg-amber-400 px-5 py-2 text-sm font-black text-slate-950 hover:bg-amber-300">Member Login</a>
        </div>

        <button onClick={() => setOpen(!open)} className="lg:hidden" aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-slate-950 px-4 py-4 lg:hidden">
          {menu.map((item) => (
            <a key={item.label} href={item.href || "#"} className="block rounded-xl px-4 py-3 text-sm font-semibold hover:bg-white/10">
              {item.label}
            </a>
          ))}
          <a href="#login" className="mt-3 block rounded-full bg-amber-400 px-5 py-3 text-center font-black text-slate-950">Member Login</a>
        </div>
      )}
    </header>
  );
}

function Hero() {
  const heroSlides = [
    "https://plus.unsplash.com/premium_photo-1698084059560-9a53de7b816b?q=80&w=1111&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1600&auto=format&fit=crop",
    "https://media.istockphoto.com/id/1218704953/photo/high-court-of-chennai-tamil-nadu-india-chennai-high-court.jpg?s=1024x1024&w=is&k=20&c=xcO6baJnfL8gGr7lIiQTgUduuj0UbyJVN4eYWoF7tSE=",
    "https://media.istockphoto.com/id/1008159054/photo/law-and-justice.jpg?s=1024x1024&w=is&k=20&c=k0cy1BECrPWy2EhnImUJM_biv7BjWjL6GX3H_yJAN0U=",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative overflow-hidden bg-slate-950 pt-28 text-white">
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              currentSlide === index ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${slide})` }}
          />
        ))}
        <div className="absolute inset-0 bg-slate-950/75" />
      </div>
      <div className="absolute inset-0 opacity-30">
        <div className="absolute left-[-10%] top-20 h-96 w-96 rounded-full bg-red-800 blur-3xl" />
        <div className="absolute bottom-0 right-[-8%] h-[28rem] w-[28rem] rounded-full bg-amber-500 blur-3xl" />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:56px_56px]" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-28">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-300/30 bg-amber-300/10 px-4 py-2 text-sm font-bold text-amber-200">
            <Gavel size={17} /> Since 1865 • High Court, Chennai
          </div>
          <h2 className="max-w-4xl text-5xl font-black leading-tight tracking-tight md:text-7xl">
            Madras Bar Association
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            A modern digital platform for one of India’s historic legal associations — built for members, legal resources, events, academy programs, and association updates By Machine Vogue Technology.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a href="#about" className="rounded-full bg-amber-400 px-7 py-4 text-center font-black text-slate-950 shadow-xl shadow-amber-500/20 hover:bg-amber-300">
              Explore Association
            </a>
            <a href="#members" className="rounded-full border border-white/20 px-7 py-4 text-center font-bold text-white hover:bg-white/10">
              Member Portal
            </a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }} className="rounded-[2rem] border border-white/10 bg-white/10 p-5 shadow-2xl backdrop-blur-xl">
          <div className="rounded-[1.5rem] bg-white p-6 text-slate-950">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.24em] text-red-800">Association Notice Board</p>
                <h3 className="mt-2 text-2xl font-black">Latest Updates</h3>
              </div>
              <div className="rounded-2xl bg-amber-100 p-3 text-red-900"><FileNoticeIcon /></div>
            </div>
            <div className="mt-6 space-y-3">
              {notices.map((notice, index) => (
                <div key={notice} className="flex gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-red-900 text-sm font-black text-white">{index + 1}</span>
                  <p className="text-sm font-semibold leading-6 text-slate-700">{notice}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FileNoticeIcon() {
  return <CalendarDays size={28} />;
}

function Stats() {
  return (
    <section className="relative z-10 mx-auto -mt-10 grid max-w-6xl gap-4 px-4 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
      {stats.map((stat) => (
        <div key={stat.label} className="rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-xl shadow-slate-200/70">
          <p className="text-3xl font-black text-red-950">{stat.value}</p>
          <p className="mt-2 text-sm font-bold uppercase tracking-wide text-slate-500">{stat.label}</p>
        </div>
      ))}
    </section>
  );
}

function SectionTitle({ eyebrow, title, text }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <p className="mb-3 text-sm font-black uppercase tracking-[0.28em] text-red-800">{eyebrow}</p>
      <h2 className="text-3xl font-black tracking-tight text-slate-950 md:text-5xl">{title}</h2>
      {text && <p className="mt-5 text-base leading-8 text-slate-600">{text}</p>}
    </div>
  );
}

function About() {
  return (
    <section id="about" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionTitle
          eyebrow="Welcome"
          title="Welcome to Madras Bar Association"
          text="A refined website experience of structure, redesigned with modern spacing, typography, cards, and responsive layout.created by Machine Vogue Technology for Client Demo"
        />

        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-red-950 via-red-900 to-amber-700 p-8 text-white shadow-2xl">
            <div className="absolute right-[-5rem] top-[-5rem] h-56 w-56 rounded-full bg-amber-400/30 blur-2xl" />
            <div className="relative flex min-h-[420px] flex-col justify-between rounded-[1.5rem] border border-white/20 bg-white/10 p-8 backdrop-blur-sm">
              <div>
                <Scale size={52} className="text-amber-300" />
                <h3 className="mt-6 text-3xl font-black">Legacy of the Legal Fraternity</h3>
                <p className="mt-4 leading-8 text-amber-50">
                  Representing tradition, professional excellence, and continuous legal learning from the High Court campus, Chennai.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-white/15 p-4">
                  <p className="text-2xl font-black">1865</p>
                  <p className="text-sm text-amber-100">Founded</p>
                </div>
                <div className="rounded-2xl bg-white/15 p-4">
                  <p className="text-2xl font-black">1898</p>
                  <p className="text-sm text-amber-100">Named MBA</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <h3 className="text-3xl font-black text-slate-950">Who We Are</h3>
            <p className="mt-5 leading-8 text-slate-600">
              The Madras High Court was established in 1862 by a Royal Charter. Barristers practicing in the High Court formed an Association in 1865. The first meeting of the Association was held on 14th March, 1865.
            </p>
            <p className="mt-4 leading-8 text-slate-600">
              Initially, only British Barristers were enrolled as members. Later, Indian Barristers were permitted to become members. When the High Court shifted to the present building in 1892, a hall was given to the Association.
            </p>
            <p className="mt-4 leading-8 text-slate-600">
              In a meeting held on 30th April, 1898, it was resolved to name the Association as the Madras Bar Association.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                { icon: Landmark, title: "Milestones" },
                { icon: Users, title: "Presidents" },
                { icon: Gavel, title: "Secretaries" },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-center">
                  <item.icon className="mx-auto text-red-900" />
                  <p className="mt-3 font-black text-slate-800">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Academy() {
  return (
    <section className="bg-slate-100 py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-[1fr_1fr] lg:px-8">
        <div className="flex flex-col justify-center">
          <p className="text-sm font-black uppercase tracking-[0.28em] text-red-800">
            MBA Law Academy
          </p>

          <h2 className="mt-4 text-4xl font-black leading-tight text-slate-950 md:text-5xl">
            Educate yourself, enrich your experience, and excel in your profession.
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            The MBA Academy is an academic wing of the Madras Bar Association for continuous learning and benefit of the legal fraternity.
          </p>

          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-red-900 px-6 py-4 font-black text-white hover:bg-red-800"
          >
            View The Channel <ArrowRight size={18} />
          </a>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] bg-slate-950 p-5 shadow-2xl">
          <div className="overflow-hidden rounded-[1.5rem] bg-black shadow-xl">
            <div className="relative overflow-hidden rounded-[2rem] bg-slate-950 p-5 shadow-2xl">
  <a
    href="https://www.youtube.com/watch?v=wIRAONZ-YW4"
    target="_blank"
    rel="noreferrer"
    className="flex min-h-[360px] items-center justify-center rounded-[1.5rem] bg-gradient-to-br from-red-900 to-slate-800 text-center text-white"
  >
    <div>
      <PlayCircle className="mx-auto mb-5 text-amber-300" size={72} />
      <h3 className="text-3xl font-black">MBA Law Academy Video Series</h3>
      <p className="mx-auto mt-4 max-w-md text-slate-300">
        Click here to watch the video on YouTube
      </p>
    </div>
  </a>
</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function UsefulLinks() {
  return (
    <section id="useful-links" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionTitle
          eyebrow="Resources"
          title="Useful legal links and downloads"
          text="A clean resource hub for legal acts, dictionaries, formats, translations, and important legal reference materials."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {usefulCards.map((card) => (
            <div key={card.title} className="group rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 text-red-900">
                <card.icon size={28} />
              </div>
              <h3 className="text-xl font-black text-slate-950">{card.title}</h3>
              <p className="mt-3 min-h-20 leading-7 text-slate-600">{card.text}</p>
              <button className="mt-5 inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-black text-white group-hover:bg-red-900">
                {card.button} <ExternalLink size={15} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function OfficeBearers() {
  return (
    <section className="bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionTitle
          eyebrow="Leadership"
          title="Office Bearers"
          text="Showcase the current executive committee and maintain year-wise archive pages for previous terms."
        />
        <div className="grid gap-6 md:grid-cols-4">
          {officeBearers.map((member) => (
            <div key={member.role} className="rounded-[2rem] border border-white/10 bg-white/10 p-5 backdrop-blur-sm">
              <div className="mb-5 flex h-40 items-center justify-center rounded-[1.5rem] bg-gradient-to-br from-amber-300 to-red-900 text-4xl font-black text-white">
                {member.role.charAt(0)}
              </div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-amber-300">{member.role}</p>
              <h3 className="mt-2 text-xl font-black">{member.name}</h3>
              <p className="mt-2 text-sm text-slate-300">Term {member.term}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MembersPortal() {
  return (
    <section id="members" className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.28em] text-red-800">Members</p>
          <h2 className="mt-4 text-4xl font-black text-slate-950 md:text-5xl">Member login and advocate directory</h2>
          <p className="mt-6 leading-8 text-slate-600">
            Add secure member login, profile management, membership renewal, circular downloads, event registration, and directory search.
          </p>
        </div>
        <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-xl shadow-slate-200/70">
          <div className="relative">
            <Search className="absolute left-4 top-4 text-slate-400" size={20} />
            <input className="w-full rounded-2xl border border-slate-200 bg-white py-4 pl-12 pr-4 outline-none focus:border-red-800" placeholder="Search member name or enrollment number" />
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <button className="rounded-2xl bg-red-900 px-5 py-4 font-black text-white hover:bg-red-800">Search Directory</button>
            <button className="rounded-2xl border border-slate-300 bg-white px-5 py-4 font-black text-slate-950 hover:border-red-900">Member Login</button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Associations() {
  return (
    <section id="associations" className="bg-slate-100 py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionTitle eyebrow="Associations" title="Important institutions and links" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {associationLinks.map((link) => (
            <a key={link.title} href={link.url} target="_blank" rel="noopener noreferrer" className="flex min-h-32 items-center justify-center rounded-3xl border border-slate-200 bg-white p-5 text-center text-sm font-black text-slate-700 shadow-sm transition hover:-translate-y-1 hover:border-amber-300 hover:text-red-900 hover:shadow-xl">
              {link.title} <ExternalLink size={14} className="ml-2" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-[1.2fr_1fr_0.8fr] lg:px-8">
        <div>
          <Logo />
          <p className="mt-6 max-w-md leading-8 text-slate-300">
            1st Floor, High Court, Main Building, Chennai - 600104. A modern web prototype for association communication, resources, and member services.
          </p>
        </div>
        <div className="space-y-4 text-slate-300">
          <p className="flex items-center gap-3"><Phone size={18} className="text-amber-300" /> (+91) 44 25342160 / 7200019503</p>
          <p className="flex items-center gap-3"><Mail size={18} className="text-amber-300" /> chennbar@gmail.com</p>
          <p className="flex items-center gap-3"><MapPin size={18} className="text-amber-300" /> High Court, Chennai</p>
        </div>
        <div className="flex flex-col gap-3 text-sm font-semibold text-slate-300">
          <a href="#" className="hover:text-amber-300">Terms And Conditions</a>
          <a href="#" className="hover:text-amber-300">Disclaimer</a>
          <a href="#" className="hover:text-amber-300">Privacy Policy</a>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-sm text-slate-400">
        © Madras Bar Association. Designed and Created By Machine Vogue Technology.
      </div>
    </footer>
  );
}

export default function MadrasBarAssociationModernPrototype() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Header />
      <Hero />
      <Stats />
      <About />
      <Academy />
      <UsefulLinks />
      <OfficeBearers />
      <MembersPortal />
      <Associations />
      <Footer />
    </div>
  );
}
