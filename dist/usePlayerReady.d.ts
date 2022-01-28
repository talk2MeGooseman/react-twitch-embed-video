import { IChannelEmbedParameters, ITwitchEmbed, IVodCollectionEmbedParameters, IVodEmbedParameters } from './useEmbedApi';
interface IReadyAction {
    (): void;
}
declare const usePlayerReady: (Embed: ITwitchEmbed | undefined, { autoplay: isAutoPlay, muted: isMuted, onReady, }: IChannelEmbedParameters | IVodCollectionEmbedParameters | IVodEmbedParameters) => IReadyAction;
export { usePlayerReady };
