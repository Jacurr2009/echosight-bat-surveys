import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, BarChart3, Thermometer, Camera, Activity, ClipboardCheck } from "lucide-react";

const outputs = [
  {
    id: "species-report",
    icon: FileText,
    title: "Species Identification Report",
    description: "Detailed species-level identification from acoustic recordings or field observations. Each report includes confidence ratings, call parameter analysis, and habitat context.",
    sampleData: [
      { key: "Species", value: "Common pipistrelle (Pipistrellus pipistrellus)" },
      { key: "Passes Recorded", value: "247" },
      { key: "Survey Period", value: "June–September 2025" },
      { key: "Peak Activity Window", value: "22:15–23:30 BST" },
      { key: "Call Frequency Range", value: "44–49 kHz" },
      { key: "Confidence Level", value: "High (manual QA verified)" },
      { key: "Habitat Notes", value: "Linear feature — mature hedgerow with oak standards" },
    ],
    deliverables: ["Full species list with confidence ratings", "Call parameter breakdown per species", "Activity graphs (nightly and seasonal)", "Habitat context and recommendations"],
    usedFor: "EPS licence applications, ecological impact assessments, planning condition discharge",
  },
  {
    id: "acoustic-analysis",
    icon: BarChart3,
    title: "Acoustic Analysis Summary",
    description: "Comprehensive analysis of static detector recordings with automated classification cross-checked by manual verification. Output-ready data tables and activity summaries.",
    sampleData: [
      { key: "Detector", value: "SM4BAT FS — Location 3 (hedgerow NE)" },
      { key: "Recording Nights", value: "42" },
      { key: "Total Bat Passes", value: "1,824" },
      { key: "Species Detected", value: "5 (Ppip, Ppyg, Nyctalus spp., Myotis spp., Plecotus)" },
      { key: "Analysis Method", value: "Kaleidoscope Pro + manual verification" },
      { key: "False Positive Rate", value: "<2% (QA sample checked)" },
      { key: "QA Status", value: "Peer-reviewed ✓" },
    ],
    deliverables: ["Species pass counts per night (CSV/Excel)", "Seasonal activity summary with graphs", "Nightly activity temporal profiles", "QA methodology statement"],
    usedFor: "Multi-season monitoring, activity baseline assessments, habitat suitability evaluations",
  },
  {
    id: "thermal-clips",
    icon: Thermometer,
    title: "Annotated Thermal / IR Clips",
    description: "Ecologist-led review of infrared and thermal footage with behaviour tagging, species identification where possible, and annotated still frames for reporting.",
    sampleData: [
      { key: "Clip Duration", value: "02:34" },
      { key: "Species", value: "Brown long-eared bat (Plecotus auritus)" },
      { key: "Behaviour Observed", value: "Emergence from soffit gap, south gable" },
      { key: "Timestamp", value: "21:47 BST — 18 July 2025" },
      { key: "Emergence Count", value: "3 bats" },
      { key: "Tags Applied", value: "Roost confirmation, emergence sequence" },
      { key: "Delivery Format", value: "MP4 clip + annotated still frame (PNG)" },
    ],
    deliverables: ["Timestamped MP4 clips with annotations", "Annotated still frames for reports", "Behaviour log with species and counts", "Roost characterisation notes"],
    usedFor: "Roost confirmation surveys, emergence/return count verification, licence evidence packs",
  },
  {
    id: "motion-composite",
    icon: Camera,
    title: "Motion Composite Images",
    description: "Multi-frame composites capturing bat flight activity over a survey period. These images overlay detected movement onto a single frame, visualising flight paths and activity hotspots.",
    sampleData: [
      { key: "Composite Type", value: "Multi-frame activity overlay" },
      { key: "Source Camera", value: "Infrared — north elevation" },
      { key: "Duration Captured", value: "21:30–23:00 BST (90 min)" },
      { key: "Flight Paths Mapped", value: "12 distinct trajectories" },
      { key: "Species", value: "Common pipistrelle (confirmed via paired detector)" },
      { key: "Resolution", value: "1920×1080 PNG, report-ready" },
      { key: "Use Case", value: "Report figure — flight path illustration" },
    ],
    deliverables: ["High-resolution composite images (PNG)", "Overlay diagrams with flight path annotations", "Activity heatmap summaries", "Integration notes for report figures"],
    usedFor: "Visual evidence for EPS applications, planning reports, public consultations",
  },
  {
    id: "activity-summary",
    icon: Activity,
    title: "Activity Summary Tables",
    description: "Structured data tables summarising bat activity across survey locations, nights, and seasons. Ready for direct inclusion in appendices or regulatory submissions.",
    sampleData: [
      { key: "Locations Monitored", value: "6 static detector positions" },
      { key: "Total Survey Nights", value: "180 (30 per location)" },
      { key: "Total Passes", value: "4,291" },
      { key: "Dominant Species", value: "Common pipistrelle (68%)" },
      { key: "Rarest Detection", value: "Barbastelle (2 passes, Location 5)" },
      { key: "Format", value: "Excel workbook + CSV exports" },
      { key: "Status", value: "QA-complete, appendix-ready ✓" },
    ],
    deliverables: ["Excel workbook with multi-tab breakdown", "CSV exports per location", "Summary statistics and graphs", "Methodology statement for appendix"],
    usedFor: "EcIA appendices, planning condition compliance, monitoring programme reporting",
  },
  {
    id: "pra-report",
    icon: ClipboardCheck,
    title: "Preliminary Roost Assessment Report",
    description: "Structured PRA reports following BCT guidelines. Clear roost potential grading, feature descriptions, and recommendations for further survey or mitigation.",
    sampleData: [
      { key: "Building / Feature", value: "Grade II listed farmhouse — south wing" },
      { key: "Roost Potential", value: "High" },
      { key: "Features Identified", value: "Lifted ridge tiles, gaps in soffit boards, weathered mortar joints" },
      { key: "Evidence Found", value: "Droppings (confirmed Pipistrellus sp. via DNA)" },
      { key: "Recommended Surveys", value: "3× emergence/return surveys (May–August)" },
      { key: "Report Standard", value: "BCT Good Practice Guidelines (4th Ed.)" },
      { key: "Status", value: "Final, peer-reviewed ✓" },
    ],
    deliverables: ["Full PRA report (PDF)", "Photo log with annotated features", "Site plan with feature locations", "Recommendations and next steps"],
    usedFor: "Planning applications, preliminary ecological appraisals, site screening",
  },
];

