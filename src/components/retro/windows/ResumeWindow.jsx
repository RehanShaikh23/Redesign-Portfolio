import React, { useState } from 'react'
import {
  FileText,
  Download,
  ExternalLink,
  Eye,
  Briefcase,
  GraduationCap,
  FolderGit2,
  Wrench,
  Award,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Printer,
  Sparkles,
} from 'lucide-react'

export default function ResumeWindow() {
  const [viewMode, setViewMode] = useState('doc') // 'doc' | 'pdf'

  const handlePrint = () => {
    const printWindow = window.open('/resume.pdf', '_blank')
    if (printWindow) {
      printWindow.focus()
    }
  }

  return (
    <div className="space-y-5 select-text">
      {/* Action Control Bar */}
      <div className="p-3.5 bg-[#FFFDF9] border-2 border-[#2A2A2A] rounded-xl flex flex-wrap items-center justify-between gap-3 shadow-xs">
        {/* Title & Path Badge */}
        <div className="flex items-center gap-2 font-space text-xs font-bold text-[#2A2A2A]">
          <FileText className="w-4 h-4 text-[#D46B38]" />
          <span>RESUME VIEWER // C:\REHAN\resume.pdf</span>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Mode Switcher */}
          <div className="flex items-center bg-[#EFE9DB] p-1 border border-[#2A2A2A] rounded-lg gap-1">
            <button
              onClick={() => setViewMode('doc')}
              className={`px-2.5 py-1 rounded-md text-xs font-space font-bold transition-all cursor-pointer ${
                viewMode === 'doc'
                  ? 'bg-[#5A633F] text-white shadow-xs'
                  : 'text-[#2A2A2A] hover:bg-black/5'
              }`}
            >
              <Eye className="w-3.5 h-3.5 inline mr-1" />
              Document
            </button>
            <button
              onClick={() => setViewMode('pdf')}
              className={`px-2.5 py-1 rounded-md text-xs font-space font-bold transition-all cursor-pointer ${
                viewMode === 'pdf'
                  ? 'bg-[#5A633F] text-white shadow-xs'
                  : 'text-[#2A2A2A] hover:bg-black/5'
              }`}
            >
              <FileText className="w-3.5 h-3.5 inline mr-1" />
              PDF Embed
            </button>
          </div>

          {/* Download Button */}
          <a
            href="/resume.pdf"
            download="Rehan_Shaikh_Resume.pdf"
            className="px-3.5 py-1.5 bg-[#F3CB5A] hover:bg-[#DFB239] text-[#2A2A2A] font-space text-xs font-bold rounded-lg border-2 border-[#2A2A2A] flex items-center gap-1.5 shadow-xs transition-transform active:translate-y-0.5 cursor-pointer"
            title="Download PDF File"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download PDF</span>
          </a>

          {/* Print/Open in tab */}
          <button
            onClick={handlePrint}
            className="p-1.5 bg-[#EFE9DB] hover:bg-[#D46B38] hover:text-white text-[#2A2A2A] rounded-lg border-2 border-[#2A2A2A] transition-colors cursor-pointer"
            title="Open original PDF in new tab"
          >
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Main Resume Content View */}
      {viewMode === 'pdf' ? (
        <div className="w-full h-[650px] border-2 border-[#2A2A2A] rounded-xl overflow-hidden bg-slate-900 shadow-inner">
          <iframe
            src="/resume.pdf#toolbar=1"
            title="Rehan Shaikh Resume PDF"
            className="w-full h-full border-none"
          />
        </div>
      ) : (
        <div className="bg-[#FFFDF9] border-2 border-[#2A2A2A] rounded-xl p-6 sm:p-8 shadow-xs space-y-7 max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center space-y-3 pb-6 border-b-2 border-[#2A2A2A]/20">
            <h1 className="font-outfit text-3xl sm:text-4xl font-extrabold text-[#2A2A2A] tracking-tight">
              Rehan Shaikh
            </h1>
            <p className="font-space text-xs sm:text-sm font-semibold text-[#5A633F]">
              FULL STACK JAVA DEVELOPER
            </p>

            <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-xs font-space text-[#2A2A2A] pt-1">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#D46B38]" />
                Pune, Maharashtra, India
              </span>
              <span className="text-slate-400">•</span>
              <a
                href="tel:+919307295471"
                className="flex items-center gap-1 hover:text-[#D46B38] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#D46B38]" />
                +91 9307295471
              </a>
              <span className="text-slate-400">•</span>
              <a
                href="mailto:rehanshaikh.dev@gmail.com"
                className="flex items-center gap-1 hover:text-[#D46B38] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#D46B38]" />
                rehanshaikh.dev@gmail.com
              </a>
              <span className="text-slate-400">•</span>
              <a
                href="https://linkedin.com/in/rehan-shaikh23-5a1206318"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-[#D46B38] transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 text-[#D46B38]" />
                linkedin.com/in/rehan-shaikh23-5a1206318
              </a>
            </div>
          </div>

          {/* Education Section */}
          <div className="space-y-3">
            <h2 className="font-space text-sm font-bold text-[#2A2A2A] uppercase tracking-wider flex items-center gap-2 border-b-2 border-[#2A2A2A] pb-1">
              <GraduationCap className="w-4 h-4 text-[#D46B38]" />
              Education
            </h2>

            <div className="space-y-1">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between font-outfit">
                <h3 className="font-bold text-[#2A2A2A] text-base">
                  Savitribai Phule Pune University
                </h3>
                <span className="font-space text-xs italic text-slate-600">
                  Pune, India
                </span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm text-slate-700">
                <span>Bachelor of Computer Applications (BCA)</span>
                <span className="font-mono text-xs font-semibold text-[#5A633F]">
                  Aug 2024 – July 2027
                </span>
              </div>
            </div>
          </div>

          {/* Experience Section */}
          <div className="space-y-4">
            <h2 className="font-space text-sm font-bold text-[#2A2A2A] uppercase tracking-wider flex items-center gap-2 border-b-2 border-[#2A2A2A] pb-1">
              <Briefcase className="w-4 h-4 text-[#D46B38]" />
              Experience
            </h2>

            {/* Experience item 1 */}
            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between font-outfit">
                <div>
                  <h3 className="font-bold text-[#2A2A2A] text-base">
                    Code B Solutions Pvt Ltd
                  </h3>
                  <p className="text-xs font-space font-semibold text-[#5A633F] italic">
                    Full Stack Developer Intern
                  </p>
                </div>
                <div className="text-right">
                  <span className="font-space text-xs italic text-slate-600 block">
                    Pune, India
                  </span>
                  <span className="font-mono text-xs font-semibold text-[#D46B38]">
                    March 2025
                  </span>
                </div>
              </div>

              <ul className="list-disc list-outside ml-4 text-xs sm:text-sm text-slate-700 space-y-1.5 leading-relaxed font-outfit">
                <li>
                  Architected a <strong>Group Management Dashboard</strong> from scratch, enabling admins to create, update, and soft-delete groups without engineering intervention.
                </li>
                <li>
                  Implemented <strong>real-time search and filtering</strong> over the group dataset, replacing full-page reloads with live client-side updates for faster admin lookups.
                </li>
                <li>
                  Engineered <strong>dependency-validation checks</strong> into the soft-delete workflow, preventing orphaned records and preserving referential integrity across dependent tables.
                </li>
              </ul>
            </div>

            {/* Experience item 2 */}
            <div className="space-y-2 pt-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between font-outfit">
                <div>
                  <h3 className="font-bold text-[#2A2A2A] text-base">
                    Accenture Nordics Software Engineering Job Simulation
                  </h3>
                  <p className="text-xs font-space font-semibold text-[#5A633F] italic">
                    Forage, Virtual
                  </p>
                </div>
                <div className="text-right">
                  <span className="font-mono text-xs font-semibold text-[#D46B38]">
                    July 2025
                  </span>
                </div>
              </div>

              <ul className="list-disc list-outside ml-4 text-xs sm:text-sm text-slate-700 space-y-1.5 leading-relaxed font-outfit">
                <li>
                  Applied <strong>Agile and DevOps practices</strong> to a simulated healthcare application, translating client requirements into sprint-ready technical tasks.
                </li>
                <li>
                  Mapped <strong>IaaS/PaaS cloud architecture options</strong> against the simulated system's scaling and cost constraints.
                </li>
                <li>
                  Integrated <strong>NIST and IAM security controls</strong> into the SDLC, addressing authentication and access-control gaps identified during the simulation.
                </li>
              </ul>
            </div>
          </div>

          {/* Technical Projects Section */}
          <div className="space-y-4">
            <h2 className="font-space text-sm font-bold text-[#2A2A2A] uppercase tracking-wider flex items-center gap-2 border-b-2 border-[#2A2A2A] pb-1">
              <FolderGit2 className="w-4 h-4 text-[#D46B38]" />
              Technical Projects
            </h2>

            {/* Project 1 */}
            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <h3 className="font-outfit font-bold text-[#2A2A2A] text-base">
                  Arabian Bites Multi-Tenant SaaS Restaurant POS
                </h3>
                <span className="font-mono text-xs text-[#5A633F] italic font-semibold">
                  Java, Spring Boot, Spring Security, MySQL, React, AWS, Twilio
                </span>
              </div>

              <ul className="list-disc list-outside ml-4 text-xs sm:text-sm text-slate-700 space-y-1.5 leading-relaxed font-outfit">
                <li>
                  Built and shipped <strong>29 REST controllers solo</strong>, covering the full order-to-billing lifecycle for QR ordering, kitchen management, inventory, and loyalty across a multi-tenant restaurant platform.
                </li>
                <li>
                  Replaced polling-based status checks with <strong>event-driven WebSocket (STOMP/SockJS) channels</strong>, pushing live order and kitchen updates instantly to 6 distinct user roles.
                </li>
                <li>
                  Designed a <strong>6-role RBAC hierarchy</strong> secured with JWT, BCrypt, and TOTP-based 2FA (with recovery codes) plus Twilio SMS OTP login, enforcing endpoint-level access control tenant-wide.
                </li>
                <li>
                  Isolated tenant data using a <strong>ThreadLocal-based TenantContext</strong> that scopes every database query and WebSocket channel to the authenticated tenant, enabling secure onboarding of independent restaurants on one deployment.
                </li>
                <li>
                  Automated <strong>3 recurring operational workflows</strong> (daily P&L email reports, cashback expiry processing, and idle table-session cleanup) via scheduled cron jobs, removing the need for manual daily reconciliation.
                </li>
              </ul>
            </div>

            {/* Project 2 */}
            <div className="space-y-2 pt-2">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <h3 className="font-outfit font-bold text-[#2A2A2A] text-base">
                  AI-Powered RAG Chatbot Document Q&A Platform
                </h3>
                <span className="font-mono text-xs text-[#5A633F] italic font-semibold">
                  Spring Boot, Spring AI, Java 21, PostgreSQL/PGVector, React, JWT
                </span>
              </div>

              <ul className="list-disc list-outside ml-4 text-xs sm:text-sm text-slate-700 space-y-1.5 leading-relaxed font-outfit">
                <li>
                  Built a document ingestion and embedding pipeline using <strong>NVIDIA NIM embeddings</strong> with PostgreSQL/PGVector as the vector store, enabling semantic similarity search over user-uploaded documents.
                </li>
                <li>
                  Streamed model responses token-by-token via <strong>Server-Sent Events (SSE)</strong> from the Spring Boot backend to a React 19 + Vite frontend, replacing full-response wait times with incremental output.
                </li>
                <li>
                  Tuned <strong>system prompts and tokenization limits</strong> to fit retrieved context within the model's context window while preserving answer relevance.
                </li>
                <li>
                  Secured all chat and ingestion endpoints with <strong>JWT-based Spring Security</strong> authentication and Bucket4j rate limiting to prevent abuse.
                </li>
              </ul>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-3">
            <h2 className="font-space text-sm font-bold text-[#2A2A2A] uppercase tracking-wider flex items-center gap-2 border-b-2 border-[#2A2A2A] pb-1">
              <Wrench className="w-4 h-4 text-[#D46B38]" />
              Technical Skills
            </h2>

            <div className="grid grid-cols-1 gap-2.5 text-xs sm:text-sm font-outfit">
              <div>
                <strong className="font-space text-xs font-bold text-[#2A2A2A] uppercase mr-2">
                  Languages:
                </strong>
                <span className="text-slate-800">Java, SQL, JavaScript</span>
              </div>
              <div>
                <strong className="font-space text-xs font-bold text-[#2A2A2A] uppercase mr-2">
                  Backend:
                </strong>
                <span className="text-slate-800">
                  Spring Boot, Spring Security, Spring AI, REST APIs, JWT, WebSocket (STOMP), Redis, Bucket4j, Microservices Basics
                </span>
              </div>
              <div>
                <strong className="font-space text-xs font-bold text-[#2A2A2A] uppercase mr-2">
                  Frontend:
                </strong>
                <span className="text-slate-800">React, Responsive UI Development</span>
              </div>
              <div>
                <strong className="font-space text-xs font-bold text-[#2A2A2A] uppercase mr-2">
                  Databases:
                </strong>
                <span className="text-slate-800">MySQL, PostgreSQL (PGVector), MongoDB</span>
              </div>
              <div>
                <strong className="font-space text-xs font-bold text-[#2A2A2A] uppercase mr-2">
                  Cloud & Tools:
                </strong>
                <span className="text-slate-800">
                  AWS (EC2, S3, RDS, CloudFront), Vercel, Git, GitHub, Docker, IntelliJ IDEA, VS Code
                </span>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-3">
            <h2 className="font-space text-sm font-bold text-[#2A2A2A] uppercase tracking-wider flex items-center gap-2 border-b-2 border-[#2A2A2A] pb-1">
              <Award className="w-4 h-4 text-[#D46B38]" />
              Certifications
            </h2>

            <ul className="list-disc list-outside ml-4 text-xs sm:text-sm text-slate-800 space-y-1 font-outfit">
              <li>
                <strong className="text-[#5A633F]">Master in Full Stack Web Development with Java</strong>
              </li>
              <li>
                <strong className="text-[#5A633F]">TCS iON Career Edge - Young Professional</strong>
              </li>
              <li>
                <strong className="text-[#5A633F]">Accenture Forage Software Engineering Job Simulation</strong>
              </li>
            </ul>
          </div>

          {/* Bottom Download CTA Footer */}
          <div className="p-4 bg-[#EFE9DB] border-2 border-[#2A2A2A] rounded-xl flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#D46B38]" />
              <span className="font-space text-xs font-bold text-[#2A2A2A]">
                Need a PDF copy for hiring or printing?
              </span>
            </div>

            <a
              href="/resume.pdf"
              download="Rehan_Shaikh_Resume.pdf"
              className="px-4 py-2 bg-[#5A633F] hover:bg-[#474E31] text-white font-space text-xs font-bold rounded-lg border-2 border-[#2A2A2A] flex items-center gap-2 shadow-xs transition-transform active:translate-y-0.5 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download Official Resume (PDF)</span>
            </a>
          </div>
        </div>
      )}
    </div>
  )
}
