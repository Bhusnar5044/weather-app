import { useAppDispatch } from '@slice';
import { useFetchPlacesApiQuery } from '@slice/services/places';
import { setLocation } from '@slice/weatherSlice';
import { SearchIcon } from 'lucide-react';
import { FC, memo, useEffect, useRef, useState } from 'react';
import { useDebounce } from 'use-debounce';
import Loading from '../Loading';
import { ISearchSuggestion } from './types';

export const Search: FC = memo(() => {
    const [open, setOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [debouncedTerm] = useDebounce(searchTerm, 500);
    const [searchOptions, setSearchIptions] = useState<ISearchSuggestion[]>([]);
    const { isLoading, data, isSuccess } = useFetchPlacesApiQuery(debouncedTerm, {
        refetchOnMountOrArgChange: true,
    });

    const containerRef = useRef<HTMLDivElement>(null);
    const dispatch = useAppDispatch();

    const handleClickOutside = (event: MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
            setOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);

    useEffect(() => {
        if (isSuccess && data) {
            setSearchIptions(
                (data?.features?.map((item: any) => ({
                    id: item.id,
                    fullName: item.place_name,
                    lon: item.center[0],
                    lat: item.center[1],
                })) as ISearchSuggestion[]) ?? [],
            );
        }
    }, [data, isSuccess]);

    const handleOption = (place: ISearchSuggestion) => {
        dispatch(setLocation({ lat: place.lat, lon: place.lon }));
    };

    useEffect(() => {
        console.log({ searchOptions });
    }, [searchOptions]);

    return (
        <div ref={containerRef} className="z-50">
            <div className="flex items-center relative">
                <SearchIcon className="absolute left-2 opacity-30" size={20} />
                <input
                    onFocus={() => setOpen(true)}
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                    type="text"
                    className="block w-full lg:w-72 rounded-xl border-0 pl-8 py-1.5 white shadow-sm ring-1 ring-inset ring-light placeholder:text-gray-400 focus:right-2 focus:ring-inset sm:text-sm sm:leading-6"
                    placeholder="Search..."
                />
            </div>
            {open && (
                <div className="ml-1 mt-1 z-50 w-full lg:w-72 rounded-lg border bg-light text-popover-foreground shadow-md ring-inset ring-light outline-none animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2">
                    {isLoading ? (
                        <div className="h-[5rem] grid place-content-center">
                            <Loading />
                        </div>
                    ) : (
                        <ul>
                            {!!searchOptions?.length &&
                                searchOptions.map((item: ISearchSuggestion) => (
                                    <li
                                        className="h-[3rem] cursor-pointer overflow-ellipsis overflow-hidden whitespace-nowrap px-4 text-gray-900 flex items-center border-b-[.5px] border-slate-800 border-opacity-10 hover:bg-gray-100"
                                        key={item.id}
                                        onClick={() => handleOption(item)}>
                                        {item.fullName}
                                    </li>
                                ))}
                        </ul>
                    )}
                </div>
            )}
        </div>
    );
});
