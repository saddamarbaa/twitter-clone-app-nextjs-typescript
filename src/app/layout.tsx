import '../styles/globals.css';
import Auth from './components/Auth';
import Sidebar from './components/Sidebar';
import Widget from './components/Widget';
import Providers from './Providers';
import Messages from './components/Messages';

export const metadata = {
  title: 'Twitter Clone app',
  description: 'Twitter Clone build with + Typescript .',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='relative flex min-h-screen flex-col'>
        <Providers>
          <div className='mx-auto flex min-h-full w-full max-w-7xl flex-row pr-4 md:px-0 md:pr-0'>
            {/*  Sidebar */}
            <Sidebar />

            <div className='relative flex h-full min-h-screen w-full flex-1 flex-col border border-b-0 dark:border-twitterGray-999 md:w-1/2'>
              {/* <Feeds /> */}
              {children}
            </div>

            {/* <Widget /> */}
            <Widget />
          </div>
          {/* <Auth /> */}
          <Messages />
        </Providers>
      </body>
    </html>
  );
}
