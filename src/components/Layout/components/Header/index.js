import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/index';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok"></img>
                </div>
            </div>
        </header>
    );
}

export default Header;
