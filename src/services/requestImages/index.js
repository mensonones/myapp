import { useFetch } from '../hookFetchBase';

export const RequestImages = () => {
    const res = useFetch("http://www.splashbase.co/api/v1/images/random", {});
    return res;
}