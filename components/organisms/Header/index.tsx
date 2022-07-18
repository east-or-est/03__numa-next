import HLogo from '../../molecules/HLogo/';
import CategoryNav from '../../molecules/CategoryNav/';
import styles from './style.module.scss';

interface HeaderProps {
  category: [];
}

function Header({ category } : HeaderProps) {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header_inner}>
          <div className={styles.logo}>
            <HLogo />
          </div>
          <div className={styles.desc}>
            <div className={styles.desc_inner}>
              <p>
                創作活動や戯言のような徒然日記、<br />ゲームプレイ日記を纏めたブログ
              </p>
              <p className="tc">
                管理人：エスト
              </p>
            </div>
          </div>
          <CategoryNav
            category={category}
          />
        </div>
      </header>
    </>
  );
}

export default Header;