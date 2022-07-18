import { client } from '../../lib/client';

import Layout from '../../components/templates/Layout/';

import PageTitle from '../../components/atoms/PageTitle/';

interface AboutProps {
  category: [];
}

function About({ category } : AboutProps) {

  return (
    <Layout category={category}>
      <main>
        <PageTitle
          title='このサイトについて'
        />
        <div className="page-content" data-headline-style="page-privacy">
          <div className="media-margin">
            <p>
            初めまして！<br />
            創作NUMAでは、管理人エストが創作活動に関する雑記を書き綴っています。<br />
            今は自分の個人サイトを作り直している最中のため、避難所のような状態になります。
            </p>
            <h2>
              管理人：エスト
            </h2>
            <p>
              一次創作で活動する人。仕事用HNの方では検索サーチを企画・開発中。
            </p>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default About;


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

