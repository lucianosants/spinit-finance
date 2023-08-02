import { Navbar } from './Navbar';
import { Button } from '../components';
import { Logo } from '../assets/Logo';
import { Question } from '@/src/assets/icons';

export function AsideBar() {
    return (
        <aside className="md:flex flex-[20%] min-h-full hidden">
            <div className="flex flex-col justify-between w-full p-4 rounded-lg bg-neutral-800">
                <div>
                    <Button.Navigate variant="transparent" href="/home">
                        <Logo />
                    </Button.Navigate>

                    <div className="mt-5 text-start">
                        <h2 className="text-sm font-bold tracking-widest font-alt">
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
                        className="flex items-center gap-3 text-sm font-medium hover:text-white"
                    >
                        <Question size={18} /> Obter ajuda
                    </a>

                    <Button.Navigate href="#" width="full" variant="success">
                        Seja premium
                    </Button.Navigate>
                </div>
            </div>
        </aside>
    );
}
