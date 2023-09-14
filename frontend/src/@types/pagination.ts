export type ParamsProps = {
    searchParams: {
        page: string;
    };
};

export type PaginationProps = {
    hasPrevPage: boolean;
    hasNextPage: boolean;
};

export type UrlPaginationProps = {
    take: string | number;
    skip: string | number;
};
