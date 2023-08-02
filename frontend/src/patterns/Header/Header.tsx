import { ProfileMenu } from './ProfileMenu';
import { Logo } from '../../assets/Logo';
import { HeaderMenu } from './HeaderMenu';

export function Header() {
    return (
        <header className="flex items-center justify-between px-2 py-4 border-b border-default sm:px-6">
            <div className="flex items-center gap-3 ">
                <div className="block sm:hidden">
                    <Logo />
                </div>
                <h3 className="hidden text-lg font-bold tracking-wide sm:block">
                    Spinit Finance
                </h3>

                <HeaderMenu />
            </div>

            <ProfileMenu customer="Luciano" />
        </header>
    );
}
