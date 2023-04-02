import '../styles/globals.css';
import Auth from './components/Auth';
import Sidebar from './components/Sidebar';
import Widget from './components/Widget';
import Providers from './Providers';

export const metadata = {
  title: 'Twitter Clone app',
  description: 'Twitter Clone build with + Typescript .',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <Providers>
          <div className='mx-auto flex h-screen w-full max-w-7xl flex-1  flex-col md:flex-row  md:flex-nowrap'>
            {/*  Sidebar */}
            <Sidebar />
            <div className='min-w-md min-w-ss h-screen w-full overflow-y-auto border border-b-0  dark:border-twitterGray-999 md:w-1/2'>
              {/*  Feed */}
              {children}
            </div>
            {/*  Widget */}
            <Widget />
          </div>
          <Auth />
        </Providers>
      </body>
    </html>
  );
}
