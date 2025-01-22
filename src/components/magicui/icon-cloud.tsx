'use client';

import { useEffect, useMemo, useState } from 'react';
import {
  Cloud,
  fetchSimpleIcons,
  ICloud,
  renderSimpleIcon,
  SimpleIcon,
} from 'react-icon-cloud';

export const cloudProps: Omit<ICloud, 'children'> = {
  containerProps: {
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      paddingTop: 40,
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: 'default',
    tooltip: 'native',
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: '#0000',
    maxSpeed: 0.04,
    minSpeed: 0.02,
  },
};

const renderCustomIcon = (icon: SimpleIcon, theme: string) => {
  const bgHex = theme === 'light' ? '#f3f2ef' : '#080510';
  const fallbackHex = theme === 'light' ? '#6e6e73' : '#ffffff';
  const minContrastRatio = theme === 'dark' ? 2 : 1.2;

  return renderSimpleIcon({
    icon,
    bgHex,
    fallbackHex,
    minContrastRatio,
    size: 42,
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: e => e.preventDefault(),
    },
  });
};

export type DynamicCloudProps = {
  iconSlugs: string[];
};

export default function IconCloud({ iconSlugs }: DynamicCloudProps) {
  const [data, setData] = useState<{
    simpleIcons: Record<string, SimpleIcon>;
  } | null>(null);
  const [mounted, setMounted] = useState(false);

  // Simulate theme handling
  const theme = 'dark';

  useEffect(() => {
    setMounted(true);
    fetchSimpleIcons({ slugs: iconSlugs }).then(setData);
  }, [iconSlugs]);

  const renderedIcons = useMemo(() => {
    if (!data) return null;
    return Object.values(data.simpleIcons).map(icon =>
      renderCustomIcon(icon as SimpleIcon, theme)
    );
  }, [data, theme]);

  if (!mounted) {
    return null; // Avoid SSR mismatch by rendering only after mount
  }

  return <Cloud {...cloudProps}>{renderedIcons}</Cloud>;
}