const ExampleOutputs = () => {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pb-20 section-alt">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-4">Example Outputs</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 max-w-3xl mx-auto text-balance">
            What Your Deliverables Look Like
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Every project comes with structured, QA-checked outputs designed for direct inclusion in your reports. Here's what to expect.
          </p>
        </div>
      </section>

      {/* Output Cards */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-16 lg:space-y-24">
            {outputs.map((output, index) => (
              <div
                key={output.id}
                id={output.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start ${
                  index % 2 === 1 ? "lg:direction-rtl" : ""
                }`}
              >
                {/* Info side */}
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <output.icon size={20} className="text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold">{output.title}</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6">{output.description}</p>

                  <div className="mb-6">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground/50 mb-3">What You Receive</h3>
                    <ul className="space-y-2">
                      {output.deliverables.map((d) => (
                        <li key={d} className="flex items-start gap-2 text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-muted/50 rounded-md px-4 py-3">
                    <p className="text-xs text-muted-foreground">
                      <span className="font-semibold text-foreground/70">Typically used for:</span> {output.usedFor}
                    </p>
                  </div>
                </div>

                {/* Sample data side */}
                <div className={`bg-accent rounded-lg p-6 lg:p-8 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <p className="font-mono text-xs uppercase tracking-widest text-accent-foreground/40 mb-5">
                    Sample Output Preview
                  </p>
                  <div className="space-y-3 font-mono text-sm text-accent-foreground/70">
                    {output.sampleData.map((row) => (
                      <p key={row.key}>
                        <span className="text-primary">{row.key}:</span> {row.value}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Nav */}
      <section className="py-12 lg:py-16 section-alt">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-xl font-bold mb-2">Jump to an Output Type</h2>
            <p className="text-sm text-muted-foreground">Click to scroll to any example above.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {outputs.map((output) => (
              <a
                key={output.id}
                href={`#${output.id}`}
                className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-lg text-sm font-medium hover:border-primary/30 hover:text-primary transition-colors"
              >
                <output.icon size={14} />
                {output.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 hero-gradient">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-hero-foreground mb-4">Need outputs like these?</h2>
          <p className="text-hero-foreground/70 max-w-lg mx-auto mb-8">
            Get in touch to discuss your project. We'll confirm availability and scope your requirements within one business day.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" variant="hero">
              <Link to="/contact">Request Availability <ArrowRight className="ml-1" size={18} /></Link>
            </Button>
            <Button asChild size="lg" variant="hero-outline">
              <Link to="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ExampleOutputs;
