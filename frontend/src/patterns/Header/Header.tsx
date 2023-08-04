import { ProfileMenu } from './ProfileMenu';
import { HeaderMenu } from './HeaderMenu';

import { Logo } from '@/src/assets/Logo';

export function Header() {
    return (
        <header className="flex items-center justify-between px-6 py-4 border-b bg-gray-950/40 backdrop-blur-md border-default sm:px-6">
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
