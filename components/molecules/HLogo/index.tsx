import Link from 'next/link';
import { SITE_TITLE } from '../../../const/Meta/';

function HLogo() {
  return (
    <div>
      <Link
        href={{
          pathname:"/"
        }}
      >
        <a>
          <img src="/asset/img/logo.png" alt={SITE_TITLE} />
        </a>
      </Link>
    </div>
  );
}

export default HLogo;