"use client";

import * as React from "react";
import { Loader2, Wand2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { PDFPreview } from "@/components/pdf-preview";

export default function AppPage() {
  const [prompt, setPrompt] = React.useState("");
  const [isGenerating, setIsGenerating] = React.useState(false);
  const [generatedBrief, setGeneratedBrief] = React.useState("");

  const handleGenerate = async () => {
    if (!prompt) return;

    setIsGenerating(true);
    setGeneratedBrief("");

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setGeneratedBrief(
      `<h1>Project Proposal</h1><p><strong>Subject:</strong> ${prompt}</p><p>This is a generated proposal based on your input. You can now edit this document, add images, charts, and more.</p><h2>Executive Summary</h2><p>Our team has analyzed your requirements and prepared this proposal to address your needs effectively.</p>`
    );
    setIsGenerating(false);
  };

  const PLACEHOLDER_EXAMPLE = `Paste client email, job post, or meeting notes here…`;

  return (
    <div className="flex flex-1 flex-col gap-6">
      <div className="flex flex-1 gap-6 min-h-0">
        <div className="flex w-1/2 flex-col gap-4 min-h-0">
          <Card className="h-full w-full overflow-hidden bg-card shadow-lg flex flex-col">
            <CardHeader className="border-b px-4 py-3 shrink-0">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Add Client Brief
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0 flex-1 flex flex-col min-h-0">
              <Textarea
                id="brief"
                placeholder={PLACEHOLDER_EXAMPLE}
                className="flex-1 resize-none p-4 text-base min-h-0 border-0 focus-visible:ring-0 rounded-none bg-transparent dark:bg-transparent"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
              />
            </CardContent>
          </Card>
        </div>

        <div className="w-1/2 flex flex-col min-h-0">
          <PDFPreview
            isLoading={isGenerating}
            brief={generatedBrief}
            onRegenerate={handleGenerate}
          />
        </div>
      </div>

      <div className="flex justify-center shrink-0">
        <Button
          size="lg"
          onClick={handleGenerate}
          disabled={!prompt || isGenerating}
          className="min-w-[200px] gap-2 bg-blue-600 text-white hover:bg-blue-700"
        >
          {isGenerating ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Generating...
            </>
          ) : (
            <>
              <Wand2 className="h-4 w-4" />
              Generate Proposal
            </>
          )}
        </Button>
      </div>
    </div>
  );
}
