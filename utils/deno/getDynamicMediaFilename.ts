import { sepCase } from './sepCase.js';

export function getDynamicMediaFilename(contentKey: string, caveSource: string) {
	const filePart = caveSource.split('/').pop() as string;
	const fileName = filePart.split('.')[0];
	const fileExt = filePart.split('.')[1];
	return `${sepCase(contentKey)}_${sepCase(fileName)}.${fileExt}`;
}
