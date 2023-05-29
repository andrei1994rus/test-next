import IUrl from '@/interfaces/IUrl';

export type navigationData = IUrl[]; /*Array<IUrl>*/
export type errorData = Array<String>; /*string[]*/
export type errorModal = {
	message: string;
	code: string;
};
export type dataModal = {
	name: string;
};
