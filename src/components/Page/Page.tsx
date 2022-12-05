import { Helmet } from 'react-helmet-async';
import { forwardRef, ReactNode } from 'react';
import Footer from '../../layouts/Footer';

interface Props {
  children: ReactNode;
  meta?: ReactNode;
  title: string;
}

const Page = forwardRef<HTMLDivElement, Props>(
  ({ children, title = '', meta, ...other }, ref) => (
    <>
      <Helmet>
        <title>{`${title} | NewsGrid`}</title>
        {meta}
      </Helmet>

      <main ref={ref} {...other}>
        {children}
      </main>

      <Footer />
    </>
  )
);

export default Page;
