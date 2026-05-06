import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CalendarDays, CheckCircle, Clock, MapPin } from "lucide-react";

const months = [
  { name: "January", status: "full" },
  { name: "February", status: "full" },
  { name: "March", status: "limited" },
  { name: "April", status: "limited" },
  { name: "May", status: "available" },
  { name: "June", status: "available" },
  { name: "July", status: "available" },
  { name: "August", status: "available" },
  { name: "September", status: "available" },
  { name: "October", status: "available" },
  { name: "November", status: "available" },
  { name: "December", status: "available" },
];

const statusConfig: Record<string, { label: string; classes: string; dot: string }> = {
  available: { label: "Available", classes: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20", dot: "bg-emerald-500" },
  limited: { label: "Limited", classes: "bg-amber-500/10 text-amber-400 border-amber-500/20", dot: "bg-amber-500" },
  full: { label: "Fully Booked", classes: "bg-red-500/10 text-red-400 border-red-500/20", dot: "bg-red-500" },
};

const services = [
  "Dusk / Dawn Emergence & Re-entry Surveys",
  "Remote Acoustic Monitoring & Analysis",
  "Thermal / IR Video Review",
  "Preliminary Roost Assessments (PRA)",
  "Species Identification & Reporting",
  "Motion Composite Image Production",
];

const Availability = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-16 bg-gradient-to-b from-accent to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-primary text-sm font-medium mb-4">
              <CalendarDays size={16} />
              <span>2026 Season</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              2026 Availability
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
              Plan your survey season early. Below is our current availability for 2026 field surveys and remote analysis services across the UK.
            </p>
          </div>
        </div>
      </section>

      {/* Calendar Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap items-center gap-6 mb-10">
            <h2 className="text-2xl font-bold">Monthly Overview</h2>
            <div className="flex items-center gap-4 text-sm">
              {Object.entries(statusConfig).map(([key, cfg]) => (
                <span key={key} className="flex items-center gap-1.5">
                  <span className={`w-2.5 h-2.5 rounded-full ${cfg.dot}`} />
                  {cfg.label}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {months.map((m) => {
              const cfg = statusConfig[m.status];
              return (
                <div
                  key={m.name}
                  className={`rounded-xl border p-5 text-center transition-all hover:scale-[1.03] ${cfg.classes}`}
                >
                  <p className="font-semibold text-foreground mb-2">{m.name}</p>
                  <span className="text-xs font-medium">{cfg.label}</span>
                </div>
              );
            })}
          </div>

          <p className="text-xs text-muted-foreground mt-6">
            Last updated: May 2026. Availability changes regularly — <Link to="/contact" className="text-primary hover:underline">contact us</Link> for the latest.
          </p>
        </div>
      </section>

      {/* Services available */}
      <section className="py-16 bg-muted/40">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Services Available to Book</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {services.map((s) => (
                <div key={s} className="flex items-start gap-3 bg-card rounded-lg border border-border p-4">
                  <CheckCircle size={18} className="text-primary mt-0.5 shrink-0" />
                  <span className="text-sm text-foreground">{s}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key info */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <h2 className="text-2xl font-bold mb-8">Booking Information</h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <Clock size={20} className="text-primary mt-1 shrink-0" />
              <div>
                <h3 className="font-semibold mb-1">Lead Times</h3>
                <p className="text-sm text-muted-foreground">
                  We recommend booking field surveys at least 4–6 weeks in advance during peak season (May–September). Remote analysis can often be turned around within 5–10 working days.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <MapPin size={20} className="text-primary mt-1 shrink-0" />
              <div>
                <h3 className="font-semibold mb-1">Coverage</h3>
                <p className="text-sm text-muted-foreground">
                  Field surveys are available across southern and central England, based from Newbury, Berkshire. Remote acoustic analysis and reporting services are available UK-wide.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <CalendarDays size={20} className="text-primary mt-1 shrink-0" />
              <div>
                <h3 className="font-semibold mb-1">Seasonal Notes</h3>
                <p className="text-sm text-muted-foreground">
                  Bat activity surveys run from May to September, with optimal conditions in June–August. PRA surveys and acoustic monitoring can be scheduled across a wider window depending on project requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-b from-muted/40 to-background">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Secure Your 2026 Survey Dates
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto mb-8">
            Peak season fills quickly. Get in touch now to lock in your preferred dates and ensure your project stays on schedule.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg">
              <Link to="/contact">Request Availability</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Availability;
