"use client";
import React, {
  forwardRef,
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
  type TextareaHTMLAttributes,
} from "react";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  maxLength?: number;
}

function updateTextAreaSize(textArea?: HTMLTextAreaElement) {
  if (!textArea) return;
  textArea.style.height = "0"; // reset
  textArea.style.height = `${textArea.scrollHeight}px`; // adjust to content
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ label, error, maxLength = 200, className = "", ...props }, forwardedRef) => {
    const [value, setValue] = useState(props.defaultValue?.toString() ?? "");
    const [count, setCount] = useState(value.length);
    const innerRef = useRef<HTMLTextAreaElement | null>(null);

    // Combine forwardedRef + local ref
    const setRefs = useCallback(
      (el: HTMLTextAreaElement) => {
        innerRef.current = el;
        if (typeof forwardedRef === "function") forwardedRef(el);
        else if (forwardedRef) (forwardedRef as React.RefObject<HTMLTextAreaElement | null>).current = el;
        updateTextAreaSize(el);
      },
      [forwardedRef]
    );

    useLayoutEffect(() => {
      updateTextAreaSize(innerRef.current ?? undefined);
    }, [value]);

    const base =
      "block w-full px-3 pt-2 pb-6 text-sm placeholder-gray-400 bg-white text-background-950 transition-colors disabled:opacity-50 border-b-2 focus:outline-none focus:ring-0 resize-none overflow-hidden";
    const stateClasses = error
      ? "border-red-500 focus:border-red-700"
      : "border-secondary-950 focus:border-secondary-600";

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const text = e.target.value;
      if (text.length <= maxLength) {
        setValue(text);
        setCount(text.length);
        props.onChange?.(e);
      }
    };

    return (
      <div className="flex flex-col">
        {label && (
          <label className="mb-1 text-sm font-medium text-secondary-950">
            {label}
          </label>
        )}

        <div className="relative">
          <textarea
            ref={setRefs}
            value={value}
            onChange={handleChange}
            maxLength={maxLength}
            className={`${base} ${stateClasses} ${className}`}
            aria-invalid={Boolean(error)}
            {...props}
          />

          <div className="absolute bottom-1 right-2 text-xs text-gray-500 select-none">
            {count}/{maxLength}
          </div>
        </div>

        {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
      </div>
    );
  }
);

TextArea.displayName = "TextArea";

export default TextArea;
