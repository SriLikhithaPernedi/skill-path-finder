import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Sparkles } from "lucide-react";
import { getAvailableRoles, analyzeSkills } from "@/lib/skillEngine";

const SkillInput = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState("");
  const [skills, setSkills] = useState("");
  const roles = getAvailableRoles();

  const handleAnalyze = () => {
    if (!role || !skills.trim()) return;
    const result = analyzeSkills(role, skills);
    navigate("/results", { state: { result } });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <Button variant="ghost" className="mb-8" onClick={() => navigate("/")}>
          <ArrowLeft className="mr-2 h-4 w-4" /> Back
        </Button>

        <div className="max-w-xl mx-auto">
          <h1 className="font-display text-3xl md:text-4xl font-bold mb-2 animate-fade-in">Skill Analysis</h1>
          <p className="text-muted-foreground mb-10 animate-fade-in" style={{ animationDelay: "0.1s", opacity: 0 }}>
            Tell us about your target role and current skills.
          </p>

          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.2s", opacity: 0 }}>
            <div>
              <label className="text-sm font-medium mb-2 block">Target Career Role</label>
              <Select value={role} onValueChange={setRole}>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Select a role..." />
                </SelectTrigger>
                <SelectContent>
                  {roles.map(r => (
                    <SelectItem key={r} value={r}>{r}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Your Current Skills</label>
              <Textarea
                placeholder="Enter your skills, separated by commas (e.g., Python, SQL, Machine Learning, Statistics)"
                value={skills}
                onChange={e => setSkills(e.target.value)}
                className="min-h-[120px] resize-none"
              />
              <p className="text-xs text-muted-foreground mt-2">Separate each skill with a comma</p>
            </div>

            <Button
              size="lg"
              className="w-full h-12 text-base"
              onClick={handleAnalyze}
              disabled={!role || !skills.trim()}
            >
              <Sparkles className="mr-2 h-4 w-4" />
              Analyze Skills
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillInput;
