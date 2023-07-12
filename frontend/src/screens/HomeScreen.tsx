import { ArrowRight, Lightbulb } from '@/src/assets/icons';
import Link from 'next/link';

import { body } from '@/_data/screens/home/pt-br';

export function HomeScreen() {
    return (
        <div className="flex flex-col items-center justify-between h-full max-w-4xl gap-8 p-6 mx-auto text-start sm:text-center text-neutral-900">
            <section className="flex flex-col gap-10 space-y-2">
                <h1 className="text-lg font-bold">{body.title}</h1>

                <p className="text-5xl font-bold leading-tight text-transparent font-alt bg-gradient-to-br from-orange-600 lin to-violet-600 bg-clip-text ">
                    {body.description.main}
                </p>

                {body.description.rest.map((text, index) => (
                    <p key={index} className="text-lg font-medium">
                        {text}
                    </p>
                ))}
            </section>

            <section className="flex flex-col items-center justify-center w-full gap-5 sm:flex-row">
                <Link
                    href={body.links.get_started.url}
                    className="flex items-center justify-center w-full gap-4 p-3 font-bold sm:w-fit bg-violet-600 rounded-xl text-neutral-50 hover:bg-violet-800"
                >
                    {body.links.get_started.label}
                    <ArrowRight size={20} weight="bold" />
                </Link>

                <Link
                    href={body.links.learn_more.url}
                    className="flex items-center justify-center w-full gap-4 p-3 font-bold sm:w-fit bg-violet-200 rounded-xl text-neutral-900 hover:bg-violet-300/70"
                >
                    {body.links.learn_more.label}
                    <Lightbulb size={20} weight="bold" />
                </Link>
            </section>

            <footer className="">
                <p>
                    {`${body.footer.copyright} `}
                    <a
                        href={body.footer.author.url}
                        target="_blank"
                        rel="noreferrer"
                        className="font-medium text-violet-600 hover:text-violet-800"
                    >
                        {body.footer.author.label}
                    </a>{' '}
                </p>
            </footer>
        </div>
    );
}
