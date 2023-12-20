import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
title: "Threads Clone",
description: "A Next.js 14 Meta Threads Application Clone",
};

export default function RootLayout({
children,
}: {
children: React.ReactNode;
}) {
return (


<body className={'${inter.className} bg-dark-1'}>{children}</body>


);
}