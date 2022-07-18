import Link from 'next/link';

function OtherNav() {
  return (
    <ul className="parts-list_01">
      <li>
        <Link href={{
          pathname:"/about/"
        }}>
          <a>
            About
          </a>
        </Link>
      </li>
      <li>
        <a href="https://github.com/east-or-est/03__privacy/blob/main/numa/privacy.md" target="_blank" rel="noopener noreferrer">
          Privacy
        </a>
      </li>
      <li>
        <a href="https://derive-point.work/" target="_blank" rel="noopener noreferrer">
          Business
        </a>
      </li>      
    </ul>
  );
}

export default OtherNav;
