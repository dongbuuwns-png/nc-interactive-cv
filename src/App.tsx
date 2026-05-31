import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Globe2,
  ExternalLink,
  FileText,
  BadgeCheck,
  Github,
} from "lucide-react";

type CVView = "sidebar" | "full";

type BadgeItem = {
  imageSrc: string;
  certHref: string;
  alt: string;
  label: string;
};

type CertificateItem = {
  certHref: string;
  previewSrc: string;
  label: string;
  subtitle: string;
};

const asset = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;

const portfolioWebsiteUrl = "https://dongbuuwns.wixsite.com/nathancampbellav";
const credlyUrl = "https://www.credly.com/users/nathan-campbell.a0bb7503";
const githubUrl = "https://github.com/dongbuuwns-png/nc-interactive-cv";

const topBadges: BadgeItem[] = [
  {
    imageSrc: asset("badges/avid-pro-tools-game-audio-specialist.png"),
    certHref: asset("certificates/pro-tools-specialist-certifcate.pdf"),
    alt: "Avid Pro Tools Specialist certification badge",
    label: "Pro Tools Specialist",
  },
  {
    imageSrc: asset("badges/wwise-101.png"),
    certHref: asset("certificates/wwise-fundamentals-certificate.pdf"),
    alt: "Audiokinetic Wwise 101 certification badge",
    label: "Wwise 101",
  },
  {
    imageSrc: asset("badges/sololearn-introduction-to-python.png"),
    certHref: asset(
      "certificates/sololearn-introduction-to-python-certificate.pdf"
    ),
    alt: "SoloLearn Introduction to Python badge",
    label: "Introduction to Python",
  },
];

const certificates: CertificateItem[] = [
  {
    certHref: asset("certificates/pro-tools-specialist-certifcate.pdf"),
    previewSrc: asset("certificate-previews/pro-tools-specialist.png"),
    label: "Pro Tools Specialist",
    subtitle: "Avid certificate",
  },
  {
    certHref: asset(
      "certificates/pro-tools-game-audio-specialist-certification.pdf"
    ),
    previewSrc: asset(
      "certificate-previews/pro-tools-game-audio-specialist.png"
    ),
    label: "Pro Tools Game Audio Specialist",
    subtitle: "Avid certificate",
  },
  {
    certHref: asset("certificates/wwise-fundamentals-certificate.pdf"),
    previewSrc: asset("certificate-previews/wwise-fundamentals.png"),
    label: "Wwise Fundamentals",
    subtitle: "Audiokinetic certificate",
  },
  {
    certHref: asset(
      "certificates/sololearn-introduction-to-python-certificate.pdf"
    ),
    previewSrc: asset(
      "certificate-previews/sololearn-introduction-to-python.png"
    ),
    label: "Introduction to Python",
    subtitle: "SoloLearn certificate",
  },
];

