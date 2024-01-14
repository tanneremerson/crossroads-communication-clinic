import type { Metadata } from 'next';
import { Cormorant } from 'next/font/google';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';

const cormorant = Cormorant({
  subsets: ['latin'],
  variable: '--font-corm',
});

export const metadata: Metadata = {
  title: 'Crossroads Communication Clinic',
  description: `Struggling with a stutter? I can help! I'm a Speech-Language Pathologist offering both in-person and online therapy to empower you to achieve confident communication.

I offer the flexibility of both in-person sessions at my clinic and convenient teletherapy options from the comfort of your own home. I work with kids, children, teens, and adults.

My approach to stuttering therapy is comprehensive and tailored to your unique needs. I utilize evidence-based techniques such as Avoidance Reduction Therapy, Fluency Shaping Therapy, Stuttering Modification Therapy, and Acceptance and Commitment Therapy (ACT) to help you:

Communicate confidently and freely in any situation.
Reduce the impact of your stuttering.
Develop effective coping mechanisms for challenging speaking moments.
Increase your self-esteem and confidence in your speaking abilities.
Don't let stuttering hold you back from reaching your full potential. Reach out today to schedule a consultation and start your journey towards communication freedom.

I'm dedicated to helping you overcome your stutter and find your voice. Contact me today to learn more about my services and how I can help you achieve your communication goals.

Keywords: virtual stuttering therapy, stuttering teletherapy, stuttering therapy near me, stuttering treatment for adults, stuttering treatment for children, speech language pathologist stuttering, stuttering avoidance therapy, stuttering modification therapy, stuttering acceptance, ACT for stuttering
States: Alabama, Alaska, Arkansas, Colorado, Delaware, Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana, Maine, Maryland, Minnesota, Mississippi, Missouri, Montana, Nebraska, New Hampshire, New Jersey, New Mexico, New York, North Carolina, North Dakota, Ohio, Oklahoma, Pennsylvania, South Carolina, Tennessee, Utah, Vermont, Virginia, Washington, West Virginia, Wisconsin, Wyoming`,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} font-seriff`}>
      <body>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
