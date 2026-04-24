'use client';

export default function CVSection() {
  return (
    <section id="cv" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-white">
          Curriculum Vitae
        </h2>

        <div className="text-white/90 space-y-8 text-sm leading-relaxed">

          <div>
            <h3 className="text-lg font-bold mb-3 text-white">Professional Summary</h3>
            <p>
              Management Engineering graduate with specialization in Finance and Information Systems. Strong foundation in data analysis, programming (Python, SQL, Java), and project management. Experience in consulting (Accenture), digitalization projects (Deutsche Bahn), and entrepreneurship (founded sustainable streetwear brand). Passionate about AI, machine learning, and data-driven decision making.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Education</h3>
            
            <div className="space-y-4">
              <div>
                <p className="font-medium">Politecnico di Milano</p>
                <p className="text-white/70">Milan, Italy | September 2023 – September 2026</p>
                <p>Management Engineering M.Sc. — Specialization in Finance</p>
                <p className="text-white/70">Courses: Finance and Management, Machine Learning, SQL, Databases/Databases2</p>
              </div>

              <div>
                <p className="font-medium">Technische Universität Berlin</p>
                <p className="text-white/70">Berlin, Germany | April 2023 – September 2023</p>
                <p>Industrial Engineering and Management M.Sc. — Specialization: Information & Communication Systems</p>
                <p className="text-white/70">Courses: Python (Grade: 1.0)</p>
              </div>

              <div>
                <p className="font-medium">Technische Universität Berlin</p>
                <p className="text-white/70">Berlin, Germany | October 2018 – March 2023</p>
                <p>Industrial Engineering and Management B.Sc.</p>
                <p className="text-white/70">Thesis: "Virtual Reality as a Space of Work-[…]" — Grade: 1.0</p>
                <p className="text-white/70">Courses: Project Management (1.0), Private Business Law (1.7)</p>
              </div>

              <div>
                <p className="font-medium">Rupprecht-Gymnasium (Abitur)</p>
                <p className="text-white/70">Munich, Germany | September 2009 – June 2017</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Work Experience</h3>
            
            <div className="space-y-4">
              <div>
                <p className="font-medium">Accenture Plc</p>
                <p className="text-white/70">Berlin | November 2024 – April 2025</p>
                <p className="italic">Student trainee in Finance and Energy Markets</p>
                <ul className="list-disc list-inside mt-1 text-white/80">
                  <li>Client proposals and Contract Management between leading energy suppliers across Europe</li>
                  <li>Creation of an automated HR-management program</li>
                  <li>Developed presentations and research papers</li>
                </ul>
              </div>

              <div>
                <p className="font-medium">2. Stammstrecke München (Deutsche Bahn AG / BERNARD Gruppe)</p>
                <p className="text-white/70">Munich | January 2022 – March 2023</p>
                <p className="italic">"INGE BÜW" — Project Management & Digitalization</p>
                <ul className="list-disc list-inside mt-1 text-white/80">
                  <li>Project Management and Digitalization initiatives</li>
                  <li>Set up a Database for project tracking</li>
                  <li>Schedule Management and Supervision</li>
                </ul>
              </div>

              <div>
                <p className="font-medium">Arbeitsgruppe Wirtschaftsingenieurwesen e. V. (AG-Wiing / ESTIEM)</p>
                <p className="text-white/70">Berlin | April 2021 – September 2022</p>
                <p className="italic">Member & Corporate Relations</p>
                <ul className="list-disc list-inside mt-1 text-white/80">
                  <li>Responsible for reaching out to companies and landing cooperations</li>
                  <li>Helped organize team meetings, case studies, and get-togethers</li>
                </ul>
              </div>

              <div>
                <p className="font-medium">Wassermann Neuhausen</p>
                <p className="text-white/70">Munich | September 2017 – September 2018</p>
                <p className="italic">Bar Manager</p>
                <ul className="list-disc list-inside mt-1 text-white/80">
                  <li>Organization of team meetings</li>
                  <li>Responsible for teaching new barkeepers</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Entrepreneurship</h3>
            
            <div className="space-y-4">
              <div>
                <p className="font-medium">Nice.Limited</p>
                <p className="text-white/70">Berlin | April 2020 – Present</p>
                <p className="italic">Founder — Sustainable Streetwear Brand</p>
                <ul className="list-disc list-inside mt-1 text-white/80">
                  <li>Built and executed marketing strategy</li>
                  <li>Managed supply chain and product management</li>
                  <li>Content creation and social media management</li>
                  <li>Achievement: Sold out first collection in two days</li>
                </ul>
              </div>

              <div>
                <p className="font-medium">Center for Entrepreneurship (TU Berlin)</p>
                <p className="text-white/70">Berlin | June 2019 – September 2020</p>
                <p className="italic">Startup Founder via CFE</p>
                <ul className="list-disc list-inside mt-1 text-white/80">
                  <li>Participated in BPW-Berlin competition (Finished Top 10%)</li>
                  <li>Performed organizational/management tasks with Confluence</li>
                  <li>Created Business plan including roadmap and milestones</li>
                  <li>Prepared presentations for potential investors and mentors</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Skills</h3>
            
            <div className="space-y-4">
              <div>
                <p className="font-medium mb-2">Programming & Technical</p>
                <p className="text-white/80">Python — Strong proficiency (Grade: 1.0 at TU Berlin)</p>
                <p className="text-white/80">SQL — Database design, queries, management</p>
                <p className="text-white/80">Java — Object-oriented programming</p>
                <p className="text-white/80">AI & Machine Learning — Coursework and practical experience</p>
                <p className="text-white/80">Data Science / Data Analysis — Core competency</p>
                <p className="text-white/80">MS Office — Very good, especially Excel</p>
                <p className="text-white/80">Adobe Creative Cloud — Video and graphic editing</p>
                <p className="text-white/80">DaVinci Resolve — Video editing</p>
              </div>

              <div>
                <p className="font-medium mb-2">Languages</p>
                <p className="text-white/80">German — Fluent (native)</p>
                <p className="text-white/80">English — Fluent</p>
                <p className="text-white/80">Italian — Fluent</p>
                <p className="text-white/80">French — Good</p>
              </div>

              <div>
                <p className="font-medium mb-2">Soft Skills</p>
                <p className="text-white/80">Project Management, Team Leadership, Client Relations & Contract Management, Presentation & Communication, Entrepreneurial mindset</p>
              </div>

              <div>
                <p className="font-medium mb-2">Interests</p>
                <p className="text-white/80">Team sports (10 years Football and Basketball in clubs), Water sports (Free Diving, Fishing, Surfing), Video and graphic editing, AI and emerging technologies, Dean&apos;s List recognition</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
