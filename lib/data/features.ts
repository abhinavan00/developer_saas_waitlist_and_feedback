import type { StaticImageData } from 'next/image';
import featureIcon_01 from '@/public/feature-01-icon.svg';
import featureIcon_02 from '@/public/feature-02-icon.svg';
import featureIcon_03 from '@/public/feature-03-icon.svg';

type Feature = {
    id: number,
    title: string,
    description: string,
    icon: StaticImageData
}

export const features: Feature[] = [
    {
        id: 1,
        title: 'Sub-Millisecond Tracing',
        description: 'Hardware-accelerated ring buffers stream traces with less than 150µs CPU overhead.',
        icon: featureIcon_01
    },
    {
        id: 2,
        title: 'CLI-First Workflows',
        description: 'One-liner instrumentation for Bun, Node, Go, Rust, and Python without invasive SDK code.',
        icon: featureIcon_02
    },
    {
        id: 3,
        title: 'Deterministic Root Cause',
        description: 'Correlates diffs, panic logs, and runtime metrics directly to offending PR lines.',
        icon: featureIcon_03
    }
    
]