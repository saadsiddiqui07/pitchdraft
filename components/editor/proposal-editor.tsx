"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import ChartExtension from "./chart-extension";
import { MenuBar } from "./menu-bar";
import { useEffect, useImperativeHandle, forwardRef, useRef } from "react";

interface ProposalEditorProps {
  content: string;
  editable?: boolean;
}

export interface ProposalEditorRef {
  downloadPDF: () => void;
  getHTML: () => string;
}

const ProposalEditor = forwardRef<ProposalEditorRef, ProposalEditorProps>(
  ({ content, editable = true }, ref) => {
    const editorRef = useRef<HTMLDivElement>(null);

    const editor = useEditor({
      extensions: [
        StarterKit,
        Image,
        ChartExtension,
      ],
      content: content,
      editable: editable,
      immediatelyRender: false,
      editorProps: {
        attributes: {
          class: "prose prose-sm max-w-none focus:outline-none min-h-[500px] px-8 py-6 bg-white dark:bg-zinc-950 dark:prose-invert",
        },
      },
    });

    // Update content when prop changes
    useEffect(() => {
      if (editor && content && editor.getHTML() !== content) {
         // Only set content if it's significantly different to avoid cursor jumps or reset
         // But since 'content' from parent is likely the "generated" one, we should probably reset if it changes.
         // However, we must be careful not to overwrite user edits if 'content' prop hasn't actually changed.
         // For now, let's assume if content prop changes, it's a regeneration.
         editor.commands.setContent(content);
      }
    }, [content, editor]);

    useImperativeHandle(ref, () => ({
      downloadPDF: async () => {
        if (!editorRef.current) return;
        
        const element = editorRef.current.querySelector('.ProseMirror');
        if (!element) return;

        const html2pdf = (await import("html2pdf.js")).default;

        const opt = {
          margin: [10, 10],
          filename: 'proposal.pdf',
          image: { type: 'jpeg', quality: 0.98 },
          html2canvas: { scale: 2, useCORS: true },
          jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
        };

        html2pdf().set(opt).from(element).save();
      },
      getHTML: () => {
        return editor?.getHTML() || "";
      }
    }));

    return (
      <div className="flex flex-col h-full border rounded-md overflow-hidden bg-background" ref={editorRef}>
        {editable && <MenuBar editor={editor} />}
        <div className="flex-1 overflow-y-auto bg-muted/5">
           <div className="max-w-[210mm] mx-auto bg-background shadow-sm min-h-full">
            <EditorContent editor={editor} />
           </div>
        </div>
      </div>
    );
  }
);

ProposalEditor.displayName = "ProposalEditor";

export { ProposalEditor };
