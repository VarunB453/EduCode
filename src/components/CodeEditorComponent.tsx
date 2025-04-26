
import React, { useEffect, useRef } from 'react';
import { Textarea } from "@/components/ui/textarea";

interface CodeEditorComponentProps {
  value: string;
  onChange: (value: string) => void;
  language: string;
}

const CodeEditorComponent: React.FC<CodeEditorComponentProps> = ({
  value,
  onChange,
  language
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Handle tab key for indentation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      
      const textarea = textareaRef.current;
      if (!textarea) return;
      
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      
      // Insert tab at cursor position
      const newValue = value.substring(0, start) + '  ' + value.substring(end);
      onChange(newValue);
      
      // Update cursor position
      setTimeout(() => {
        textarea.selectionStart = textarea.selectionEnd = start + 2;
      }, 0);
    }
  };

  // Auto-adjust the height of the textarea based on content
  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, [value]);

  return (
    <div className="h-full relative code-editor-container border border-educode-muted rounded-lg overflow-hidden">
      <div className="absolute top-2 right-2 px-2 py-1 text-xs bg-educode-dark/50 rounded text-educode-accent">
        {language}
      </div>
      <Textarea
        ref={textareaRef}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        className="h-full w-full resize-none p-4 font-mono text-sm bg-black/30 focus:ring-educode-primary focus:border-educode-primary"
        style={{ minHeight: '100%' }}
        spellCheck="false"
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        data-language={language}
      />
    </div>
  );
};

export default CodeEditorComponent;
