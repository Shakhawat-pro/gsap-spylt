"use client";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollSmoother, ScrollTrigger } from 'gsap/all';
import React, { use, useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const GsapPlugins = () => {
    useGSAP(() => {
        if (typeof window !== 'undefined') {
            ScrollSmoother.create({
                wrapper: '.smooth-wrapper',
                content: '.smooth-content',
                smooth: 1.1,
                effects: true,
            });
        }
    });
    return (
        <div>

        </div>
    );
};

export default GsapPlugins;