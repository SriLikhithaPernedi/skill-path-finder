import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, BarChart3, Map, LogOut } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

const Landing = () => {
  const navigate = useNavigate();
  const { user, signOut } = useAuth();

  const handleSignOut = async () => {
    await signOut();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="container mx-auto px-4 pt-6 flex justify-end">
        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">{user?.email}</span>
          <Button variant="outline" size="sm" onClick={handleSignOut}>
            <LogOut className="mr-2 h-3 w-3" /> Sign Out
          </Button>
        </div>
      </div>
      <div className="container mx-auto px-4 pt-20 pb-16">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 rounded-full border bg-card px-4 py-1.5 text-sm text-muted-foreground mb-8 animate-fade-in">
            <Target className="h-4 w-4 text-primary" />
            Career-ready skill analysis
          </div>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s", opacity: 0 }}>
            Skill Roadmap<br />
            <span className="text-primary">Generator</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.2s", opacity: 0 }}>
            Bridge the gap between your skills and your dream job. Analyze your current abilities, discover what's missing, and get a personalized learning path.
          </p>
          <div className="animate-fade-in" style={{ animationDelay: "0.3s", opacity: 0 }}>
            <Button
              size="lg"
              className="text-lg px-8 py-6 rounded-xl"
              onClick={() => navigate("/analyze")}
            >
              Start Skill Analysis
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="container mx-auto px-4 pb-20">
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { icon: Target, title: "Select Your Role", desc: "Choose from popular career paths like Data Scientist, Web Developer, and more." },
            { icon: BarChart3, title: "Analyze Gaps", desc: "See your skill match percentage and identify exactly what you need to learn." },
            { icon: Map, title: "Get Your Roadmap", desc: "Receive a step-by-step personalized learning plan to reach your career goals." },
          ].map((feature, i) => (
            <div
              key={feature.title}
              className="bg-card border rounded-xl p-6 animate-fade-in"
              style={{ animationDelay: `${0.4 + i * 0.1}s`, opacity: 0 }}
            >
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Landing;
