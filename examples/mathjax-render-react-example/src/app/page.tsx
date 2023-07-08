"use client";

import React, { ChangeEventHandler, useState, useCallback } from "react";

import { Textarea } from "@/components/ui/textarea";
import { Container } from "@/components/container";
import { MathJaxNode } from "@/components/mathjax-node";

export default function Page() {
  const [texValue, setTexValue] = useState("");

  const handleTextareaChange: ChangeEventHandler<HTMLTextAreaElement> =
    useCallback((event) => {
      setTexValue(event.target.value);
    }, []);

  return (
    <Container>
      <div className="flex flex-1 flex-col justify-center items-center gap-y-8">
        <Textarea
          className="w-1/2"
          rows={8}
          cols={8}
          value={texValue}
          onChange={handleTextareaChange}
        />
        <MathJaxNode tex={texValue} display={true}></MathJaxNode>
      </div>
    </Container>
  );
}
