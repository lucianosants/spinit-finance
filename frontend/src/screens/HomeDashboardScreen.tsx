import { VariantsProps } from '../@types/button';
import { HomeDashboardProps } from '../@types/home-dashboard';
import { Card } from '../components';
import { currencyFormatter } from '../utils/currency-formatter';

export function HomeDashboardScreen({ cards }: HomeDashboardProps) {
    return (
        <>
            <section className="w-full mt-4">
                <h3 className="mb-4 text-2xl font-bold text-gray-200 text-start">
                    Dashboard
                </h3>
                <div className="flex flex-col gap-4 sm:flex-row">
                    <div className="flex-[60%] p-4 bg-primary-100 flex flex-col justify-start sm:justify-center sm:items-center items-start text-neutral-900 rounded-xl">
                        <p className="text-lg font-semibold">Saldo Total</p>
                        <p className="text-4xl font-bold">
                            {currencyFormatter(1400.46)}
                        </p>
                    </div>

                    <div className="flex-[40%] flex flex-col gap-5">
                        {cards.map((item, index) => (
                            <Card.Root
                                key={index}
                                url={item.url}
                                variant={item.variant as VariantsProps}
                            >
                                <Card.Header
                                    icon={item.icon}
                                    title={item.title}
                                />
                                <Card.Currency value={item.value} />
                            </Card.Root>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
