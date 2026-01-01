import { Copy, Download, MoreVertical, RefreshCw } from "lucide-react";
import { useRef } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Skeleton } from "@/components/ui/skeleton";
import { ProposalEditor, ProposalEditorRef } from "./editor/proposal-editor";

interface PDFPreviewProps {
  isLoading: boolean;
  brief: string;
  onRegenerate?: () => void;
}

export function PDFPreview({
  isLoading,
  brief,
  onRegenerate,
}: PDFPreviewProps) {
  const editorRef = useRef<ProposalEditorRef>(null);

  return (
    <Card className="h-full w-full overflow-hidden bg-card shadow-lg flex flex-col">
      <CardHeader className="flex flex-row items-center justify-between border-b px-4 py-3 shrink-0">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          Document Preview
        </CardTitle>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <MoreVertical className="h-4 w-4" />
              <span className="sr-only">Open menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => editorRef.current?.downloadPDF()}>
              <Download className="mr-2 h-4 w-4" />
              Download PDF
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(editorRef.current?.getHTML() || "")}
            >
              <Copy className="mr-2 h-4 w-4" />
              Copy HTML
            </DropdownMenuItem>
            <DropdownMenuItem onClick={onRegenerate} disabled={isLoading}>
              <RefreshCw className="mr-2 h-4 w-4" />
              Regenerate
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      <CardContent className="p-0 flex-1 overflow-hidden">
        {isLoading ? (
          <div className="space-y-4 p-8">
            <Skeleton className="h-8 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <div className="space-y-2 pt-4">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-4/5" />
            </div>
            <div className="space-y-2 pt-4">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-11/12" />
              <Skeleton className="h-4 w-full" />
            </div>
          </div>
        ) : brief ? (
          <ProposalEditor content={brief} ref={editorRef} />
        ) : (
          <div className="flex h-full flex-col items-center justify-center text-center text-muted-foreground/50 p-8">
            <div className="rounded-full bg-muted/50 p-4 mb-4">
              <svg
                className="h-8 w-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <p>Generated brief will appear here</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
