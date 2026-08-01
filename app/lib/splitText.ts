// DOM helpers that split an element's text into word/line spans for GSAP.
// Runs client-side only, inside useGSAP callbacks.

export function splitIntoWords(el: HTMLElement): HTMLElement[] {
  const text = el.textContent ?? "";
  el.textContent = "";
  el.setAttribute("aria-label", text);
  const words: HTMLElement[] = [];
  for (const word of text.split(/\s+/).filter(Boolean)) {
    const span = document.createElement("span");
    span.textContent = word;
    span.style.display = "inline-block";
    span.setAttribute("aria-hidden", "true");
    el.appendChild(span);
    el.appendChild(document.createTextNode(" "));
    words.push(span);
  }
  return words;
}

// Wraps each line of text in an overflow-hidden mask with an inner span,
// for the classic staggered y-translate line reveal.
export function splitIntoLines(el: HTMLElement): HTMLElement[] {
  const words = splitIntoWords(el);
  // Group words by their rendered top offset to detect line breaks.
  const lines: HTMLElement[][] = [];
  let currentTop: number | null = null;
  for (const word of words) {
    const top = word.offsetTop;
    if (top !== currentTop) {
      lines.push([]);
      currentTop = top;
    }
    lines[lines.length - 1].push(word);
  }

  el.textContent = "";
  const inners: HTMLElement[] = [];
  for (const lineWords of lines) {
    const mask = document.createElement("span");
    mask.className = "split-line";
    mask.setAttribute("aria-hidden", "true");
    const inner = document.createElement("span");
    inner.textContent = lineWords.map((w) => w.textContent).join(" ");
    mask.appendChild(inner);
    el.appendChild(mask);
    inners.push(inner);
  }
  return inners;
}
