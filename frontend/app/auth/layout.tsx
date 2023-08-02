import Image from 'next/image';
import Link from 'next/link';

import { body } from '@/_data/screens/home/pt-br';

import { Container } from '@/src/components';
import { Logo } from '@/src/assets/Logo';

type RootLayout = {
    children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayout) {
    return (
        <div className="min-h-screen font-sans">
            <Container>
                <div className="flex items-center justify-center w-full h-full">
                    <section className="hidden md:block h-[35rem] bg-violet-500 w-full">
                        <Image
                            src="/cover-img.avif"
                            alt=""
                            height={560}
                            width={560}
                            className="object-cover w-full h-full"
                        />
                    </section>

                    <section className="flex flex-col w-full h-screen md:h-[35rem] max-w-lg px-6 overflow-y-auto rounded-lg md:pt-7 pt-10 pb-36 md:pb-7 bg-neutral-800">
                        <div className="">
                            <Link
                                href="/"
                                className="flex items-center justify-start gap-4 mb-8 text-3xl font-bold font-alt"
                            >
                                <span>
                                    <Logo />
                                </span>
                                Spinit Finance
                            </Link>
                        </div>
                        {children}

                        <div className="pb-6 mt-10">
                            <p>
                                {`${body.footer.copyright} `}
                                <a
                                    href={body.footer.author.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="font-medium text-violet-400 hover:text-violet-300"
                                >
                                    {body.footer.author.label}
                                </a>
                            </p>
                        </div>
                    </section>
                </div>
            </Container>
        </div>
    );
}
