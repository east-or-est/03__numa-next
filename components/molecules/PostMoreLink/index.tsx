import Link from 'next/link';

interface PostMoreLinkProps {
  moreID: string;
  more: boolean;
}

function PostMoreLink({ moreID, more }: PostMoreLinkProps) {
  return (
    <>
      { more === true ?
        <div className="parts-btn_01">
          <Link
          href={{
            pathname: `/blog/${moreID}`
          }}
          >
            <a>
              続きを読む
            </a>
          </Link>
        </div>
        : false
      }
    </>
  );
}

export default PostMoreLink;