"use client";

import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { CyberButton } from "@/components/ui/CyberButton";

export function BlueprintLightbox({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const openerId = useId();
  const titleId = useId();
  const [open, setOpen] = useState(false);
  const [zoom, setZoom] = useState(1);

  const close = useCallback(() => {
    setOpen(false);
    setZoom(1);
    dialogRef.current?.close();
    document.getElementById(openerId)?.focus();
  }, [openerId]);

  useEffect(() => {
    const node = dialogRef.current;
    if (!node) return;
    if (open && !node.open) node.showModal();
    if (!open && node.open) node.close();
  }, [open]);

  useEffect(() => {
    const node = dialogRef.current;
    if (!node) return;
    function onClose() {
      setOpen(false);
      setZoom(1);
    }
    node.addEventListener("close", onClose);
    return () => node.removeEventListener("close", onClose);
  }, []);

  return (
    <>
      <CyberButton
        id={openerId}
        type="button"
        variant="secondary"
        onClick={() => setOpen(true)}
      >
        Ampliar esquema
      </CyberButton>
      <dialog
        ref={dialogRef}
        aria-labelledby={titleId}
        className="fixed inset-0 z-[80] m-0 h-full max-h-none w-full max-w-none border-0 bg-[#030712]/95 p-0 text-foreground backdrop:bg-[#030712]/80"
        onClick={(event) => {
          if (event.target === dialogRef.current) close();
        }}
      >
        <div className="flex h-full flex-col">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-4 py-3 sm:px-6">
            <p id={titleId} className="tech-label">
              Esquema // {title}
            </p>
            <div className="flex flex-wrap items-center gap-2">
              <CyberButton
                type="button"
                variant="ghost"
                onClick={() => setZoom((value) => Math.max(1, Number((value - 0.25).toFixed(2))))}
              >
                Reducir
              </CyberButton>
              <CyberButton
                type="button"
                variant="ghost"
                onClick={() => setZoom((value) => Math.min(3, Number((value + 0.25).toFixed(2))))}
              >
                Ampliar
              </CyberButton>
              <CyberButton type="button" variant="secondary" onClick={close}>
                Cerrar
              </CyberButton>
            </div>
          </div>
          <div className="min-h-0 flex-1 overflow-auto p-4 sm:p-6">
            <div
              className="origin-top-left transition-transform duration-200 motion-reduce:transition-none"
              style={{ transform: `scale(${zoom})`, width: `${100 / zoom}%` }}
            >
              {children}
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
}
