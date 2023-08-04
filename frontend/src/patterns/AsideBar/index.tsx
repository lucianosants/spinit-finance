import { Button } from '@/src/components';

import { Navbar } from '../Navbar';

import { Logo } from '@/src/assets/Logo';
import { Crown, Question } from '@/src/assets/icons';

export function AsideBar() {
    return (
        <aside className="md:flex flex-[25%] min-h-full hidden">
            <div className="flex flex-col justify-between w-full p-4 bg-gray-900 rounded-lg">
                <div>
                    <Button.Navigate variant="transparent" href="/home">
                        <Logo />
                    </Button.Navigate>

                    <div className="mt-5 text-start">
                        <h2 className="text-sm font-bold tracking-widest text-gray-200 font-alt">
                            Menu Principal
                        </h2>

                        <div className="mt-3">
                            <Navbar />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-3">
                    <a
                        href="#"
                        className="flex items-center gap-3 text-sm font-medium w-fit hover:text-white"
                    >
                        <Question size={18} /> Obter ajuda
                    </a>

                    <Button.Navigate
                        href="#"
                        width="full"
                        variant="warning"
                        icon={<Crown size={20} weight="bold" />}
                    >
                        Seja premium
                    </Button.Navigate>
                </div>
            </div>
        </aside>
    );
}
