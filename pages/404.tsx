import Link from 'next/link';

import { client } from '../lib/client';

import Layout from '../components/templates/Layout/';

import styles from './404.module.scss';

interface Err404Props {
  category: [];
}

function Err404({ category } : Err404Props) {

  return (
    <Layout category={category}>
      <main className={styles.main}>
        <div className="page-content" data-headline-style="page-404">
          <div className="media-margin">
            <h2>404エラー！！！</h2>
            <div>
              <p className="tc">
                見つからない。。
              </p>
              <div className="parts-btn_01">
                <Link href={{
                  pathname:"/"
                }}>
                  <a>
                    ブログ一覧へ戻る
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default Err404;

export async function getStaticProps() {
  const data_cat = await client
    .get({
      endpoint: 'category',
      queries: {
        offset: 0,
      }
    });
  return {
    props: {
      category: data_cat.contents,
    },
  }
}