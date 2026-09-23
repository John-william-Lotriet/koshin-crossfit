import createImageUrlBuilder from '@sanity/image-url';
import { client } from './client';
import { SanityImage } from './types';

const imageBuilder = createImageUrlBuilder(client);

export function urlForImage(source: SanityImage | string | undefined | null) {
  if (!source) return undefined;
  if (typeof source === 'string') return source;
  if (!source.asset) return undefined;

  return imageBuilder.image(source).auto('format').fit('max').url();
}