function TopControls({
  view,
  setView,
}: {
  view: CVView;
  setView: React.Dispatch<React.SetStateAction<CVView>>;
}) {
  return (
    <div className="relative z-20 mb-5 w-full max-w-7xl rounded-3xl border border-[#22f3b7]/25 bg-[#020617]/90 p-5 shadow-[0_0_30px_rgba(34,243,183,0.2)]">
      <div className="grid gap-5 xl:grid-cols-[1fr_auto] xl:items-start">
        <div className="min-w-0">
          <p className="text-xs uppercase tracking-[0.24em] text-[#22f3b7]">
            Nathan Campbell
          </p>
          <h1 className="text-2xl font-extrabold text-[#e5e7eb]">
            Audio / Technical Sound CV
          </h1>
          <p className="mt-1 max-w-3xl text-sm text-[#9ca3af]">
            Select the CV layout, open the portfolio website, view my Credly
            profile, open my GitHub repository, or click a badge to open its
            certificate.
          </p>
        </div>

        <div className="flex shrink-0 flex-nowrap items-center gap-2 overflow-x-auto pb-1">
          <button
            type="button"
            onClick={() => setView("sidebar")}
            className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition ${
              view === "sidebar"
                ? "bg-[#22f3b7] text-[#020617]"
                : "border border-[#22f3b7]/30 text-[#d1d5db] hover:bg-[#22f3b7]/10"
            }`}
          >
            Sidebar CV
          </button>

          <button
            type="button"
            onClick={() => setView("full")}
            className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition ${
              view === "full"
                ? "bg-[#22f3b7] text-[#020617]"
                : "border border-[#22f3b7]/30 text-[#d1d5db] hover:bg-[#22f3b7]/10"
            }`}
          >
            Full CV
          </button>

          <a
            href={portfolioWebsiteUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex whitespace-nowrap items-center gap-2 rounded-full border border-[#38bdf8]/40 px-4 py-2 text-sm font-semibold text-[#d1d5db] hover:bg-[#38bdf8]/10"
          >
            Portfolio <ExternalLink className="h-4 w-4" />
          </a>

          <a
            href={credlyUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex whitespace-nowrap items-center gap-2 rounded-full border border-[#a855f7]/40 px-4 py-2 text-sm font-semibold text-[#d1d5db] hover:bg-[#a855f7]/10"
          >
            Credly <FileText className="h-4 w-4" />
          </a>

          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex whitespace-nowrap items-center gap-2 rounded-full border border-[#64748b]/50 px-4 py-2 text-sm font-semibold text-[#d1d5db] hover:bg-[#64748b]/10"
          >
            GitHub <Github className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-4 border-t border-[#1f2937] pt-4">
        {topBadges.map((badge) => (
          <a
            key={badge.label}
            href={badge.certHref}
            target="_blank"
            rel="noreferrer"
            className="flex min-w-[210px] items-center gap-3 rounded-2xl border border-[#1f2937] bg-[#020617]/70 px-3 py-2 transition hover:border-[#22f3b7]/50 hover:bg-[#22f3b7]/5"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-lg">
              <img
                src={badge.imageSrc}
                alt={badge.alt}
                className="max-h-12 max-w-12 object-contain"
              />
            </div>

            <div>
              <p className="text-xs font-semibold text-[#e5e7eb]">
                {badge.label}
              </p>
              <p className="text-[11px] text-[#9ca3af]">Certification badge</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

function SectionTitle({
  children,
  colour = "cyan",
}: {
  children: React.ReactNode;
  colour?: "cyan" | "purple";
}) {
  return (
    <div className="space-y-2">
      <h2 className="text-xl font-semibold text-[#e5e7eb]">{children}</h2>
      <div
        className={`h-px w-24 rounded-full bg-gradient-to-r ${
          colour === "purple"
            ? "from-[#22f3b7] via-[#a855f7] to-transparent"
            : "from-[#22f3b7] via-[#38bdf8] to-transparent"
        }`}
      />
    </div>
  );
}

function ContactBlock() {
  return (
    <div className="space-y-3 text-sm text-[#d1d5db]">
      <div className="flex items-center gap-2">
        <MapPin className="h-4 w-4 text-[#22f3b7]" />
        <span>Glasgow, UK</span>
      </div>

      <div className="flex items-center gap-2">
        <Mail className="h-4 w-4 text-[#22f3b7]" />
        <span>dongbuuwns@gmail.com</span>
      </div>

      <div className="flex items-center gap-2">
        <Phone className="h-4 w-4 text-[#22f3b7]" />
        <span>07754598513</span>
      </div>

      <a
        href={githubUrl}
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-2 hover:text-[#22f3b7]"
      >
        <Github className="h-4 w-4 text-[#22f3b7]" />
        <span>GitHub repository</span>
      </a>

      <div className="flex items-center gap-2">
        <Globe2 className="h-4 w-4 text-[#22f3b7]" />
        <span>Mandarin learner — HSK-1 / HSK-2 developing</span>
      </div>
    </div>
  );
}

function CertificateGrid({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={
        compact
          ? "grid grid-cols-1 gap-4"
          : "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
      }
    >
      {certificates.map((certificate) => (
        <div
          key={certificate.label}
          className="group overflow-hidden rounded-2xl border border-[#1f2937] bg-[#020617]/60 transition hover:border-[#22f3b7]/50 hover:bg-[#22f3b7]/5"
        >
          <a
            href={certificate.certHref}
            target="_blank"
            rel="noreferrer"
            className="block"
          >
            <div
              className={
                compact
                  ? "flex h-36 w-full items-center justify-center overflow-hidden bg-white"
                  : "flex h-44 w-full items-center justify-center overflow-hidden bg-white"
              }
            >
              <img
                src={certificate.previewSrc}
                alt={`${certificate.label} certificate preview`}
                className="h-full w-full object-cover object-top"
              />
            </div>

            <div className="p-3">
              <p className="text-[11px] font-semibold leading-tight text-[#e5e7eb] group-hover:text-[#22f3b7]">
                {certificate.label}
              </p>
              <p className="mt-0.5 text-[10px] text-[#9ca3af]">
                {certificate.subtitle}
              </p>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
}

function BadgeMiniRow() {
  return (
    <div className="flex flex-wrap gap-3">
      {topBadges.map((badge) => (
        <a
          key={badge.label}
          href={badge.certHref}
          target="_blank"
          rel="noreferrer"
          className="rounded-2xl border border-[#1f2937] bg-[#020617]/60 p-2 transition hover:border-[#22f3b7]/50 hover:bg-[#22f3b7]/5"
        >
          <div className="flex h-16 w-16 items-center justify-center">
            <img
              src={badge.imageSrc}
              alt={badge.alt}
              className="max-h-14 max-w-full object-contain"
            />
          </div>
        </a>
      ))}
    </div>
  );
}

function ProfileText() {
  return (
    <div className="space-y-3 text-sm leading-relaxed text-[#d1d5db]">
      <p>
        Audio engineer, sound designer, and creative technologist with a
        background in sound for moving image, Pro Tools post-production,
        immersive audio, interactive audio systems, and technical portfolio
        development. My current direction is technical sound design: combining
        creative sound design practice with DAW routing, Wwise implementation,
        spatial audio, Python-based audio tools, acoustics, audio signal
        processing, and audiovisual systems thinking.
      </p>

      <p>
        Recent self-directed work includes Pro Tools sound redesign and
        post-production projects, a Wwise 101-informed adaptive radio prototype,
        Reaper ambisonic/binaural spatial audio work, and a Python acoustic
        calculator for axial room-mode and RT60 estimation. These projects
        connect practical acoustics, DSP literacy, audio analysis,
        implementation, and portfolio-led sound design development.
      </p>

      <p>
        I am currently strengthening my programming and audio-technology
        foundation through IBM&apos;s Python for Data Science, AI &amp;
        Development and Coursera&apos;s Audio Signal Processing for Music
        Applications, with SoloLearn Introduction to Python kept as an
        additional foundation certificate. I am also interested in building
        enough software engineering knowledge to support audio tools,
        measurement workflows, signal processing, and software-facing audio
        roles.
      </p>

      <p>
        My certification record also includes PT101, PT110, PT130, Audiokinetic
        Wwise Fundamentals, Avid Certified Pro Tools Specialist, and Avid
        Certified Pro Tools Game Audio Specialist pathways, supporting both
        post-production workflow and game-audio implementation practice.
      </p>
    </div>
  );
}

function GoalsBlock() {
  return (
    <div className="space-y-3 text-sm text-[#d1d5db]">
      <p className="flex gap-2">
        <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#22f3b7]" />
        Develop toward high-level acoustics and audio-technology pathways,
        including acoustic consultancy, building and room acoustics, sound
        system design, environmental noise awareness, and technical audio
        problem solving.
      </p>

      <p className="flex gap-2">
        <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#22f3b7]" />
        Strengthen audio signal processing, Python-based audio analysis,
        measurement-led workflows, numerical reasoning, and technical
        documentation for acoustics, sound design, and music-technology
        applications.
      </p>

      <p className="flex gap-2">
        <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#22f3b7]" />
        Build toward spatial audio, immersive sound, auralisation, game audio
        implementation, and interactive audio systems while keeping acoustics
        and psychoacoustics as central technical interests.
      </p>

      <p className="flex gap-2">
        <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#22f3b7]" />
        Prepare for research-facing and postgraduate audio pathways by improving
        analytical listening, modelling, signal flow, programming, project
        management, report writing, and evidence-based technical practice.
      </p>

      <p className="flex gap-2">
        <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#22f3b7]" />
        Keep a light but useful software engineering direction in view, mainly
        where it supports audio tools, DSP learning, acoustic calculators,
        automation scripts, GitHub documentation, and software-facing audio
        roles.
      </p>
    </div>
  );
}

function TechnicalSkillsList({ small = false }: { small?: boolean }) {
  return (
    <ul
      className={
        small
          ? "list-disc list-inside space-y-1 text-xs text-[#d1d5db]"
          : "list-disc list-inside space-y-2 text-sm text-[#d1d5db]"
      }
    >
      <li>Pro Tools Studio</li>
      <li>Wwise Events, RTPCs, Switches &amp; Soundcaster</li>
      <li>Reaper spatial / ambisonic workflows</li>
      <li>Python acoustic calculation</li>
      <li>Audio signal processing foundations</li>
      <li>CSV / plotting / technical documentation</li>
      <li>Foley, dialogue editing &amp; audio capture</li>
      <li>Studio signal flow &amp; troubleshooting</li>
      <li>Windows &amp; macOS</li>
    </ul>
  );
}

function KeySkillsList({ small = false }: { small?: boolean }) {
  return (
    <ul
      className={
        small
          ? "list-disc list-inside space-y-1 text-xs text-[#d1d5db]"
          : "list-disc list-inside space-y-2 text-sm text-[#d1d5db]"
      }
    >
      <li>Sound design &amp; post-production</li>
      <li>Mix automation &amp; stem preparation</li>
      <li>Interactive audio systems</li>
      <li>Spatial / immersive audio</li>
      <li>Acoustics-led technical thinking</li>
      <li>Technical troubleshooting</li>
      <li>Portfolio documentation</li>
      <li>International touring musician</li>
      <li>Team collaboration</li>
    </ul>
  );
}

function CurrentDirectionList({ small = false }: { small?: boolean }) {
  return (
    <ul
      className={
        small
          ? "list-disc list-inside space-y-1 text-xs text-[#d1d5db]"
          : "list-disc list-inside space-y-2 text-sm text-[#d1d5db]"
      }
    >
      <li>Acoustics / acoustic consultancy</li>
      <li>Audio signal processing</li>
      <li>Spatial audio / auralisation</li>
      <li>Technical sound design</li>
      <li>Game audio implementation</li>
      <li>XR / immersive audio</li>
      <li>Python audio tools</li>
      <li>Software-facing audio roles</li>
    </ul>
  );
}

function EducationBlock({ full = false }: { full?: boolean }) {
  return (
    <div
      className={
        full
          ? "grid grid-cols-1 gap-6 text-sm text-[#d7dfdf] md:grid-cols-2"
          : "space-y-3 text-sm text-[#d1d5db]"
      }
    >
      <div className="space-y-3">
        <div>
          <p className="font-semibold text-[#e5e7eb]">
            BDes Sound for the Moving Image
          </p>
          <p className="text-[#9ca3af]">
            Glasgow School of Art — completed undergraduate degree
          </p>
        </div>

        <div>
          <p className="font-semibold text-[#e5e7eb]">
            HND Sound Production — Grade B
          </p>
          <p className="text-[#9ca3af]">Glasgow Clyde College</p>
        </div>

        <div>
          <p className="font-semibold text-[#e5e7eb]">
            Avid Pro Tools Certification
          </p>
          <p className="text-[#9ca3af]">
            PT101, PT110 and PT130 completed; Avid Certified Pro Tools
            Specialist and Avid Certified Pro Tools Game Audio Specialist
            recorded as separate certification pathways/transcripts.
          </p>
        </div>

        <div>
          <p className="font-semibold text-[#e5e7eb]">
            Audiokinetic Wwise Fundamentals / Wwise 101
          </p>
          <p className="text-[#9ca3af]">
            Interactive audio and implementation fundamentals completed.
          </p>
        </div>
      </div>

      <div className="space-y-3">
        <div>
          <p className="font-semibold text-[#e5e7eb]">
            IBM Python for Data Science, AI &amp; Development
          </p>
          <p className="text-[#9ca3af]">
            In progress; supporting Python foundations, notebooks, data
            handling, AI-adjacent workflows, and future technical audio
            applications.
          </p>
        </div>

        <div>
          <p className="font-semibold text-[#e5e7eb]">
            Coursera Audio Signal Processing for Music Applications
          </p>
          <p className="text-[#9ca3af]">
            In progress; supporting DSP literacy, Python audio analysis,
            acoustics interest, and audio-technology development.
          </p>
        </div>

        <div>
          <p className="font-semibold text-[#e5e7eb]">
            SoloLearn Introduction to Python
          </p>
          <p className="text-[#9ca3af]">
            Completed foundation certificate supporting basic Python syntax,
            functions, data structures, and coding confidence.
          </p>
        </div>

        <div>
          <p className="font-semibold text-[#e5e7eb]">
            Additional Programmes / Certifications
          </p>
          <p className="text-[#9ca3af]">
            Strathclyde S@S Physics programme; Medics Against Violence
            certification; HSK-1 Mandarin.
          </p>
        </div>

        <div>
          <p className="font-semibold text-[#e5e7eb]">Highers</p>
          <p className="text-[#9ca3af]">
            Music Technology A, English B, Maths B, Graphics B, Computing B,
            Physics C, Physical Education B
          </p>
        </div>
      </div>
    </div>
  );
}

function ProfessionalExperienceBlock() {
  return (
    <div className="space-y-5 text-sm text-[#d1d5db]">
      <div>
        <h3 className="text-base font-semibold text-[#e5e7eb]">
          Independent Audio Portfolio &amp; Technical Development —
          Self-Directed / Informal Freelance
        </h3>
        <p className="italic text-[#9ca3af]">
          2021 – Present · Glasgow / Remote
        </p>
        <ul className="mt-1 list-disc list-inside space-y-1">
          <li>
            Developed Pro Tools portfolio projects covering foley, dialogue
            editing, ambience construction, routing, automation, plug-in
            processing, stem preparation and final delivery.
          </li>
          <li>
            Built Wwise interactive audio demonstrations using Events, RTPCs,
            States, Switches, containers and Soundcaster testing.
          </li>
          <li>
            Produced Reaper spatial / ambisonic audio work with binaural and
            immersive portfolio deliverables.
          </li>
          <li>
            Created a Python acoustic calculator for axial room-mode and RT60
            estimation with table, CSV and plot output.
          </li>
          <li>
            Continued technical study through Avid, Wwise, IBM Python, Coursera
            Audio Signal Processing, SoloLearn Python foundations, and
            audio-focused programming preparation.
          </li>
        </ul>
        <p className="mt-2 text-xs text-[#9ca3af]">
          Note: no formal paid employment held since August 2021; this period
          has focused on independent portfolio development, certification and
          technical study.
        </p>
      </div>

      <div>
        <h3 className="text-base font-semibold text-[#e5e7eb]">
          Customer Service Assistant — Toolstation
        </h3>
        <p className="italic text-[#9ca3af]">May 2020 – August 2021</p>
        <ul className="mt-1 list-disc list-inside space-y-1">
          <li>Delivered customer support across trade tools and equipment.</li>
          <li>
            Managed stock control, warehouse organisation and inventory checks.
          </li>
          <li>Processed returns, deliveries and secure cash operations.</li>
        </ul>
      </div>

      <div>
        <h3 className="text-base font-semibold text-[#e5e7eb]">
          Touring Guitarist — Clawhammer
        </h3>
        <p className="italic text-[#9ca3af]">2017 – 2019</p>
        <ul className="mt-1 list-disc list-inside space-y-1">
          <li>
            Performed internationally and collaborated with live sound teams in
            high-pressure performance environments.
          </li>
          <li>
            Developed stagecraft, reliability, timing, communication and
            professional preparation.
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-base font-semibold text-[#e5e7eb]">
          Bartender / Events Assistant — OVO Hydro &amp; SEC
        </h3>
        <p className="italic text-[#9ca3af]">July 2019 – February 2020</p>
      </div>

      <div>
        <h3 className="text-base font-semibold text-[#e5e7eb]">
          Guitar Tutor — Freelance
        </h3>
        <p className="italic text-[#9ca3af]">2016 – 2018</p>
      </div>
    </div>
  );
}

function SidebarCV() {
  return (
    <div className="relative z-10 flex w-full max-w-7xl overflow-hidden rounded-3xl border border-[#22f3b7]/25 bg-gradient-to-br from-[#020617]/95 via-[#020617] to-[#020617] shadow-[0_0_40px_rgba(34,243,183,0.28)]">
      <aside className="w-1/3 max-w-sm bg-[#020617]/80 p-8 space-y-9 border-r border-[#1f2937]">
        <div className="space-y-2">
          <h1 className="text-3xl font-extrabold tracking-tight text-[#8de3d1]">
            Nathan Campbell
          </h1>
          <p className="text-xs tracking-wide uppercase text-[#9ca3af]">
            Audio Engineer · Sound Designer · Creative Technologist
          </p>
        </div>

        <ContactBlock />

        <div className="space-y-3">
          <h2 className="text-sm font-semibold tracking-wide text-[#e5e7eb]">
            Certificates
          </h2>
          <div className="h-px w-16 rounded-full bg-gradient-to-r from-[#22f3b7] via-[#38bdf8] to-transparent" />
          <CertificateGrid compact />
        </div>

        <div className="space-y-3">
          <h2 className="text-sm font-semibold tracking-wide text-[#e5e7eb]">
            Technical Skills
          </h2>
          <div className="h-px w-16 rounded-full bg-gradient-to-r from-[#22f3b7] via-[#a855f7] to-transparent" />
          <TechnicalSkillsList small />
        </div>

        <div className="space-y-3">
          <h2 className="text-sm font-semibold tracking-wide text-[#e5e7eb]">
            Key Skills
          </h2>
          <div className="h-px w-16 rounded-full bg-gradient-to-r from-[#22f3b7] via-[#38bdf8] to-transparent" />
          <KeySkillsList small />
        </div>

        <div className="space-y-3">
          <h2 className="text-sm font-semibold tracking-wide text-[#e5e7eb]">
            Current Direction
          </h2>
          <div className="h-px w-16 rounded-full bg-gradient-to-r from-[#22f3b7] via-[#a855f7] to-transparent" />
          <CurrentDirectionList small />
        </div>
      </aside>

      <main className="flex-1 p-10 md:p-12 space-y-10">
        <section className="space-y-4">
          <SectionTitle>Personal Profile</SectionTitle>
          <ProfileText />
        </section>

        <section className="space-y-4">
          <SectionTitle colour="purple">
            Education &amp; Certification
          </SectionTitle>
          <EducationBlock />
        </section>

        <section className="space-y-4">
          <SectionTitle>Goals</SectionTitle>
          <GoalsBlock />
        </section>

        <section className="space-y-4 pb-4">
          <SectionTitle colour="purple">Professional Experience</SectionTitle>
          <ProfessionalExperienceBlock />
        </section>
      </main>
    </div>
  );
}

function FullCV() {
  return (
    <div className="relative z-10 w-full max-w-7xl rounded-3xl border border-[#22f3b7]/25 bg-gradient-to-br from-[#020617]/95 via-[#020617] to-[#020617] px-10 py-10 shadow-[0_0_40px_rgba(34,243,183,0.28)] space-y-10">
      <header className="flex flex-col gap-6 border-b border-[#1f2937] pb-6 md:flex-row md:items-start md:justify-between">
        <div className="space-y-3">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight text-[#8de3d1]">
              Nathan Campbell
            </h1>
            <p className="text-sm tracking-wide uppercase text-[#9ca3af]">
              Audio Engineer · Sound Designer · Creative Technologist
            </p>
          </div>
          <BadgeMiniRow />
        </div>

        <ContactBlock />
      </header>

      <section className="space-y-4">
        <SectionTitle>Personal Profile</SectionTitle>
        <ProfileText />
      </section>

      <section className="space-y-4">
        <SectionTitle colour="purple">Certificates</SectionTitle>
        <CertificateGrid />
      </section>

      <section className="space-y-4">
        <SectionTitle>Technical Skills</SectionTitle>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <TechnicalSkillsList />
          <CurrentDirectionList />
        </div>
      </section>

      <section className="space-y-4">
        <SectionTitle colour="purple">Key Skills</SectionTitle>
        <KeySkillsList />
      </section>

      <section className="space-y-4">
        <SectionTitle>Education &amp; Certification</SectionTitle>
        <EducationBlock full />
      </section>

      <section className="space-y-4">
        <SectionTitle colour="purple">Goals</SectionTitle>
        <GoalsBlock />
      </section>

      <section className="space-y-4">
        <SectionTitle>Professional Experience</SectionTitle>
        <ProfessionalExperienceBlock />
      </section>
    </div>
  );
}

export default function App() {
  const [view, setView] = React.useState<CVView>("sidebar");

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-gradient-to-br from-[#050608] via-[#0b1014] to-[#111827] p-6 font-sans text-[#e7e7e7]">
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(circle_at_1px_1px,#1e293b_1px,transparent_0)] bg-[length:18px_18px]" />

      <div className="relative z-10 flex flex-col items-center">
        <TopControls view={view} setView={setView} />
        {view === "sidebar" ? <SidebarCV /> : <FullCV />}
      </div>
    </div>
  );
}
