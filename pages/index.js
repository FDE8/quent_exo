import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Hello, mon nom est Florent]</p>
        <p>
          <h1 className="title">
              Read <Link href="/posts/first-post">this page!</Link>
          </h1>

        </p>
        
        <form action="/api/form" method="post">
          <label for="first">Votre nom:</label>
          <input type="text" id="first" name="first" />
          <button type="Commencer">Submit</button>
        </form>


        
       
      </section>
    </Layout>
  );
}
