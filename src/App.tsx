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
const linkedinUrl = "https://www.linkedin.com/in/nathan-c-8333b018b/";

const topBadges: BadgeItem[] = [
  {
    imageSrc: asset("certificate-previews/pro-tools-specialist.png"),
    certHref: asset("certificate-previews/pro-tools-specialist.png"),
    alt: "Avid Pro Tools Specialist certificate preview",
    label: "Pro Tools Specialist",
  },
  {
    imageSrc: asset("badges/wwise-101.png"),
    certHref: asset("certificates/wwise-fundamentals-certificate.pdf"),
    alt: "Audiokinetic Wwise Fundamentals certification badge",
    label: "Wwise 101",
  },
  {
    imageSrc: asset("badges/sololearn-python-developer.png"),
    certHref: asset("certificates/sololearn-python-developer-certificate.pdf"),
    alt: "SoloLearn Python Developer certification badge",
    label: "Python Developer",
  },
  {
    imageSrc: asset("badges/ibm-python-data-science-ai-development.png"),
    certHref: asset(
      "certificates/ibm-python-data-science-ai-development-certificate.pdf"
    ),
    alt: "IBM Python for Data Science, AI and Development certificate badge",
    label: "IBM Python",
  },
];

const certificates: CertificateItem[] = [
  {
    certHref: asset("certificates/pro-tools-specialist-certificate.pdf"),
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
    certHref: asset("certificates/sololearn-python-developer-certificate.pdf"),
    previewSrc: asset("certificate-previews/sololearn-python-developer.png"),
    label: "Python Developer",
    subtitle: "SoloLearn certificate",
  },
  {
    certHref: asset(
      "certificates/ibm-python-data-science-ai-development-certificate.pdf"
    ),
    previewSrc: asset(
      "certificate-previews/ibm-python-data-science-ai-development-preview.png"
    ),
    label: "IBM Python for Data Science, AI & Development",
    subtitle: "IBM / Coursera certificate",
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
          <h1 className="text-2xl font-extrabold text-[#e5e7eb]">CV</h1>
          <p className="mt-1 max-w-3xl text-sm text-[#9ca3af]">
            Select the layout, open the portfolio website, view my Credly
            profile, open my LinkedIn, open my GitHub repository, or click a
            badge to open its certificate.
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
            Sidebar View
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
            Full View
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
            href={linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex whitespace-nowrap items-center gap-2 rounded-full border border-[#38bdf8]/40 px-4 py-2 text-sm font-semibold text-[#d1d5db] hover:bg-[#38bdf8]/10"
          >
            LinkedIn <ExternalLink className="h-4 w-4" />
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
            <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white">
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
        href={linkedinUrl}
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-2 hover:text-[#22f3b7]"
      >
        <ExternalLink className="h-4 w-4 text-[#22f3b7]" />
        <span>LinkedIn profile</span>
      </a>

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
          : "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
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
                className="h-full w-full object-contain object-center"
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
          <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-lg bg-white">
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
        Audio engineer, sound designer, AI data evaluation contributor and
        remote digital worker with experience across audio post-production,
        dialogue editing, interactive audio, spatial sound, Python learning,
        AI-data evaluation, voice recording, customer-service workflows,
        transcription-adjacent work and platform-based remote tasks.
      </p>

      <p>
        My current direction is technical audio and audio technology: developing
        toward audio programming, Python-based audio tools, acoustics, signal
        processing, interactive audio systems and postgraduate study while
        maintaining a broad, adaptable professional profile for remote AI work,
        customer support, admin, audio QA, voice-data projects and digital
        platform roles.
      </p>

      <p>
        Recent audio work includes Pro Tools sound redesign and post-production
        projects, Wwise interactive audio demonstrations, Reaper
        ambisonic/binaural spatial audio work, dialogue editing and repair
        workflows, and a Python acoustic calculator for axial room-mode and RT60
        estimation. These projects connect creative sound design with practical
        acoustics, DSP literacy, technical documentation, implementation and
        evidence-based audio problem solving.
      </p>

      <p>
        Recent AI and remote platform work includes AI-generated response
        evaluation, prompt and model-output review, side-by-side comparison,
        ranking, image-based AI assessment, visual anomaly checking, voice/audio
        data tasks, spoken prompts, role-play dialogue, customer-service style
        AI interaction, transcription-adjacent review and quality-controlled
        remote submissions.
      </p>

      <p>
        I have completed IBM&apos;s Python for Data Science, AI &amp;
        Development and am currently studying Python for Everybody through the
        University of Michigan online. Alongside SoloLearn Python Developer,
        Coursera Audio Signal Processing for Music Applications, Wwise and Avid
        certification, this supports a practical route toward Python-based audio
        tools, automation scripts, signal processing, software-facing audio
        roles and future postgraduate audio technology study.
      </p>
    </div>
  );
}

function GoalsBlock() {
  return (
    <div className="space-y-3 text-sm text-[#d1d5db]">
      <p className="flex gap-2">
        <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#22f3b7]" />
        Develop toward postgraduate study and professional pathways in
        acoustics, audio programming, audio technology, software development and
        technical sound design.
      </p>

      <p className="flex gap-2">
        <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#22f3b7]" />
        Strengthen Python, audio signal processing, numerical reasoning,
        software-development fundamentals, measurement-led workflows and
        technical documentation for audio, acoustics and digital technical
        roles.
      </p>

      <p className="flex gap-2">
        <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#22f3b7]" />
        Build practical experience with Python-based audio tools, room/acoustic
        analysis, spatial audio, interactive audio systems, game audio
        implementation and software-facing audio workflows.
      </p>

      <p className="flex gap-2">
        <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#22f3b7]" />
        Improve analytical listening, modelling, signal flow, programming,
        project management, report writing and evidence-based technical
        practice.
      </p>

      <p className="flex gap-2">
        <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#22f3b7]" />
        Maintain a broad, adaptable professional profile across audio
        production, AI-data evaluation, remote customer support, admin support,
        voice-data recording, audio QA, technical documentation and digital
        platform-based work.
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
      <li>iZotope RX &amp; Melodyne dialogue repair workflows</li>
      <li>Python fundamentals, notebooks &amp; data handling</li>
      <li>Python acoustic calculation, CSV output &amp; plotting</li>
      <li>Audio signal processing foundations</li>
      <li>Foley, ADR, ambience, SFX &amp; soundscape design</li>
      <li>
        Dialogue editing, audio capture &amp; intelligibility-focused repair
      </li>
      <li>Voice recording, role-play dialogue &amp; speech-data tasks</li>
      <li>AI data annotation, response evaluation &amp; rubric-following</li>
      <li>Prompt evaluation, image assessment &amp; generative AI review</li>
      <li>Customer-support workflows, admin support &amp; scheduling</li>
      <li>Studio signal flow, live sound awareness &amp; troubleshooting</li>
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
      <li>Sound design &amp; audio post-production</li>
      <li>Dialogue editing, Foley, ADR &amp; stem preparation</li>
      <li>Interactive audio systems</li>
      <li>Spatial / immersive audio</li>
      <li>Acoustics-led technical thinking</li>
      <li>Python learning &amp; technical problem solving</li>
      <li>AI data evaluation &amp; written judgement</li>
      <li>Prompt/output review, ranking &amp; discrepancy checking</li>
      <li>Remote voice-data recording &amp; role-play delivery</li>
      <li>Customer-service scenario handling</li>
      <li>Scheduling, admin support &amp; office-style task management</li>
      <li>Clear communication and customer query handling</li>
      <li>Quality assurance, accuracy &amp; guideline-following</li>
      <li>Technical troubleshooting</li>
      <li>Portfolio documentation</li>
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
      <li>Audio programming foundations</li>
      <li>Acoustics / acoustic consultancy</li>
      <li>Audio signal processing</li>
      <li>Spatial audio / auralisation</li>
      <li>Technical sound design</li>
      <li>Game audio implementation</li>
      <li>XR / immersive audio</li>
      <li>Python audio tools</li>
      <li>AI data, voice recording &amp; remote support workflows</li>
      <li>Remote customer support / admin work</li>
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
            Glasgow School of Art — completed bachelor&apos;s degree
          </p>
        </div>

        <div>
          <p className="font-semibold text-[#e5e7eb]">
            HND Sound Production — Grade A
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
            Completed; supporting Python foundations, notebooks, data
            structures, file handling, APIs, web data, pandas, NumPy and
            AI-adjacent technical workflows.
          </p>
        </div>

        <div>
          <p className="font-semibold text-[#e5e7eb]">
            Python for Everybody — University of Michigan
          </p>
          <p className="text-[#9ca3af]">
            Currently studying online; strengthening Python programming
            fundamentals, problem solving, data handling and software-facing
            confidence.
          </p>
        </div>

        <div>
          <p className="font-semibold text-[#e5e7eb]">
            SoloLearn Python Developer
          </p>
          <p className="text-[#9ca3af]">
            Completed Python Developer certificate supporting Python syntax,
            functions, data structures, object-oriented programming and coding
            confidence.
          </p>
        </div>

        <div>
          <p className="font-semibold text-[#e5e7eb]">
            Coursera Audio Signal Processing for Music Applications
          </p>
          <p className="text-[#9ca3af]">
            In progress; supporting DSP literacy, Python audio analysis,
            acoustics interest and audio-technology development.
          </p>
        </div>

        <div>
          <p className="font-semibold text-[#e5e7eb]">
            Additional Programmes / Certifications
          </p>
          <p className="text-[#9ca3af]">
            Project Aether English Generalist; TestGorilla Customer Service
            (Multimedia) — 90th percentile; Strathclyde S@S Physics programme;
            Medics Against Violence certification; HSK-1 Mandarin.
          </p>
        </div>

        <div>
          <p className="font-semibold text-[#e5e7eb]">Highers</p>
          <p className="text-[#9ca3af]">
            Music Technology A, English B, Maths B, Graphics B, Computing B,
            Physical Education B, Physics C
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
          Audio &amp; AI Data Evaluation Contributor — Self Employed / Freelance
        </h3>
        <p className="italic text-[#9ca3af]">
          Nov 2025 – Present · Glasgow Area, United Kingdom · Remote
        </p>
        <ul className="mt-1 list-disc list-inside space-y-1">
          <li>
            Worked across remote AI evaluation, audio-data, voice recording,
            transcription, prompt evaluation, image assessment and
            customer-service role-play tasks.
          </li>
          <li>
            Evaluated AI-generated responses for accuracy, clarity,
            instruction-following, factual consistency, usefulness, tone and
            user intent alignment.
          </li>
          <li>
            Reviewed prompts and model outputs against task rubrics, identifying
            incomplete answers, hallucinated details, weak reasoning, formatting
            errors, safety concerns and constraint failures.
          </li>
          <li>
            Completed generalist AI evaluation tasks involving written
            judgement, side-by-side comparison, ranking, error identification
            and structured feedback.
          </li>
          <li>
            Fixed or flagged discrepancies between prompts, outputs, grading
            criteria and expected task behaviour.
          </li>
          <li>
            Worked with image-based AI tasks including visual anomalies,
            prompt-image mismatches, object inconsistencies, generation errors
            and quality issues.
          </li>
          <li>
            Used AI regeneration prompting to improve image outputs, including
            clearer instructions around composition, missing details, visual
            accuracy, style consistency and unwanted artefacts.
          </li>
          <li>
            Worked with voice/audio data tasks including transcription, spoken
            prompts, role-play dialogue and customer-service style AI
            interaction.
          </li>
          <li>
            Applied audio-production experience to assess speech quality,
            clarity, pronunciation, noise, recording consistency, dialogue
            intelligibility and deliverable suitability.
          </li>
          <li>
            Maintained reliable remote-working habits while following task
            specifications, platform rules, confidentiality expectations and
            quality standards.
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-base font-semibold text-[#e5e7eb]">
          Independent Sound Designer &amp; Audio Engineer — Self Employed /
          Freelance
        </h3>
        <p className="italic text-[#9ca3af]">
          Aug 2024 – Present · Glasgow Area, United Kingdom · Hybrid
        </p>
        <ul className="mt-1 list-disc list-inside space-y-1">
          <li>
            Developed independent sound design and audio engineering work across
            post-production, dialogue editing, interactive audio, spatial sound,
            live sound support and technical audio problem-solving.
          </li>
          <li>
            Built Pro Tools sessions for Foley, ADR, ambience, SFX, soundscape
            design, dialogue editing, routing, automation, stem organisation,
            mix preparation and final bounce/export workflows.
          </li>
          <li>
            Worked with dialogue clean-up and repair workflows using iZotope RX
            and Melodyne, including noise reduction, timing correction, clarity
            improvement, intelligibility-focused editing and surgical audio
            repair.
          </li>
          <li>
            Developed interactive audio work in Wwise using events, RTPCs,
            switches, states, implementation logic, testing workflows and
            technical documentation.
          </li>
          <li>
            Created spatial and immersive audio work using Reaper, ambisonic
            workflows, binaural rendering, movement automation and spatial
            placement techniques.
          </li>
          <li>
            Supported live sound and local performance work including setup,
            signal flow, monitoring awareness, equipment handling, stage
            communication and practical troubleshooting.
          </li>
          <li>
            Collaborated with mixing engineers on recording and multi-stem
            projects, supporting file management, session organisation, mix
            feedback, stem preparation and technical problem-solving.
          </li>
          <li>
            Applied acoustic and computational thinking through Python-supported
            analysis including room mode calculation, RT60 estimation, CSV
            output and data visualisation.
          </li>
          <li>
            Current tools include Pro Tools, Wwise, Reaper, iZotope RX,
            Melodyne, Python audio tools, Yamaha HS9 monitors, Focusrite
            Scarlett interface, Audio-Technica AT2020 microphone and monitoring
            headphones.
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-base font-semibold text-[#e5e7eb]">
          Customer Support Representative — Toolstation
        </h3>
        <p className="italic text-[#9ca3af]">
          Jun 2019 – Sep 2020 · Glasgow, Scotland, United Kingdom · On-site
        </p>
        <ul className="mt-1 list-disc list-inside space-y-1">
          <li>
            Worked in a fast-paced trade retail environment supporting trade and
            DIY customers with product enquiries, collections, orders, returns,
            stock availability and in-store service.
          </li>
          <li>
            Delivered front-facing customer service at the counter, handling
            enquiries, product questions, order collections, refunds, exchanges
            and general support.
          </li>
          <li>
            Supported customers by identifying what they needed for specific
            jobs, recommending suitable products or alternatives and resolving
            issues clearly and professionally.
          </li>
          <li>
            Processed customer orders, click-and-collect collections, payments,
            refunds and till/POS transactions accurately.
          </li>
          <li>
            Checked stock availability, located products, prepared customer
            orders, replenished shelves and helped maintain product availability
            across the store.
          </li>
          <li>
            Supported delivery handling, stockroom organisation, warehouse
            workflows, product rotation and accurate product location
            management.
          </li>
          <li>
            Maintained shop-floor standards including clean work areas, safe
            walkways, clear product presentation and customer-facing readiness.
          </li>
          <li>
            Assisted with cash handling, transaction accuracy, till discipline
            and end-of-shift retail procedures.
          </li>
          <li>
            Took on additional responsibility when required, including
            keyholding-style duties, opening/closing support, daily task
            coordination and helping keep store operations moving efficiently.
          </li>
          <li>
            Built transferable skills in customer service, retail operations,
            stock management, order processing, complaint handling,
            communication, accountability and working under pressure.
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-base font-semibold text-[#e5e7eb]">
          Events, Hospitality &amp; Live Production Assistant — Brightwork
          Specialist Recruitment / Contract
        </h3>
        <p className="italic text-[#9ca3af]">
          Jun 2016 – Jan 2019 · Glasgow City, Scotland, United Kingdom · On-site
        </p>
        <ul className="mt-1 list-disc list-inside space-y-1">
          <li>
            Worked across agency-based events, hospitality, stewarding,
            live-event support and music tuition roles in Glasgow and
            surrounding areas.
          </li>
          <li>
            Supported event bartending and hospitality work in busy
            public-facing environments, serving customers, handling orders,
            maintaining service standards and working efficiently under
            pressure.
          </li>
          <li>
            Worked in event stewarding and front-of-house support, assisting
            guests, helping with crowd flow, maintaining awareness of safety
            procedures and communicating clearly with event staff and members of
            the public.
          </li>
          <li>
            Assisted with live-event and roadie-style production support,
            including equipment handling, basic setup, stage support,
            load-in/load-out tasks and practical problem-solving during events.
          </li>
          <li>
            Built early experience in live performance environments, including
            awareness of stage communication, event timing, teamwork, technical
            setup and working around performers, crew and customers.
          </li>
          <li>
            Provided guitar tuition for beginner and developing players,
            supporting technique, timing, practice structure, musical confidence
            and learner progression.
          </li>
          <li>
            Developed transferable skills in customer service, live events,
            communication, reliability, teamwork, timekeeping, practical
            problem-solving and working calmly in high-pressure environments.
          </li>
        </ul>
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
            Audio Engineer · Sound Designer · AI Data Evaluator · Remote Digital
            Worker
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
    <div className="relative z-10 w-full max-w-7xl rounded-3xl border border-[#22f3b7]/25 bg-gradient-to-br from-[#020617]/95 via-[#020617] to-[#020617] px-8 py-8 shadow-[0_0_40px_rgba(34,243,183,0.28)] space-y-8">
      <header className="rounded-2xl border border-[#1f2937] bg-[#020617]/50 p-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="space-y-3">
            <div>
              <h1 className="text-4xl font-extrabold tracking-tight text-[#8de3d1]">
                Nathan Campbell
              </h1>
              <p className="text-sm tracking-wide uppercase text-[#9ca3af]">
                Audio Engineer · Sound Designer · AI Data Evaluator · Remote
                Digital Worker
              </p>
            </div>
            <BadgeMiniRow />
          </div>

          <div className="min-w-[250px] rounded-2xl border border-[#1f2937] bg-[#020617]/60 p-4">
            <ContactBlock />
          </div>
        </div>
      </header>

      <section className="rounded-2xl border border-[#1f2937] bg-[#020617]/45 p-6 space-y-4">
        <SectionTitle>Personal Profile</SectionTitle>
        <ProfileText />
      </section>

      <section className="rounded-2xl border border-[#1f2937] bg-[#020617]/45 p-6 space-y-4">
        <SectionTitle colour="purple">Certificates</SectionTitle>
        <CertificateGrid />
      </section>

      <section className="grid grid-cols-1 gap-6 xl:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-6">
          <div className="rounded-2xl border border-[#1f2937] bg-[#020617]/45 p-6 space-y-4">
            <SectionTitle>Technical Skills</SectionTitle>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <TechnicalSkillsList small />
              <CurrentDirectionList small />
            </div>
          </div>

          <div className="rounded-2xl border border-[#1f2937] bg-[#020617]/45 p-6 space-y-4">
            <SectionTitle>Education &amp; Certification</SectionTitle>
            <EducationBlock full />
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl border border-[#1f2937] bg-[#020617]/45 p-6 space-y-4">
            <SectionTitle colour="purple">Key Skills</SectionTitle>
            <KeySkillsList small />
          </div>

          <div className="rounded-2xl border border-[#1f2937] bg-[#020617]/45 p-6 space-y-4">
            <SectionTitle colour="purple">Goals</SectionTitle>
            <GoalsBlock />
          </div>
        </div>
      </section>

      <section className="rounded-2xl border border-[#1f2937] bg-[#020617]/45 p-6 space-y-4">
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
