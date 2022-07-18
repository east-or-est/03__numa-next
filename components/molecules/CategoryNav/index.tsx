import Link from 'next/link';

interface CategoryNavProps {
  category: [];
}

interface CategoryNavMapListProps {
  id: string,
  name: string,
}

function CategoryNav({ category } : CategoryNavProps) {
  return (
    <ul className="parts-list_01" data-sp-text-align="left">
      <li>
        <Link href={{
          pathname:"/"
        }}>
          <a>
            ALL
          </a>
        </Link>
      </li>
      {category.map((json: CategoryNavMapListProps) =>
        <li
          key={json.id}
          data-cat={json.id}
        >
          <Link href={{
            pathname: `/blog/category/${json.id}`
          }}>
            <a>
              {json.name}
            </a>
          </Link>
        </li>
      )}
    </ul>
  );
}

export default CategoryNav;
