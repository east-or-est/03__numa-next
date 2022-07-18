import styles from './style.module.scss';

import PostHeadline from '../../atoms/PostHeadline';
import PostFiles from '../../molecules/PostFiles';

interface PostDescProps {
  headline: string;
  headline_component: string | [];
  desc: string;
  files: [];
}

function PostDesc({ headline = '', headline_component = [], desc = '', files = [] }: PostDescProps) {

  return (
    <div className={styles.content}>
      { headline !== '' ?
        <>
          <PostHeadline
            headline={headline}
            headline_component={headline_component}
          />
        </>
        : false
      }
      { files.length ?
        <>
          <PostFiles
            files={files}
          />
        </>
        : false
      }
      { desc !== '' ?
        <div className={styles.desc}>
          <p>
            {desc}
          </p>
        </div>
        : false
      }
    </div>
  );
}

export default PostDesc;