import Link from 'next/link';
import Layout from '@/components/Layout';

export default function NotFound() {
  return (
    <Layout
      title="Page Not Found - Tom Eagle"
      description="The page you're looking for doesn't exist."
    >
      <section className="not-found">
        <div className="wrapper">
          <div className="not-found-content">
            <h1 className="not-found-title">404</h1>
            <h2 className="not-found-subtitle">Page Not Found</h2>
            <p className="not-found-description">
              Sorry, the page you&apos;re looking for doesn&apos;t exist.
            </p>
            <Link href="/" className="not-found-link">
              Go back home
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
} 