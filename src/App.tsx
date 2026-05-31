import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Globe2,
  ExternalLink,
  FileText,
  BadgeCheck,
} from "lucide-react";

type CVView = "sidebar" | "full";

const portfolioWebsiteUrl = "https://dongbuuwns.wixsite.com/nathancampbellav";
const credlyUrl = "https://www.credly.com/users/nathan-campbell.a0bb7503";

const badges = [
  {
    src: "/badges/avid-pro-tools-game-audio-specialist.png",
    alt: "Avid Pro Tools Specialist and Pro Tools Game Audio Specialist certification badge",
    label: "Pro Tools Specialist",
  },
  {
    src: "/badges/wwise-101.png",
    alt: "Audiokinetic Wwise 101 fundamentals badge",
    label: "Wwise 101",
  },
  {
    src: "/badges/sololearn-python-developer.png",
    alt: "SoloLearn Python Developer certificate badge",
    label: "Python Developer",
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
    <div className="relative z-20 w-full max-w-6xl mb-5 rounded-3xl border border-[#22f3b7]/25 bg-[#020617]/90 shadow-[0_0_30px_rgba(34,243,183,0.2)] p-5">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-[#22f3b7]">
            Nathan Campbell
          </p>
          <h1 className="text-2xl font-extrabold text-[#e5e7eb]">
            Audio / Technical Sound CV
          </h1>
          <p className="mt-1 text-sm text-[#9ca3af] max-w-2xl">
            Select the CV layout, open the portfolio website, or view my
            Credly profile.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setView("sidebar")}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
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
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
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
            className="inline-flex items-center gap-2 rounded-full border border-[#38bdf8]/40 px-4 py-2 text-sm font-semibold text-[#d1d5db] hover:bg-[#38bdf8]/10"
          >
            Portfolio Website <ExternalLink className="h-4 w-4" />
          </a>

          <a
            href={credlyUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[#a855f7]/40 px-4 py-2 text-sm font-semibold text-[#d1d5db] hover:bg-[#a855f7]/10"
          >
            View Credly <FileText className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-4 border-t border-[#1f2937] pt-4">
        {badges.map((badge) => (
          <div
            key={badge.label}
            className="flex items-center gap-3 rounded-2xl border border-[#1f2937] bg-[#020617]/70 px-3 py-2"
          >
            <img
              src={badge.src}
              alt={badge.alt}
              className="h-12 w-12 object-contain"
            />
            <div>
              <p className="text-xs font-semibold text-[#e5e7eb]">
                {badge.label}
              </p>
              <p className="text-[11px] text-[#9ca3af]">Certification badge</p>
            </div>
          </div>
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
      <div className="flex items-center gap-2">
        <Globe2 className="h-4 w-4 text-[#22f3b7]" />
        <span>Mandarin learner — HSK-1 / HSK-2 developing</span>
      </div>
    </div>
  );
}

function BadgeMiniRow() {
  return (
    <div className="flex flex-wrap gap-3">
      {badges.map((badge) => (
        <div
          key={badge.label}
          className="rounded-2xl border border-[#1f2937] bg-[#020617]/60 p-2"
        >
          <img
            src={badge.src}
            alt={badge.alt}
            className="h-16 w-16 object-contain"
          />
        </div>
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
        calculator for axial room-mode and RT60 estimation. These projects have
        pushed my interest toward practical acoustics, DSP literacy, audio
        analysis, implementation workflows, and software-supported sound design.
      </p>
      <p>
        I am currently strengthening my programming and audio-technology
        foundation through IBM&apos;s Python for Data Science, AI &amp;
        Development and Coursera&apos;s Audio Signal Processing for Music
        Applications, with SoloLearn Python Developer kept as an additional
        foundational certificate. Longer term, I am interested in expanding into
        a broader software engineering certificate pathway where it supports
        audio tools, acoustics, interactive audio, and technical sound design.
      </p>
      <p>
        My certification record also includes Audiokinetic Wwise 101 and Avid
        Pro Tools credentials across separate Pro Tools Specialist and Pro Tools
        Game Audio Specialist pathways, supporting both post-production workflow
        and game-audio implementation practice.
      </p>
    </div>
  );
}

function GoalsBlock() {
  return (
    <div className="space-y-2 text-sm text-[#d1d5db]">
      <p className="flex gap-2">
        <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#22f3b7]" />
        Develop stronger technical sound design work across Pro Tools, Wwise
        101 workflows, Reaper spatial audio, acoustics, audio signal processing,
        and Python-based audio tooling.
      </p>
      <p className="flex gap-2">
        <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#22f3b7]" />
        Build portfolio projects that connect sound design, game audio
        implementation, XR/immersive audio, UX/product sound, acoustic analysis,
        DSP concepts, and practical software-supported audio workflows.
      </p>
      <p className="flex gap-2">
        <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#22f3b7]" />
        Progress from IBM Python, audio signal processing, and portfolio-led
        acoustic tools toward broader software engineering study where it
        supports audio-focused technical roles.
      </p>
    </div>
  );
}

function SidebarCV() {
  return (
    <div className="relative z-10 flex w-full max-w-6xl overflow-hidden rounded-3xl border border-[#22f3b7]/25 bg-gradient-to-br from-[#020617]/95 via-[#020617] to-[#020617] shadow-[0_0_40px_rgba(34,243,183,0.28)]">
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
            Certification Badges
          </h2>
          <div className="h-px w-16 rounded-full bg-gradient-to-r from-[#22f3b7] via-[#38bdf8] to-transparent" />
          <BadgeMiniRow />
        </div>

        <div className="space-y-3">
          <h2 className="text-sm font-semibold tracking-wide text-[#e5e7eb]">
            Technical Skills
          </h2>
          <div className="h-px w-16 rounded-full bg-gradient-to-r from-[#22f3b7] via-[#a855f7] to-transparent" />
          <ul className="list-disc list-inside space-y-1 text-xs text-[#d1d5db]">
            <li>Pro Tools Studio</li>
            <li>Wwise Events, RTPCs & Soundcaster</li>
            <li>Reaper spatial / ambisonic workflows</li>
            <li>Python acoustic calculation</li>
            <li>CSV / plotting / technical documentation</li>
            <li>Foley, dialogue editing & audio capture</li>
            <li>Studio signal flow & troubleshooting</li>
            <li>Windows & macOS</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h2 className="text-sm font-semibold tracking-wide text-[#e5e7eb]">
            Key Skills
          </h2>
          <div className="h-px w-16 rounded-full bg-gradient-to-r from-[#22f3b7] via-[#38bdf8] to-transparent" />
          <ul className="list-disc list-inside space-y-1 text-xs text-[#d1d5db]">
            <li>Sound design & post-production</li>
            <li>Mix automation & stem prep</li>
            <li>Interactive audio systems</li>
            <li>Spatial / immersive audio</li>
            <li>Technical troubleshooting</li>
            <li>Portfolio documentation</li>
            <li>International touring musician</li>
            <li>Team collaboration</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h2 className="text-sm font-semibold tracking-wide text-[#e5e7eb]">
            Current Direction
          </h2>
          <div className="h-px w-16 rounded-full bg-gradient-to-r from-[#22f3b7] via-[#a855f7] to-transparent" />
          <ul className="list-disc list-inside space-y-1 text-xs text-[#d1d5db]">
            <li>Technical sound design</li>
            <li>Game audio implementation</li>
            <li>Acoustics & audio signal processing</li>
            <li>Python audio tools</li>
            <li>Software engineering foundations</li>
          </ul>
        </div>
      </aside>

      <main className="flex-1 p-10 md:p-12 space-y-10">
        <section className="space-y-4">
          <SectionTitle>Personal Profile</SectionTitle>
          <ProfileText />
        </section>

        <section className="space-y-4">
          <SectionTitle colour="purple">Education & Certification</SectionTitle>
          <div className="space-y-3 text-sm text-[#d1d5db]">
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
                PT101 and PT110 completed; Avid Certified Pro Tools
                Specialist and Avid Certified Pro Tools Game Audio Specialist
                recorded as separate Credly transcripts / certification pathways
              </p>
            </div>

            <div>
              <p className="font-semibold text-[#e5e7eb]">
                Audiokinetic Wwise 101
              </p>
              <p className="text-[#9ca3af]">
                Interactive audio and implementation fundamentals completed
              </p>
            </div>

            <div>
              <p className="font-semibold text-[#e5e7eb]">
                SoloLearn Python Developer
              </p>
              <p className="text-[#9ca3af]">
                Python Developer certificate completed
              </p>
            </div>

            <div>
              <p className="font-semibold text-[#e5e7eb]">
                Coursera / IBM Python Learning
              </p>
              <p className="text-[#9ca3af]">
                IBM Python for Data Science, AI &amp; Development and
                Coursera Audio Signal Processing for Music Applications in
                progress
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
        </section>

        <section className="space-y-4">
          <SectionTitle>Portfolio / Technical Project Focus</SectionTitle>
          <ul className="list-disc list-inside space-y-2 text-sm text-[#d1d5db]">
            <li>
              Pro Tools film sound redesign work covering foley, dialogue,
              ambience, SFX, routing, automation, stem printing and final
              bounce.
            </li>
            <li>
              Wwise adaptive radio prototype using Events, Switches, RTPCs,
              containers and Soundcaster testing.
            </li>
            <li>
              Reaper spatial audio project using ambisonic / binaural workflow
              and environmental sound placement.
            </li>
            <li>
              Python acoustic calculator for CAD room study, calculating axial
              modes and RT60 with table, CSV and plot output.
            </li>
          </ul>
        </section>


        <section className="space-y-4">
          <SectionTitle>Goals</SectionTitle>
          <GoalsBlock />
        </section>

        <section className="space-y-4 pb-4">
          <SectionTitle colour="purple">Professional Experience</SectionTitle>
          <div className="space-y-5 text-sm text-[#d1d5db]">
            <div>
              <h3 className="text-base font-semibold text-[#e5e7eb]">
                Independent Audio Portfolio & Technical Development —
                Self-Directed / Informal Freelance
              </h3>
              <p className="italic text-[#9ca3af]">
                2021 – Present · Glasgow / Remote
              </p>
              <ul className="mt-1 list-disc list-inside space-y-1">
                <li>
                  Developed Pro Tools portfolio projects covering foley,
                  dialogue editing, ambience construction, routing, automation,
                  plug-in processing, stem preparation and final delivery.
                </li>
                <li>
                  Built Wwise interactive audio demonstrations using Events,
                  RTPCs, States, Switches, containers and Soundcaster testing.
                </li>
                <li>
                  Produced Reaper spatial / ambisonic audio work with binaural
                  and immersive portfolio deliverables.
                </li>
                <li>
                  Created a Python acoustic calculator for axial room-mode and
                  RT60 estimation with table, CSV and plot output.
                </li>
                <li>
                  Continued technical study through Avid Pro Tools, Wwise
                  101, IBM Python for Data Science, AI &amp; Development,
                  Coursera Audio Signal Processing for Music Applications and
                  SoloLearn Python Developer.
                </li>
              </ul>
              <p className="mt-2 text-xs text-[#9ca3af]">
                Note: no formal paid employment held since August 2021; this
                period has focused on independent portfolio development,
                certification and technical study.
              </p>
            </div>

            <div>
              <h3 className="text-base font-semibold text-[#e5e7eb]">
                Customer Service Assistant — Toolstation
              </h3>
              <p className="italic text-[#9ca3af]">May 2020 – August 2021</p>
              <ul className="mt-1 list-disc list-inside space-y-1">
                <li>
                  Delivered customer support across trade tools and equipment.
                </li>
                <li>
                  Managed stock control, warehouse organisation and inventory
                  checks.
                </li>
                <li>
                  Processed returns, deliveries and secure cash operations.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-base font-semibold text-[#e5e7eb]">
                Touring Guitarist — Clawhammer
              </h3>
              <p className="italic text-[#9ca3af]">2017 – 2019</p>
              <ul className="mt-1 list-disc list-inside space-y-1">
                <li>
                  Performed internationally and collaborated with live sound
                  teams in high-pressure performance environments.
                </li>
                <li>
                  Developed stagecraft, reliability, timing, communication and
                  professional preparation.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-base font-semibold text-[#e5e7eb]">
                Bartender / Events Assistant — OVO Hydro & SEC
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
        </section>
      </main>
    </div>
  );
}

function FullCV() {
  return (
    <div className="relative z-10 w-full max-w-6xl rounded-3xl border border-[#22f3b7]/25 bg-gradient-to-br from-[#020617]/95 via-[#020617] to-[#020617] shadow-[0_0_40px_rgba(34,243,183,0.28)] px-10 py-10 space-y-10">
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
        <SectionTitle colour="purple">Key Skills</SectionTitle>
        <div className="grid grid-cols-1 gap-6 text-sm text-[#d7dfdf] md:grid-cols-2">
          <ul className="list-disc list-inside space-y-2">
            <li>Audio engineering and sound design</li>
            <li>Mixing, editing and stem preparation in Pro Tools</li>
            <li>Foley, dialogue editing and multitrack recording</li>
            <li>Interactive audio implementation concepts</li>
            <li>Wwise Events, RTPCs, Switches and Soundcaster testing</li>
            <li>Spatial audio, ambisonics and binaural workflows</li>
            <li>Python audio / acoustic calculation</li>
          </ul>

          <ul className="list-disc list-inside space-y-2">
            <li>Technical troubleshooting and file management</li>
            <li>Digital asset organisation and documentation</li>
            <li>Game modding and digital file systems</li>
            <li>Music creation, performance and composition</li>
            <li>International touring musician</li>
            <li>Team collaboration and communication</li>
            <li>Mandarin Chinese — HSK-2 developing</li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <SectionTitle>Education & Certification</SectionTitle>
        <div className="grid grid-cols-1 gap-6 text-sm text-[#d7dfdf] md:grid-cols-2">
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>BDes Sound for the Moving Image</strong>
              <br />
              Glasgow School of Art — completed undergraduate degree
            </li>
            <li>
              <strong>HND Sound Production</strong> — Grade B
              <br />
              Glasgow Clyde College
            </li>
            <li>
              <strong>Avid Pro Tools Certification</strong>
              <br />
              PT101 and PT110 completed; Avid Certified Pro Tools
              Specialist and Avid Certified Pro Tools Game Audio Specialist
              recorded as separate Credly transcripts / certification pathways
            </li>
            <li>
              <strong>Audiokinetic Wwise 101</strong>
              <br />
              Interactive audio and implementation fundamentals completed
            </li>
            <li>
              <strong>SoloLearn Python Developer</strong>
              <br />
              Python Developer certificate completed
            </li>
          </ul>

          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Coursera Audio Signal Processing for Music Applications</strong>
              <br />
              Ongoing DSP, spectral processing and Python audio learning
            </li>
            <li>
              <strong>IBM Python for Data Science, AI &amp; Development</strong>
              <br />
              Ongoing Python foundations, notebooks, data handling and
              AI-adjacent technical workflow learning
            </li>
            <li>
              <strong>Advanced Higher</strong>
              <br />
              Music Technology — Full Credits Awarded; English C
            </li>
            <li>
              <strong>Highers</strong>
              <br />
              Music Technology A, English B, Maths B, Graphics B, Computing B,
              Physics C, Physical Education B
            </li>
            <li>
              <strong>Other Certifications</strong>
              <br />
              HSK-1 Mandarin, Medics Against Violence, Strathclyde S@S Physics
            </li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <SectionTitle colour="purple">
          Portfolio / Technical Project Focus
        </SectionTitle>
        <div className="grid grid-cols-1 gap-5 text-sm text-[#d1d5db] md:grid-cols-2">
          <div className="rounded-2xl border border-[#1f2937] bg-[#020617]/60 p-4">
            <h3 className="font-semibold text-[#e5e7eb]">
              Pro Tools Sound Redesign
            </h3>
            <p className="mt-1 text-[#9ca3af]">
              Foley, dialogue editing, ambience, SFX layering, routing folders,
              aux sends, automation, plug-in processing, stem printing and final
              bounce delivery.
            </p>
          </div>

          <div className="rounded-2xl border border-[#1f2937] bg-[#020617]/60 p-4">
            <h3 className="font-semibold text-[#e5e7eb]">
              Wwise Adaptive Radio
            </h3>
            <p className="mt-1 text-[#9ca3af]">
              Wwise-only Soundcaster demo using Events, RTPCs, Switches,
              containers, interference control and adaptive radio behaviour.
            </p>
          </div>

          <div className="rounded-2xl border border-[#1f2937] bg-[#020617]/60 p-4">
            <h3 className="font-semibold text-[#e5e7eb]">
              Ambisonic / Binaural Spatial Audio
            </h3>
            <p className="mt-1 text-[#9ca3af]">
              Reaper spatial workflow using ambisonic routing, binaural
              rendering and environmental sound placement for immersive
              audiovisual presentation.
            </p>
          </div>

          <div className="rounded-2xl border border-[#1f2937] bg-[#020617]/60 p-4">
            <h3 className="font-semibold text-[#e5e7eb]">
              Python CAD Acoustic Tool
            </h3>
            <p className="mt-1 text-[#9ca3af]">
              Simple Python calculator for room dimensions, axial room modes,
              RT60 estimation, CSV export and plotted acoustic results.
            </p>
          </div>
        </div>
      </section>


      <section className="space-y-4">
        <SectionTitle colour="purple">Goals</SectionTitle>
        <GoalsBlock />
      </section>

      <section className="space-y-4 pb-2">
        <SectionTitle>Professional Experience</SectionTitle>
        <div className="space-y-5 text-sm text-[#d1d5db]">
          <div>
            <h3 className="text-base font-semibold text-[#e5e7eb]">
              Independent Audio Portfolio & Technical Development —
              Self-Directed / Informal Freelance
            </h3>
            <p className="italic text-[#9ca3af]">
              2021 – Present · Glasgow / Remote
            </p>
            <ul className="mt-1 list-disc list-inside space-y-1">
              <li>
                Developed sound design and post-production portfolio projects
                using Pro Tools, including foley, dialogue editing, ambience
                construction, routing, automation, plug-in processing, stem
                preparation and final bounce delivery.
              </li>
              <li>
                Built Wwise interactive audio demonstrations using Events,
                RTPCs, States, Switches, containers and Soundcaster testing.
              </li>
              <li>
                Produced spatial and immersive audio work in Reaper, including
                ambisonic / binaural routing, environmental sound placement and
                rendered portfolio deliverables.
              </li>
              <li>
                Created a Python-based acoustic calculator for a CAD spatial
                audio reproduction room study, estimating axial room modes and
                RT60 while exporting tables, CSV data and plotted results.
              </li>
              <li>
                Continued technical study through Avid Pro Tools, Wwise 101,
                IBM Python for Data Science, AI &amp; Development, Coursera
                Audio Signal Processing for Music Applications and SoloLearn
                Python Developer.
              </li>
              <li>
                Provided small-scale informal audio support for media projects
                where required.
              </li>
            </ul>
            <p className="mt-2 text-xs text-[#9ca3af]">
              Note: no formal paid employment held since August 2021; this
              period has focused on independent portfolio development,
              certification and technical study.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-[#e5e7eb]">
              Customer Service Assistant — Toolstation
            </h3>
            <p className="italic text-[#9ca3af]">May 2020 – August 2021</p>
            <ul className="mt-1 list-disc list-inside space-y-1">
              <li>
                Provided customer support across trade tools and equipment.
              </li>
              <li>
                Performed stock control, inventory checks and warehouse
                organisation.
              </li>
              <li>Processed deliveries, returns and secure cash-handling.</li>
              <li>Maintained safe, clean and efficient store operations.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold text-[#e5e7eb]">
              Bartender / Events Assistant — OVO Hydro & SEC
            </h3>
            <p className="italic text-[#9ca3af]">July 2019 – February 2020</p>
            <ul className="mt-1 list-disc list-inside space-y-1">
              <li>
                Worked across bar, stewarding and kitchen roles during major
                events.
              </li>
              <li>Adapted to fast-paced, high-volume live environments.</li>
              <li>Supported venue safety and event logistics teams.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold text-[#e5e7eb]">
              Guitar Tutor — Freelance
            </h3>
            <p className="italic text-[#9ca3af]">2016 – 2018</p>
            <ul className="mt-1 list-disc list-inside space-y-1">
              <li>
                Taught technique, rhythm, performance and theory to beginner and
                intermediate students.
              </li>
              <li>Designed structured lesson plans and practice routines.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold text-[#e5e7eb]">
              Touring Guitarist — Clawhammer
            </h3>
            <p className="italic text-[#9ca3af]">2017 – 2019</p>
            <ul className="mt-1 list-disc list-inside space-y-1">
              <li>
                Performed internationally supporting established heavy bands.
              </li>
              <li>
                Collaborated with FOH and monitor engineers to optimise tone and
                stage sound.
              </li>
              <li>
                Developed stagecraft, reliability and adaptability in
                high-pressure live settings.
              </li>
            </ul>
          </div>
        </div>
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
