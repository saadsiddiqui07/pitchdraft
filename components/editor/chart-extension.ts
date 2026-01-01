import { Node, mergeAttributes } from "@tiptap/core";
import { ReactNodeViewRenderer } from "@tiptap/react";
import ChartNode from "./chart-node";

export default Node.create({
  name: "chart",

  group: "block",

  atom: true,

  parseHTML() {
    return [
      {
        tag: "chart-component",
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return ["chart-component", mergeAttributes(HTMLAttributes)];
  },

  addNodeView() {
    return ReactNodeViewRenderer(ChartNode);
  },
});
