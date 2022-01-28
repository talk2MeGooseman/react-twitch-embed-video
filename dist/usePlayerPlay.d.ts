import { IChannelEmbedParameters, ITwitchEmbed, IVodCollectionEmbedParameters, IVodEmbedParameters } from './useEmbedApi';
interface IPlayAction {
    (): void;
}
declare const usePlayerPlay: (Embed: ITwitchEmbed | undefined, { autoplay, onPlay, }: IChannelEmbedParameters | IVodCollectionEmbedParameters | IVodEmbedParameters) => IPlayAction;
export { usePlayerPlay };
