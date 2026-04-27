import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, CheckCircle2, XCircle, ArrowRight } from "lucide-react";
import type { AnalysisResult } from "@/lib/skillEngine";

const Results = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const result = location.state?.result as AnalysisResult | undefined;

  if (!result) {
    navigate("/analyze");
    return null;
  }

  const getMatchColor = (pct: number) => {
    if (pct >= 70) return "text-success";
    if (pct >= 40) return "text-warning";
    return "text-destructive";
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <Button variant="ghost" className="mb-8" onClick={() => navigate("/analyze")}>
          <ArrowLeft className="mr-2 h-4 w-4" /> Analyze Again
        </Button>

        <div className="max-w-3xl mx-auto space-y-8">
          {/* Header */}
          <div className="animate-fade-in">
            <h1 className="font-display text-3xl md:text-4xl font-bold mb-1">Your Results</h1>
            <p className="text-muted-foreground">Analysis for <span className="font-medium text-foreground">{result.role}</span></p>
          </div>

          {/* Match Percentage */}
          <div className="bg-card border rounded-xl p-6 animate-fade-in" style={{ animationDelay: "0.1s", opacity: 0 }}>
            <div className="flex items-baseline justify-between mb-3">
              <h2 className="font-display font-semibold text-lg">Skill Match</h2>
              <span className={`text-3xl font-bold font-display ${getMatchColor(result.matchPercentage)}`}>
                {result.matchPercentage}%
              </span>
            </div>
            <Progress value={result.matchPercentage} className="h-3" />
            <p className="text-sm text-muted-foreground mt-3">
              You match {result.matchedSkills.length} out of {result.matchedSkills.length + result.missingSkills.length} required skills.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Matched */}
            <div className="bg-card border rounded-xl p-6 animate-fade-in" style={{ animationDelay: "0.2s", opacity: 0 }}>
              <h2 className="font-display font-semibold text-lg mb-4 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-success" />
                Matched Skills
              </h2>
              {result.matchedSkills.length === 0 ? (
                <p className="text-sm text-muted-foreground">No matching skills found.</p>
              ) : (
                <div className="flex flex-wrap gap-2">
                  {result.matchedSkills.map(skill => (
                    <span key={skill} className="inline-flex items-center rounded-full bg-success/10 px-3 py-1 text-sm font-medium text-success">
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Missing */}
            <div className="bg-card border rounded-xl p-6 animate-fade-in" style={{ animationDelay: "0.3s", opacity: 0 }}>
              <h2 className="font-display font-semibold text-lg mb-4 flex items-center gap-2">
                <XCircle className="h-5 w-5 text-destructive" />
                Missing Skills
              </h2>
              {result.missingSkills.length === 0 ? (
                <p className="text-sm text-muted-foreground">You have all required skills! 🎉</p>
              ) : (
                <div className="flex flex-wrap gap-2">
                  {result.missingSkills.map(skill => (
                    <span key={skill} className="inline-flex items-center rounded-full bg-destructive/10 px-3 py-1 text-sm font-medium text-destructive">
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Roadmap */}
          {result.roadmap.length > 0 && (
            <div className="bg-card border rounded-xl p-6 animate-fade-in" style={{ animationDelay: "0.4s", opacity: 0 }}>
              <h2 className="font-display font-semibold text-lg mb-6">Your Learning Roadmap</h2>
              <div className="space-y-4">
                {result.roadmap.map((step, i) => (
                  <div key={step.step} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm font-bold shrink-0">
                        {step.step}
                      </div>
                      {i < result.roadmap.length - 1 && (
                        <div className="w-px h-full bg-border mt-1" />
                      )}
                    </div>
                    <div className="pb-4">
                      <h3 className="font-semibold mb-1">{step.title}</h3>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex gap-4 animate-fade-in" style={{ animationDelay: "0.5s", opacity: 0 }}>
            <Button variant="outline" onClick={() => navigate("/analyze")}>
              <ArrowLeft className="mr-2 h-4 w-4" /> Try Another Role
            </Button>
            <Button onClick={() => navigate("/")}>
              Back to Home <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
