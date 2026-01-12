import React from "react";
import { Mail, Phone, MapPin, Globe2 } from "lucide-react";

export default function CombinedTealDarkCVFixed() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#050608] via-[#0b1014] to-[#111827] text-[#e7e7e7] font-sans flex items-center justify-center p-6">
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(circle_at_1px_1px,#1e293b_1px,transparent_0)] bg-[length:18px_18px]" />

      <div className="relative z-10 w-full max-w-5xl rounded-3xl border border-[#22f3b7]/25 bg-gradient-to-br from-[#020617]/95 via-[#020617] to-[#020617] shadow-[0_0_40px_rgba(34,243,183,0.28)] px-10 py-10 space-y-10">
        <header className="flex flex-col gap-4 border-b border-[#1f2937] pb-6 md:flex-row md:items-end md:justify-between">
          <div className="space-y-1">
            <h1 className="text-4xl font-extrabold tracking-tight text-[#8de3d1]">
              Nathan Campbell
            </h1>
            <p className="text-sm tracking-wide uppercase text-[#9ca3af]">
              Audio Engineer · Musician · Creative Technologist
            </p>
          </div>
          <div className="space-y-1 text-sm text-[#d1d5db]">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#22f3b7]" />
              <span>Glasgow, UK</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#22f3b7]" />
              <span>nathan__campbell@outlook.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#22f3b7]" />
              <span>07754598513</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe2 className="w-4 h-4 text-[#22f3b7]" />
              <span>Mandarin learner (HSK-1 · HSK-2 developing)</span>
            </div>
          </div>
        </header>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#e5e7eb]">
            Personal Profile
          </h2>
          <div className="h-px w-28 bg-gradient-to-r from-[#22f3b7] via-[#38bdf8] to-transparent rounded-full" />
          <p className="leading-relaxed text-sm text-[#d1d5db] max-w-3xl">
            Audio engineer, musician, and creative technologist specialising in
            sound production, digital audio processing, acoustics, and
            interactive audio. Former touring guitarist for{" "}
            <strong>Clawhammer</strong>, performing internationally and
            supporting established heavy bands. Comfortable working in
            high-pressure live environments and collaborative creative settings.
          </p>
          <p className="leading-relaxed text-sm text-[#d1d5db] max-w-3xl">
            Skilled in Pro Tools, foley, multitrack recording, and creative
            sound design, with developing expertise in
            <strong> 3D spatial audio</strong> for games and VR using FMOD and
            Wwise. Strong technical intuition for game modding, digital file
            systems, and emerging audio technologies.
          </p>
          <p className="leading-relaxed text-sm text-[#d1d5db] max-w-3xl">
            Research interests include psychoacoustics, immersive environments,
            and museum-style audiovisual installations. Currently preparing
            re-entry into the final year of BDES Sound for the Moving Image
            (Senate Appeal ongoing).
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#e5e7eb]">Key Skills</h2>
          <div className="h-px w-24 bg-gradient-to-r from-[#22f3b7] via-[#a855f7] to-transparent rounded-full" />
          <div className="grid grid-cols-1 gap-6 text-[#d7dfdf] text-sm md:grid-cols-2">
            <ul className="list-disc list-inside space-y-2">
              <li>Audio engineering &amp; sound design</li>
              <li>Mixing &amp; mastering (Pro Tools)</li>
              <li>Foley &amp; multitrack recording</li>
              <li>Live sound engineering</li>
              <li>3D audio for games &amp; VR</li>
              <li>FMOD (developing)</li>
              <li>Wwise (developing)</li>
              <li>MAX/MSP (developing)</li>
            </ul>
            <ul className="list-disc list-inside space-y-2">
              <li>Music creation &amp; composition</li>
              <li>International touring musician</li>
              <li>Technical troubleshooting</li>
              <li>Digital file systems &amp; game modding</li>
              <li>Team leadership &amp; collaboration</li>
              <li>Customer service &amp; communication</li>
              <li>Mandarin Chinese (HSK-2 developing)</li>
            </ul>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#e5e7eb]">
            Education &amp; Certification
          </h2>
          <div className="h-px w-24 bg-gradient-to-r from-[#22f3b7] via-[#38bdf8] to-transparent rounded-full" />
          <div className="grid grid-cols-1 gap-6 text-[#d7dfdf] text-sm md:grid-cols-2 items-start">
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>BDES Sound for the Moving Image</strong>
                <br />
                Glasgow School of Art
                <br />
                Completed up to Year 3; Senate Appeal for Year 4 in progress
              </li>
              <li>
                <strong>HND Sound Production</strong> — Grade B
                <br />
                Glasgow Clyde College
              </li>
              <li>
                <strong>Avid Pro Tools Certification</strong>
                <br />
                PT101 (studying PT105 &amp; PT110)
              </li>
            </ul>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Advanced Higher</strong>
                <br />
                Music Technology — Full Credits Awarded; English (C)
              </li>
              <li>
                <strong>Highers</strong>
                <br />
                Music Tech (A), English (B), Maths (B), Graphics (B), Computing
                (B), Physical Education (B)
              </li>
              <li>
                <strong>National 5</strong>
                <br />
                Computing (A), Graphic Communication (B), Physics (C), Physical
                Education (B), History (C)
              </li>
              <li>
                <strong>National 4</strong>
                <br />
                French, Art, Chemistry
              </li>
              <li>
                <strong>Other Certifications</strong>
                <br />
                HSK-1 Mandarin, Medics Against Violence, Strathclyde S@S Physics
              </li>
            </ul>
          </div>
        </section>

        <section className="space-y-4 pb-2">
          <h2 className="text-2xl font-semibold text-[#e5e7eb]">
            Professional Experience
          </h2>
          <div className="h-px w-24 bg-gradient-to-r from-[#22f3b7] via-[#a855f7] to-transparent rounded-full" />
          <div className="space-y-5 text-sm text-[#d1d5db]">
            <div>
              <h3 className="font-semibold text-base text-[#e5e7eb]">
                Customer Service Assistant — Toolstation
              </h3>
              <p className="text-[#9ca3af] italic">May 2020 – August 2021</p>
              <ul className="list-disc list-inside space-y-1 mt-1">
                <li>
                  Provided knowledgeable customer support across trade tools and
                  equipment.
                </li>
                <li>
                  Performed stock control, inventory checks, and warehouse
                  organisation.
                </li>
                <li>
                  Processed deliveries, returns, and secure courier
                  cash-handling.
                </li>
                <li>Maintained safe, clean, and efficient store operations.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-base text-[#e5e7eb]">
                Bartender / Events Assistant — OVO Hydro &amp; SEC
              </h3>
              <p className="text-[#9ca3af] italic">July 2019 – February 2020</p>
              <ul className="list-disc list-inside space-y-1 mt-1">
                <li>
                  Worked across bar, stewarding, and kitchen roles during major
                  events.
                </li>
                <li>Adapted to fast-paced, high-volume live environments.</li>
                <li>Supported venue safety and event logistics teams.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-base text-[#e5e7eb]">
                Guitar Tutor — Freelance
              </h3>
              <p className="text-[#9ca3af] italic">2016 – 2018</p>
              <ul className="list-disc list-inside space-y-1 mt-1">
                <li>
                  Taught technique, rhythm, performance, and theory to beginner
                  and intermediate students.
                </li>
                <li>
                  Designed structured lesson plans and long-term learning paths.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-base text-[#e5e7eb]">
                Touring Guitarist — Clawhammer
              </h3>
              <p className="text-[#9ca3af] italic">2017 – 2019</p>
              <ul className="list-disc list-inside space-y-1 mt-1">
                <li>
                  Performed internationally supporting major heavy bands
                  worldwide.
                </li>
                <li>
                  Collaborated with FOH and monitor engineers to optimise tone
                  and stage sound.
                </li>
                <li>
                  Developed strong stagecraft, reliability, and adaptability in
                  high-pressure settings.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="space-y-4 pb-2">
          <h2 className="text-2xl font-semibold text-[#e5e7eb]">
            Technical Skills
          </h2>
          <div className="h-px w-24 bg-gradient-to-r from-[#22f3b7] via-[#38bdf8] to-transparent rounded-full" />
          <ul className="list-disc list-inside text-sm text-[#d1d5db] space-y-1">
            <li>Pro Tools (Primary DAW)</li>
            <li>FMOD (learning)</li>
            <li>Wwise (learning)</li>
            <li>MAX/MSP (developing)</li>
            <li>Foley &amp; audio capture</li>
            <li>Studio hardware &amp; signal flow</li>
            <li>Live sound basics</li>
            <li>Digital file systems &amp; asset management</li>
            <li>Windows &amp; macOS</li>
            <li>Remote collaboration / cloud audio workflows</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export function CombinedTealDarkCVSidebar() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#050608] via-[#0b1014] to-[#111827] text-[#e7e7e7] font-sans flex items-center justify-center p-6">
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(circle_at_1px_1px,#1e293b_1px,transparent_0)] bg-[length:18px_18px]" />

      <div className="relative z-10 flex w-full max-w-6xl overflow-hidden rounded-3xl border border-[#22f3b7]/25 bg-gradient-to-br from-[#020617]/95 via-[#020617] to-[#020617] shadow-[0_0_40px_rgba(34,243,183,0.28)]">
        <aside className="w-1/3 max-w-sm bg-[#020617]/80 p-9 space-y-10 border-r border-[#1f2937]">
          <div className="space-y-2">
            <h1 className="text-3xl font-extrabold tracking-tight text-[#8de3d1]">
              Nathan Campbell
            </h1>
            <p className="text-xs tracking-wide uppercase text-[#9ca3af]">
              Audio Engineer · Creative Technologist
            </p>
          </div>

          <div className="space-y-3 text-sm text-[#d1d5db]">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#22f3b7]" />
              <span>Glasgow, UK</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#22f3b7]" />
              <span>nathan__campbell@outlook.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#22f3b7]" />
              <span>07754598513</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe2 className="w-4 h-4 text-[#22f3b7]" />
              <span>Mandarin learner (HSK-1 · HSK-2 developing)</span>
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-sm font-semibold text-[#e5e7eb] tracking-wide">
              Technical Skills
            </h2>
            <div className="h-px w-16 bg-gradient-to-r from-[#22f3b7] via-[#a855f7] to-transparent rounded-full" />
            <ul className="list-disc list-inside text-xs text-[#d1d5db] space-y-1">
              <li>Pro Tools (Primary DAW)</li>
              <li>FMOD (learning)</li>
              <li>Wwise (learning)</li>
              <li>MAX/MSP (developing)</li>
              <li>Foley &amp; audio capture</li>
              <li>Studio hardware &amp; signal flow</li>
              <li>Live sound basics</li>
              <li>Digital file systems &amp; asset management</li>
              <li>Windows &amp; macOS</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-sm font-semibold text-[#e5e7eb] tracking-wide">
              Key Skills
            </h2>
            <div className="h-px w-16 bg-gradient-to-r from-[#22f3b7] via-[#38bdf8] to-transparent rounded-full" />
            <ul className="list-disc list-inside text-xs text-[#d1d5db] space-y-1">
              <li>Audio engineering &amp; sound design</li>
              <li>Mixing &amp; mastering (Pro Tools)</li>
              <li>3D audio for games &amp; VR</li>
              <li>Music creation &amp; composition</li>
              <li>Technical troubleshooting</li>
              <li>International touring musician</li>
              <li>Team leadership &amp; collaboration</li>
              <li>Customer service &amp; communication</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-sm font-semibold text-[#e5e7eb] tracking-wide">
              Interests
            </h2>
            <div className="h-px w-16 bg-gradient-to-r from-[#22f3b7] via-[#a855f7] to-transparent rounded-full" />
            <ul className="list-disc list-inside text-xs text-[#d1d5db] space-y-1">
              <li>Sound design for film &amp; interactive media</li>
              <li>Immersive/VR and spatial audio</li>
              <li>Creative technology &amp; installation art</li>
              <li>Mandarin language learning</li>
              <li>Independent audio projects</li>
            </ul>
          </div>
        </aside>

        <main className="flex-1 p-10 md:p-12 space-y-10">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#e5e7eb]">
              Personal Profile
            </h2>
            <div className="h-px w-24 bg-gradient-to-r from-[#22f3b7] via-[#38bdf8] to-transparent rounded-full" />
            <p className="text-sm text-[#d1d5db] leading-relaxed max-w-3xl">
              Audio engineer, musician, and creative technologist specialising
              in sound production, digital audio processing, acoustics, and
              interactive audio. Former touring guitarist for{" "}
              <strong>Clawhammer</strong>, performing internationally and
              supporting established heavy bands.
            </p>
            <p className="text-sm text-[#d1d5db] leading-relaxed max-w-3xl">
              Skilled in Pro Tools, foley, multitrack recording, and creative
              sound design, with developing expertise in 3D spatial audio for
              games and VR using FMOD and Wwise. Strong technical intuition for
              game modding, digital file systems, and emerging audio
              technologies.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#e5e7eb]">
              Education &amp; Certification
            </h2>
            <div className="h-px w-24 bg-gradient-to-r from-[#22f3b7] via-[#a855f7] to-transparent rounded-full" />
            <div className="space-y-3 text-sm text-[#d1d5db]">
              <div>
                <p className="font-semibold text-[#e5e7eb]">
                  BDES Sound for the Moving Image
                </p>
                <p className="text-[#9ca3af]">Glasgow School of Art</p>
                <p className="text-[#9ca3af]">
                  Completed up to Year 3 — Senate Appeal for Year 4 re-entry in
                  progress
                </p>
              </div>
              <div>
                <p className="font-semibold text-[#e5e7eb]">
                  HND Sound Production — B
                </p>
                <p className="text-[#9ca3af]">Glasgow Clyde College</p>
              </div>
              <div>
                <p className="font-semibold text-[#e5e7eb]">
                  Avid Pro Tools Certification
                </p>
                <p className="text-[#9ca3af]">
                  PT101 completed — studying PT105 &amp; PT110
                </p>
              </div>
              <div>
                <p className="font-semibold text-[#e5e7eb]">Advanced Higher</p>
                <p>Music Technology — Full Credits Awarded; English (C)</p>
              </div>
              <div>
                <p className="font-semibold text-[#e5e7eb]">Highers</p>
                <p>
                  Music Tech (A), English (B), Maths (B), Graphics (B),
                  Computing (B), PE (B)
                </p>
              </div>
              <div>
                <p className="font-semibold text-[#e5e7eb]">National 5</p>
                <p>
                  Computing (A), Graphic Communication (B), Physics (C), PE (B),
                  History (C)
                </p>
              </div>
              <div>
                <p className="font-semibold text-[#e5e7eb]">National 4</p>
                <p>French, Art, Chemistry</p>
              </div>

              <div>
                <p className="font-semibold text-[#e5e7eb]">
                  Other Certifications
                </p>
                <p>
                  HSK-1 Mandarin, Medics Against Violence, Strathclyde S@S
                  Physics
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-4 pb-4">
            <h2 className="text-2xl font-semibold text-[#e5e7eb]">
              Professional Experience
            </h2>
            <div className="h-px w-24 bg-gradient-to-r from-[#22f3b7] via-[#38bdf8] to-transparent rounded-full" />
            <div className="space-y-4 text-sm text-[#d1d5db]">
              <div>
                <h3 className="font-semibold text-base text-[#e5e7eb]">
                  Customer Service Assistant — Toolstation
                </h3>
                <p className="text-[#9ca3af] italic">May 2020 – August 2021</p>
                <ul className="list-disc list-inside space-y-1 mt-1">
                  <li>
                    Delivered knowledgeable support across trade tools and
                    building materials.
                  </li>
                  <li>
                    Managed stock control, warehouse organisation, and inventory
                    logging.
                  </li>
                  <li>
                    Handled returns, deliveries, and secure cash operations.
                  </li>
                  <li>Maintained safe and efficient store standards.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-base text-[#e5e7eb]">
                  Bartender / Events Assistant — OVO Hydro &amp; SEC
                </h3>
                <p className="text-[#9ca3af] italic">
                  July 2019 – February 2020
                </p>
                <ul className="list-disc list-inside space-y-1 mt-1">
                  <li>
                    Worked across bar, stewarding, and kitchen roles during
                    major events.
                  </li>
                  <li>Adapted to fast-paced, high-volume environments.</li>
                  <li>Supported venue safety and event logistics teams.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-base text-[#e5e7eb]">
                  Guitar Tutor — Freelance
                </h3>
                <p className="text-[#9ca3af] italic">2016 – 2018</p>
                <ul className="list-disc list-inside space-y-1 mt-1">
                  <li>
                    Taught performance, technique, rhythm, and theory to
                    beginner and intermediate players.
                  </li>
                  <li>
                    Created structured learning plans and practice routines.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-offsetof text-base text-[#e5e7eb]">
                  Touring Guitarist — Clawhammer
                </h3>
                <p className="text-[#9ca3af] italic">2017 – 2019</p>
                <ul className="list-disc list-inside space-y-1 mt-1">
                  <li>
                    Performed internationally supporting major heavy bands
                    worldwide.
                  </li>
                  <li>
                    Collaborated with FOH and monitor engineers to optimise tone
                    and stage mix.
                  </li>
                  <li>
                    Developed strong stagecraft, reliability, and adaptability
                    under pressure.
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
