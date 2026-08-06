import React from 'react';

/**
 * Renders `**text**` as <strong>. The data files mark the measurable part of a
 * bullet this way so the number can carry weight 600 without HTML in the data.
 * Weight 500 is absent from this design system, so <strong> resolves to 600.
 */
export function rich(text: string): React.ReactNode[] {
  return text.split(/(\*\*[^*]+\*\*)/g).filter(Boolean).map((part, i) =>
    part.startsWith('**') && part.endsWith('**')
      ? <strong key={i} className="font-semibold">{part.slice(2, -2)}</strong>
      : <React.Fragment key={i}>{part}</React.Fragment>
  );
}
