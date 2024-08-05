import './globals.css';
import NavBar from '@/components/Navbar';
import Footer from '@/components/Footer/Footer';
import { Plus_Jakarta_Sans } from 'next/font/google';
import Provider from '@/components/Provider';

const inter = Plus_Jakarta_Sans({ subsets: ['latin'] });

export const metadata = {
  title: 'mystory | share your stories anonymously',
  description:
    'a place to share stories anonymously and connect with like minded people.',
  keywords: [
    'Anonymous',
    'Story Writing',
    'Creative Writing',
    'Anonymous Stories',
    'Writing Community',
    'Online Writing Platform',
    'Narrative Writing',
    'Anonymous Authorship',
    'Story Sharing',
    'Collaborative Writing',
    'Creative Expression',
    'Writing Prompt',
    'User-generated Content',
    'Community Stories',
    'Anonymous Contributions',
    'Narrative Community',
    'Anonymous Feedback',
    'Writing Forum',
    'Anonymous Platform',
    'Story Exchange',
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Add favicon link with fixed size */}
        <link rel="icon" href="/favicon.ico" sizes="any" />

        {/* Metadata */}
        <meta name="title" content={metadata.title} />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords.join(', ')} />
      </head>
      <body
        className={`${inter.className} dark:bg-[#030303] dark:text-white text-black bg-white`}
      >
        <Provider>
          <NavBar />

          <div>{children}</div>
        </Provider>
        <Footer />
      </body>
    </html>
  );
}
